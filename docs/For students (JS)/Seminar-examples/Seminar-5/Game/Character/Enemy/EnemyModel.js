class EnemyModel extends CharacterModel {
    constructor({
        strength,
        health,
        armor,
        name,
        color,
        position,
        speed,
        size
    }) {
        super({
            strength: strength,
            health: health,
            armor: armor,
            name: name,
            color: color,
            position: position,
            size: size,
            speed: speed
        });

        this.speedVector = new Speed({
            direction: Vector2.randomDirection(),
            magnitude: speed
        })
    }
}