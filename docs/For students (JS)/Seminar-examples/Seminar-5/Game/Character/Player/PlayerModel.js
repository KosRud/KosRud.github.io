import CharacterModel from "../CharacterModel.js";
import Cooldown from "../../Utility/Cooldown.js";

export default class PlayerModel extends CharacterModel {
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
}