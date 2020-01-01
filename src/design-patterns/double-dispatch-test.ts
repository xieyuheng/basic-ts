import assert from "assert"

abstract class Entity {
  abstract collide(that: Entity): string
}

class EntityOne extends Entity {
  collide(that: Entity): string {
    if (that instanceof EntityOne)
      return this.collideEntityOne(that)
    if (that instanceof EntityTwo)
      return this.collideEntityTwo(that)
    throw new Error("unhandled case")
  }

  collideEntityOne(that: EntityOne): string {
    return "EntityOne EntityOne"
  }

  collideEntityTwo(that: EntityTwo): string {
    return "EntityOne EntityTwo"
  }
}

class EntityTwo extends Entity {
  collide(that: Entity): string {
    if (that instanceof EntityOne)
      return this.collideEntityOne(that)
    if (that instanceof EntityTwo)
      return this.collideEntityTwo(that)
    throw new Error("unhandled case")
  }

  collideEntityOne(that: EntityOne): string {
    return "EntityTwo EntityOne"
  }

  collideEntityTwo(that: EntityTwo): string {
    return "EntityTwo EntityTwo"
  }
}

let entity_one = new EntityOne()
let entity_two = new EntityTwo()

assert(entity_one.collide(entity_one) === "EntityOne EntityOne")
assert(entity_one.collide(entity_two) === "EntityOne EntityTwo")
assert(entity_two.collide(entity_one) === "EntityTwo EntityOne")
assert(entity_two.collide(entity_two) === "EntityTwo EntityTwo")
