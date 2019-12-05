export declare class set_t<V> {
    private array;
    eq: (x: V, y: V) => boolean;
    constructor(eq: (x: V, y: V) => boolean);
    weak_eq(that: set_t<V>): boolean;
    to_array(): Array<V>;
    add(x: V): this;
    has(x: V): boolean;
    delete(x: V): boolean;
    get size(): number;
    [Symbol.iterator](): Generator<V, void, unknown>;
    entries(): Generator<[number, V], void, unknown>;
}
