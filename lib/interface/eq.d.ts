export declare class eq_t<A> {
    eq: (x: A, y: A) => boolean;
    constructor(the: {
        eq: (x: A, y: A) => boolean;
    });
    not_eq(x: A, y: A): boolean;
}
