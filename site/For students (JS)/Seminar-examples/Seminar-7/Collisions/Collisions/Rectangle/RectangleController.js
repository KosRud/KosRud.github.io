import Controller from '../MVC/Controller.js';

export default class RectangleController extends Controller {
    update() {
        //
    }

    /**
     * @returns {boolean}
     * @param {RectangleController} other
     */
    getIsColliding(other) {
        if (
            other.model.position.x - other.model.size.x * 0.5 >
            this.model.position.x + this.model.size.x * 0.5
        ) {
            return false;
        }

        if (
            other.model.position.x + other.model.size.x * 0.5 <
            this.model.position.x - this.model.size.x * 0.5
        ) {
            return false;
        }

        if (
            other.model.position.y - other.model.size.y * 0.5 >
            this.model.position.y + this.model.size.y * 0.5
        ) {
            return false;
        }

        if (
            other.model.position.y + other.model.size.y * 0.5 <
            this.model.position.y - this.model.size.y * 0.5
        ) {
            return false;
        }

        return true;
    }
}
