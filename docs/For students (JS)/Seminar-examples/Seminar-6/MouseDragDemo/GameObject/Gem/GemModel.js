import GameObjectModel from "../GameObjectModel.js";

export default class GemModel extends GameObjectModel {
    /**
     * @param {String} color 
     */
    constructor(color) {
        super();
        this.size = 20;
        this.color = color;
    }
}