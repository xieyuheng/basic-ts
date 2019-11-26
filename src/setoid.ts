export
class setoid_t <T> {
  eq: (x: T, y: T) => boolean
  array: Array <T> = new Array()

  constructor(eq: (x: T, y: T) => boolean) {
    this.eq = eq
  }

  add(x: T): this {
    let i = this.array.findIndex(y => this.eq(x, y))
    if (i === -1) {
      this.array.push(x)
    }
    return this
  }

  has(x: T): boolean {
    let i = this.array.findIndex(y => this.eq(x, y))
    return i !== -1
  }

  delete(x: T): boolean {
    let result = this.has(x)
    let i = this.array.findIndex(y => this.eq(x, y))
    if (i !== -1) {
      this.array = this.array.slice(0, i).concat(this.array.slice(i + 1))
    }
    return result
  }

  get size(): number {
    return this.array.length
  }

  *[Symbol.iterator] () {
    for (let x of this.array) {
      yield x
    }
  }
}
