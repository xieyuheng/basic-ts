"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class eq_t {
    constructor(the) {
        this.eq = the.eq;
    }
    not_eq(x, y) {
        return !this.eq(x, y);
    }
}
exports.eq_t = eq_t;
