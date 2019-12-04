"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class option_t {
    bind(f) {
        if (this instanceof some_t) {
            return f(this.value);
        }
        else if (this instanceof none_t) {
            return new none_t();
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    static pure(value) {
        return new some_t(value);
    }
    static some(value) {
        return new some_t(value);
    }
    unwrap() {
        if (this instanceof some_t) {
            return this.value;
        }
        else if (this instanceof none_t) {
            throw new Error(`unwrap a none_t`);
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    unwrap_or_throw(error) {
        if (this instanceof some_t) {
            return this.value;
        }
        else if (this instanceof none_t) {
            throw error;
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    none_or_throw(error) {
        if (this instanceof none_t) {
        }
        else if (this instanceof some_t) {
            throw error;
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
    match({ some, none }) {
        if (this instanceof some_t) {
            return some(this.value);
        }
        else if (this instanceof none_t) {
            return none();
        }
        else {
            throw new Error(`unknown sub class: ${this.constructor.name}`);
        }
    }
}
exports.option_t = option_t;
class some_t extends option_t {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.some_t = some_t;
class none_t extends option_t {
    constructor() {
        super();
    }
}
exports.none_t = none_t;
