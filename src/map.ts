export class map_t<K, V> {
  private array: Array<[K, V]>

  key_eq: (x: K, y: K) => boolean

  constructor(the: {
    key_eq: (x: K, y: K) => boolean,
  }) {
    this.array = new Array()
    this.key_eq = the.key_eq
  }

  to_array(): Array<[K, V]> {
    return Array.from(this.array)
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

  *[Symbol.iterator] () {
    for (let [k, v] of this.array) {
      yield [k, v]
    }
  }

  *entries () {
    for (let [k, v] of this.array) {
      yield [k, v]
    }
  }

  *keys () {
    for (let [k, v] of this.array) {
      yield k
    }
  }

  *values () {
    for (let [k, v] of this.array) {
      yield v
    }
  }
}
