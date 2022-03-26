import Cooldown from "../Utility/Cooldown.js";
import EventDispatcher from "../EventDispatcher/EventDispatcher.js";

export default class CharacterModel {
    constructor({
        strength,
        health,
        armor,
        name,
        color,
        position,
        size,
        speed
    }) {
        this.strength = strength;
        this.armor = armor;
        this.name = name;
        this._color = color;
        this.position = position;
        this.size = size;
        this.speed = speed;

        this.eventDispatcher = new EventDispatcher(
            "healthChanged"
        );

        let _health = health; // no need to store it in "this"
        Object.defineProperty(
            this,
            "health", {
                get: () => {
                    return _health;
                },
                set: (value) => {
                    if (this._health != value) {
                        _health = value;
                        this.eventDispatcher.dispatch("healthChanged");
                    }
                }
            }
        );
        this.baseHealth = health;

        Object.defineProperty(
            this,
            "isDead", {
                get: () => {
                    return this.health == 0;
                },
            }
        );

        this.attackCooldown = new Cooldown(1000);
    }

    getColor() {
        if (
            this.attackCooldown.isAvailable() == false
        ) {
            return "red";
        }

        return this._color;
    }
}