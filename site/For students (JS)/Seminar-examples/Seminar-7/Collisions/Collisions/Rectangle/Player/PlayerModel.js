import RectangleModel from '../RectangleModel.js';

export default class PlayerModel extends RectangleModel {
    /**
     * @constructs GameObjectModel
     * @param {Vector2} size
     */
    constructor(size) {
        super(size);
        this.isColliding = false;
    }

    getColor() {
        if (this.isColliding) {
            return 'red';
        } else {
            return 'green';
        }
    }
}
