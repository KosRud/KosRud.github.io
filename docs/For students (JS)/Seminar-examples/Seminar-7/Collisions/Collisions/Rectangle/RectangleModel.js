import Vector2 from '../Utility/Vector2.js';

export default class RectangleModel {
    /**
     * @constructs GameObjectModel
     * @param {Vector2} size
     */
    constructor(size) {
        this.position = new Vector2();
        this.size = size;
    }

    getColor() {
        return 'gray';
    }
}
