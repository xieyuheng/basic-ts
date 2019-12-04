import { set_t } from './set'

export class map_t<K, V> {
  private array: Array<[K, V]>

  key_eq: (x: K, y: K) => boolean
  value_eq: (x: V, y: V) => boolean

  constructor(the: {
    key_eq: (x: K, y: K) => boolean,
    value_eq: (x: V, y: V) => boolean,
  }) {
    this.array = new Array()
    this.key_eq = the.key_eq
    this.value_eq = the.value_eq
  }

  to_array(): Array<[K, V]> {
    return Array.from(this.array)
  }

  weak_eq(that: map_t<K, V>): boolean {
    if (this.size !== that.size) {
      return false
    } else {
      for (let [x, y] of this) {
        let z = that.get(x)
        if (z === undefined) {
          return false
        } else if (! this.value_eq(y, z)) {
          return false
        } else if (! that.value_eq(y, z)) {
          return false
        }
      }
      for (let [x, y] of that) {
        let z = this.get(x)
        if (z === undefined) {
          return false
        } else if (! this.value_eq(y, z)) {
          return false
        } else if (! that.value_eq(y, z)) {
          return false
        }
      }
      return true
    }
  }

  get size(): number {
    return this.array.length
  }

  has(x: K): boolean {
    let i = this.array.findIndex(([y, _]) => this.key_eq(x, y))
    return i !== -1
  }

  get(x: K): V | undefined {
    let i = this.array.findIndex(([y, _]) => this.key_eq(x, y))
    if (i === -1) {
      return undefined
    } else {
      let [_, v] = this.array[i]
      return v
    }
  }

  get_unwrap(x: K): V {
    let v = this.get(x)
    if (v) {
      return v
    } else {
      throw new Error('map.get_unwrap')
    }
  }

  set(x: K, v: V): this {
    let i = this.array.findIndex(([y, _]) => this.key_eq(x, y))
    if (i === -1) {
      this.array.push([x, v])
    } else {
      this.array[i] = [x, v]
    }
    return this
  }

  set_array(array: Array<[K, V]>): this {
    for (let [k, v] of array) {
      this.set(k, v)
    }
    return this
  }

  set_iter(iter: Iterator<[K, V]>): this {
    while (true) {
      let result = iter.next()
      if (result.done) {
        break
      } else {
        let [k, v] = result.value
        this.set(k, v)
      }
    }
    return this
  }

  *[Symbol.iterator]() {
    for (let [k, v] of this.array) {
      yield [k, v] as [K, V]
    }
  }

  *entries() {
    for (let [k, v] of this.array) {
      yield [k, v] as [K, V]
    }
  }

  *keys() {
    for (let [k, v] of this.array) {
      yield k as K
    }
  }

  *values() {
    for (let [k, v] of this.array) {
      yield v as V
    }
  }

  endo_map_on_value(f: (v: V) => V): map_t<K, V> {
    let map: map_t<K, V> = new map_t(this)
    return map
  }

  compose<W>(that: map_t<V, W>): map_t<K, W> {
    let map: map_t<K, W> = new map_t({
      key_eq: this.key_eq,
      value_eq: that.value_eq,
    })
    for (let [key, value] of this) {
      map.set(key, that.get_unwrap(value))
    }
    return map
  }
}
