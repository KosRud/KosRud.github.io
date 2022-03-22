class SkeletonModel extends EnemyModel {
    constructor(position) {
        super({
            strength: 15,
            armor: 2,
            health: 12,
            name: "Skeleton",
            color: "gray",
            position: position,
            speed: 4,
            size: 25
        });
    }
}