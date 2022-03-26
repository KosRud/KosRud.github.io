import GameObjectModel from '../GameObjectModel.js';

export default class SocketModel extends GameObjectModel {
    constructor(name) {
        super();
        this.size = 25;
        this.name = name;
    }
}
