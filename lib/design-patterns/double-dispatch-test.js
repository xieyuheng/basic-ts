"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class Entity {
}
class EntityOne extends Entity {
    collide(that) {
        if (that instanceof EntityOne)
            return this.collideEntityOne(that);
        if (that instanceof EntityTwo)
            return this.collideEntityTwo(that);
        throw new Error("unhandled case");
    }
    collideEntityOne(that) {
        return "EntityOne EntityOne";
    }
    collideEntityTwo(that) {
        return "EntityOne EntityTwo";
    }
}
class EntityTwo extends Entity {
    collide(that) {
        if (that instanceof EntityOne)
            return this.collideEntityOne(that);
        if (that instanceof EntityTwo)
            return this.collideEntityTwo(that);
        throw new Error("unhandled case");
    }
    collideEntityOne(that) {
        return "EntityTwo EntityOne";
    }
    collideEntityTwo(that) {
        return "EntityTwo EntityTwo";
    }
}
let entity_one = new EntityOne();
let entity_two = new EntityTwo();
assert_1.default(entity_one.collide(entity_one) === "EntityOne EntityOne");
assert_1.default(entity_one.collide(entity_two) === "EntityOne EntityTwo");
assert_1.default(entity_two.collide(entity_one) === "EntityTwo EntityOne");
assert_1.default(entity_two.collide(entity_two) === "EntityTwo EntityTwo");
