class SlimeModel extends EnemyModel {
    constructor(position) {
        super({
            strength: 10,
            armor: 1,
            health: 40,
            name: "Slime",
            color: "green",
            position: position,
            speed: 3,
            size: 90
        });
    }
}
