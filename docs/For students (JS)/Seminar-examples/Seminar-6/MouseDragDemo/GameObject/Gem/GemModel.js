import Vector2 from '../../Utility/Vector2.js';
import GameObjectModel from '../GameObjectModel.js';

export default class GemModel extends GameObjectModel {
    /**
     * @param {String} color
     */
    constructor(color) {
        super();
        this.size = 20;
        this.color = color;

        /**
         * Null, if the gem is not being dragged.
         *
         * Otherwise, Vector2 offset from the mouse position to the gem position.
         */
        this.draggingOffset = null;
        this.isMouseOver = false;
    }
}
