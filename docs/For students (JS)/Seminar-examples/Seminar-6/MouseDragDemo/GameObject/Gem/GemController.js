import Controller from '../../MVC/Controller.js';
import Vector2 from '../../Utility/Vector2.js';

export default class GemController extends Controller {
    constructor({ model, view, mouseDragDemo }) {
        super({
            view: view,
            model: model,
        });
        this.mouseDragDemo = mouseDragDemo;
    }

    _onPositionChanged() {}

    /**
     * Returns true if mouse is hovering above the gem, otherwse false.
     * @returns {Boolean}
     */
    _isMouseOver() {
        const mousePosition = this.mouseDragDemo.inputManager.mousePosition;
        const distance = mousePosition.subtract(this.model.position).length();

        if (distance < this.model.size) {
            return true;
        } else {
            return false;
        }
    }

    onMouseDown() {
        if (this._isMouseOver()) {
            this.model.draggingOffset = this.model.position.subtract(
                this.mouseDragDemo.inputManager.mousePosition
            );
        }
    }

    onMouseUp() {
        this.model.draggingOffset = null;
    }

    update() {
        if (this.model.draggingOffset != null) {
            this.model.position =
                this.mouseDragDemo.inputManager.mousePosition.add(
                    this.model.draggingOffset
                );
        }

        this.model.isMouseOver = this._isMouseOver();
    }
}
