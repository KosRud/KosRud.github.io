import CharacterModel from "../CharacterModel.js";
import SpeedVector from "../../Utility/SpeedVector.js";
import Vector2 from "../../Utility/Vector2.js";

export default class EnemyModel extends CharacterModel {
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

        this.speedVector = new SpeedVector({
            direction: Vector2.randomDirection(),
            magnitude: speed
        })
    }
}