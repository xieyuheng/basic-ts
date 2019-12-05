import { eq_t } from '../interface/eq';
export declare class map_t<K, V> {
    private array;
    key_eq: eq_t<K>;
    value_eq: eq_t<V>;
    constructor(the: {
        key_eq: eq_t<K>;
        value_eq: eq_t<V>;
    });
    to_array(): Array<[K, V]>;
    weak_eq(that: map_t<K, V>): boolean;
    get size(): number;
    has(x: K): boolean;
    get(x: K): V | undefined;
    get_unwrap(x: K): V;
    set(x: K, v: V): this;
    set_array(array: Array<[K, V]>): this;
    set_iter(iter: Iterator<[K, V]>): this;
    [Symbol.iterator](): Generator<[K, V], void, unknown>;
    entries(): Generator<[K, V], void, unknown>;
    keys(): Generator<K, void, unknown>;
    values(): Generator<V, void, unknown>;
    endo_map_on_value(f: (v: V) => V): map_t<K, V>;
    compose<W>(that: map_t<V, W>): map_t<K, W>;
}
