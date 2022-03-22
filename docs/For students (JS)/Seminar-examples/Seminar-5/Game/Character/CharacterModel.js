class CharacterModel {
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
        this.health = health;
        this.armor = armor;
        this.name = name;
        this._color = color;
        this.position = position;
        this.size = size;
        this.speed = speed;

        this.baseHealth = health;

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