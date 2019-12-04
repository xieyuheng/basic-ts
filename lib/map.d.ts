export declare class map_t<K, V> {
    private array;
    key_eq: (x: K, y: K) => boolean;
    value_eq: (x: V, y: V) => boolean;
    constructor(the: {
        key_eq: (x: K, y: K) => boolean;
        value_eq: (x: V, y: V) => boolean;
    });
    to_array(): Array<[K, V]>;
    weak_eq(that: map_t<K, V>): boolean;
    get size(): number;
    has(x: K): boolean;
    get(x: K): V | undefined;
    set(x: K, v: V): this;
    set_array(array: Array<[K, V]>): this;
    [Symbol.iterator](): Generator<[K, V], void, unknown>;
    entries(): Generator<[K, V], void, unknown>;
    keys(): Generator<K, void, unknown>;
    values(): Generator<V, void, unknown>;
}
