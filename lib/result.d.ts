export declare abstract class result_t<T, E> {
    bind<X>(f: (x: T) => result_t<X, E>): result_t<X, E>;
    static pure<X, Y>(value: X): result_t<X, Y>;
    static ok<X, Y>(value: X): result_t<X, Y>;
    static err<X, Y>(error: Y): result_t<X, Y>;
    unwrap(): T;
    unwrap_err(): E;
    unwrap_or_throw(error: Error): T;
    unwrap_err_or_throw(error: Error): E;
    match<X, Y>({ ok, err }: {
        ok: (value: T) => X;
        err: (error: E) => Y;
    }): X | Y;
}
export declare class ok_t<T, E> extends result_t<T, E> {
    value: T;
    constructor(value: T);
}
export declare class err_t<T, E> extends result_t<T, E> {
    error: E;
    constructor(error: E);
}
