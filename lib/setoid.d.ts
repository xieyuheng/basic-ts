export declare class setoid_t<T> {
    eq: (x: T, y: T) => boolean;
    array: Array<T>;
    constructor(eq: (x: T, y: T) => boolean);
    add(x: T): this;
    has(x: T): boolean;
    delete(x: T): boolean;
    get size(): number;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
