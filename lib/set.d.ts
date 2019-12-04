export declare class set_t<T> {
    private array;
    eq: (x: T, y: T) => boolean;
    constructor(eq: (x: T, y: T) => boolean);
    add(x: T): this;
    has(x: T): boolean;
    delete(x: T): boolean;
    get size(): number;
    [Symbol.iterator](): Generator<T, void, unknown>;
    entries(): Generator<[number, T], void, unknown>;
    to_array(): Array<T>;
}
