export class eq_t<A> {
  eq: (x: A, y: A) => boolean

  constructor(the: {
    eq: (x: A, y: A) => boolean,
  }) {
    this.eq = the.eq
  }

  not_eq(x: A, y: A): boolean {
    return !this.eq(x, y)
  }
}
