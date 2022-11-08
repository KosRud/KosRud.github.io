import EnemyModel from "../EnemyModel.js";

export default class SkeletonModel extends EnemyModel {
    constructor(position) {
        super({
            strength: 15,
            armor: 2,
            health: 12,
            name: "Skeleton",
            color: "gray",
            position: position,
            speed: 4.5,
            size: 25
        });
    }
}