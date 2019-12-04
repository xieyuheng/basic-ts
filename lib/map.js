"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class map_t {
    constructor(the) {
        this.array = new Array();
        this.key_eq = the.key_eq;
    }
    to_array() {
        return Array.from(this.array);
    }
    has(x) {
        let i = this.array.findIndex(([y, _]) => this.key_eq(x, y));
        return i !== -1;
    }
    get(x) {
        let i = this.array.findIndex(([y, _]) => this.key_eq(x, y));
        if (i === -1) {
            return undefined;
        }
        else {
            let [_, v] = this.array[i];
            return v;
        }
    }
    set(x, v) {
        let i = this.array.findIndex(([y, _]) => this.key_eq(x, y));
        if (i === -1) {
            this.array.push([x, v]);
        }
        else {
            this.array[i] = [x, v];
        }
        return this;
    }
    set_array(array) {
        for (let [k, v] of array) {
            this.set(k, v);
        }
        return this;
    }
    *[Symbol.iterator]() {
        for (let [k, v] of this.array) {
            yield [k, v];
        }
    }
    *entries() {
        for (let [k, v] of this.array) {
            yield [k, v];
        }
    }
    *keys() {
        for (let [k, v] of this.array) {
            yield k;
        }
    }
    *values() {
        for (let [k, v] of this.array) {
            yield v;
        }
    }
}
exports.map_t = map_t;
