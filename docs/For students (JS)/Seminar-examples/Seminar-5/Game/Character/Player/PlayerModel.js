class PlayerModel extends CharacterModel {
    constructor({
        name,
        position
    }) {
        super({
            strength: 4,
            armor: 15,
            health: 25,
            name: name,
            color: "blue",
            position: position,
            speed: 5,
            size: 20
        });

        this.regenCooldown = new Cooldown(5000);
        this.regenAmount = 5;
    }

    isRegenOnCooldown() {
        return new Date().getTime() - this.timeLastRegen < this.regenCooldown;
    }
}