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

        this._health = health;
        this.baseHealth = health;

        this.attackCooldown = new Cooldown(1000);

        this.eventListeners = {
            healthChanged: []
        };
    }

    getHealth() {
        return this._health;
    }

    setHealth(value) {
        this._health = value;
        for (
            const callback of this.eventListeners["healthChanged"]
        ) {
            callback();
        }
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