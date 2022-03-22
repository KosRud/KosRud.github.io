class SlimeModel extends EnemyModel {
    constructor(position) {
        super({
            strength: 10,
            armor: 1,
            health: 16,
            name: "Slime",
            color: "green",
            position: position,
            speed: 3,
            size: 100
        });
    }
}
