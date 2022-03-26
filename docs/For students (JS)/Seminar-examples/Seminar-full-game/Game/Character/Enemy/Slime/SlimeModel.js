import EnemyModel from "../EnemyModel.js";

export default class SlimeModel extends EnemyModel {
    constructor(position) {
        super({
            strength: 12,
            armor: 1,
            health: 40,
            name: "Slime",
            color: "green",
            position: position,
            speed: 3,
            size: 80
        });
    }
}