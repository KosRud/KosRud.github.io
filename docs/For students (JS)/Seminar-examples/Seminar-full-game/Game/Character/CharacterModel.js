import Cooldown from "../Utility/Cooldown.js";

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

        let _health = health; // no need to store it in "this"
        Object.defineProperty(
            this,
            "health", {
                get: () => {
                    return _health;
                },
                set: (value) => {
                    _health = value;

                    // notify everyone who subscibed to the event
                    for (
                        const callback of this.eventListeners["healthChanged"]
                    ) {
                        callback();
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

        this.eventListeners = {
            healthChanged: []
        };
    }

    addEventListener(event, callback) {
        if (
            this.eventListeners[event].includes(callback)
        ) {
            throw "adding the same event handler twice!";
        }

        this.eventListeners[event].push(callback);
    }

    removeEventlistener(event, callback) {
        this.eventListeners[event] = this.eventListeners[event].filter(
            (item) => item != callback
        );
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