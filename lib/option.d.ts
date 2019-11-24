export declare abstract class option_t<T> {
    bind<X>(f: (x: T) => option_t<X>): option_t<X>;
    static pure<X>(value: X): option_t<X>;
    static some<X>(value: X): option_t<X>;
    unwrap(): T;
    unwrap_or_throw(error: Error): T;
    none_or_throw(error: Error): void;
    match<X, Y>({ some, none }: {
        some: (value: T) => X;
        none: () => Y;
    }): X | Y;
}
export declare class some_t<T> extends option_t<T> {
    value: T;
    constructor(value: T);
}
export declare class none_t<T> extends option_t<T> {
    constructor();
}
