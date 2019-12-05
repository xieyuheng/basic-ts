import { eq_t } from '../interface/eq';
export declare class set_t<V> {
    private array;
    eq: eq_t<V>;
    constructor(the: {
        eq: eq_t<V>;
    });
    weak_eq(that: set_t<V>): boolean;
    to_array(): Array<V>;
    add(x: V): this;
    has(x: V): boolean;
    delete(x: V): boolean;
    get size(): number;
    [Symbol.iterator](): Generator<V, void, unknown>;
    entries(): Generator<[number, V], void, unknown>;
}
