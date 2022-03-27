import EnemyModel from "../EnemyModel.js";

export default class ThiefModel extends EnemyModel {
    constructor(position) {
        super({
            strength: 18,
            armor: 3,
            health: 8,
            name: "Thief",
            color: "rgba(40,40,40)",
            position: position,
            speed: 6,
            size: 20
        });
    }
}