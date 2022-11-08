class PlayerModel extends CharacterModel {
    constructor(name) {
        super({
            strength: 4,
            armor: 3,
            health: 35,
            name: name
        })
    }
}