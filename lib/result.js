"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class result_t {
    bind(f) {
        if (this instanceof ok_t) {
            return f(this.value);
        }
        else if (this instanceof err_t) {
            return new err_t(this.error);
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    static pure(value) {
        return new ok_t(value);
    }
    static ok(value) {
        return new ok_t(value);
    }
    static err(error) {
        return new err_t(error);
    }
    unwrap() {
        if (this instanceof ok_t) {
            return this.value;
        }
        else if (this instanceof err_t) {
            throw new Error(`unwrap an err_t`);
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    unwrap_err() {
        if (this instanceof err_t) {
            return this.error;
        }
        else if (this instanceof ok_t) {
            throw new Error(`unwrap_err an ok_t`);
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    unwrap_or_throw(error) {
        if (this instanceof ok_t) {
            return this.value;
        }
        else if (this instanceof err_t) {
            throw error;
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    unwrap_err_or_throw(error) {
        if (this instanceof err_t) {
            return this.error;
        }
        else if (this instanceof ok_t) {
            throw error;
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    match({ ok, err }) {
        if (this instanceof ok_t) {
            return ok(this.value);
        }
        else if (this instanceof err_t) {
            return err(this.error);
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
}
exports.result_t = result_t;
class ok_t extends result_t {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.ok_t = ok_t;
class err_t extends result_t {
    constructor(error) {
        super();
        this.error = error;
    }
}
exports.err_t = err_t;
