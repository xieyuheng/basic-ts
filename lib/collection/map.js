"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class map_t {
    constructor(the) {
        this.array = new Array();
        this.key_eq = the.key_eq;
        this.value_eq = the.value_eq;
    }
    to_array() {
        return Array.from(this.array);
    }
    weak_eq(that) {
        if (this.size !== that.size) {
            return false;
        }
        else {
            for (let [x, y] of this) {
                let z = that.get(x);
                if (z === undefined) {
                    return false;
                }
                else if (this.value_eq.not_eq(y, z)) {
                    return false;
                }
                else if (that.value_eq.not_eq(y, z)) {
                    return false;
                }
            }
            for (let [x, y] of that) {
                let z = this.get(x);
                if (z === undefined) {
                    return false;
                }
                else if (this.value_eq.not_eq(y, z)) {
                    return false;
                }
                else if (that.value_eq.not_eq(y, z)) {
                    return false;
                }
            }
            return true;
        }
    }
    get size() {
        return this.array.length;
    }
    has(x) {
        let i = this.array.findIndex(([y, _]) => this.key_eq.eq(x, y));
        return i !== -1;
    }
    get(x) {
        let i = this.array.findIndex(([y, _]) => this.key_eq.eq(x, y));
        if (i === -1) {
            return undefined;
        }
        else {
            let [_, v] = this.array[i];
            return v;
        }
    }
    get_unwrap(x) {
        let v = this.get(x);
        if (v) {
            return v;
        }
        else {
            throw new Error('map.get_unwrap');
        }
    }
    set(x, v) {
        let i = this.array.findIndex(([y, _]) => this.key_eq.eq(x, y));
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
    set_iter(iter) {
        while (true) {
            let result = iter.next();
            if (result.done) {
                break;
            }
            else {
                let [k, v] = result.value;
                this.set(k, v);
            }
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
    endo_map_on_value(f) {
        let map = new map_t(this);
        return map;
    }
    compose(that) {
        let map = new map_t({
            key_eq: this.key_eq,
            value_eq: that.value_eq,
        });
        for (let [key, value] of this) {
            map.set(key, that.get_unwrap(value));
        }
        return map;
    }
}
exports.map_t = map_t;
