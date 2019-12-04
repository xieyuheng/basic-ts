export declare class map_t<K, V> {
    private array;
    key_eq: (x: K, y: K) => boolean;
    constructor(the: {
        key_eq: (x: K, y: K) => boolean;
    });
    to_array(): Array<[K, V]>;
    has(x: K): boolean;
    get(x: K): V | undefined;
    set(x: K, v: V): this;
    set_array(array: Array<[K, V]>): this;
    [Symbol.iterator](): Generator<(K | V)[], void, unknown>;
    entries(): Generator<(K | V)[], void, unknown>;
    keys(): Generator<K, void, unknown>;
    values(): Generator<V, void, unknown>;
}
