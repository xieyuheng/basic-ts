export declare abstract class set_t {
    abstract eq: (that: this) => boolean;
}
export interface type_t extends Function {
    new (...args: any[]): set_t;
}
