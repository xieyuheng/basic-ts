"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class set_t {
    constructor(the) {
        this.array = new Array();
        this.eq = the.eq;
    }
    weak_eq(that) {
        if (this.size !== that.size) {
            return false;
        }
        else {
            for (let x of this) {
                if (!that.has(x)) {
                    return false;
                }
            }
            for (let x of that) {
                if (!that.has(x)) {
                    return false;
                }
            }
            return true;
        }
    }
    to_array() {
        return Array.from(this.array);
    }
    add(x) {
        let i = this.array.findIndex(y => this.eq.eq(x, y));
        if (i === -1) {
            this.array.push(x);
        }
        return this;
    }
    has(x) {
        let i = this.array.findIndex(y => this.eq.eq(x, y));
        return i !== -1;
    }
    delete(x) {
        let result = this.has(x);
        let i = this.array.findIndex(y => this.eq.eq(x, y));
        if (i !== -1) {
            this.array = this.array.slice(0, i).concat(this.array.slice(i + 1));
        }
        return result;
    }
    get size() {
        return this.array.length;
    }
    *[Symbol.iterator]() {
        for (let x of this.array) {
            yield x;
        }
    }
    *entries() {
        for (let [k, v] of this.array.entries()) {
            yield [k, v];
        }
    }
}
exports.set_t = set_t;
