import GameObjectController from '../GameObjectController.js';
import SocketController from '../Socket/SocketController.js';

export default class GemController extends GameObjectController {
    constructor({ model, view, mouseDragDemo }) {
        super({
            view: view,
            model: model,
        });
        this.game = mouseDragDemo;
    }

    /**
     * Returns true if mouse is hovering above the gem, otherwse false.
     * @returns {Boolean}
     */
    _isMouseOver() {
        const mousePosition = this.game.inputManager.mousePosition;
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
                this.game.inputManager.mousePosition
            );

            /*
                We picked up the Gem,
                it's no longer in a Socket.
            */
            this.model.socket = null;
        }
    }

    onMouseUp() {
        /*
            When releasing the Gem from dragging,
            we check if it's near a Socket.

            If there is a Socket close enough (SNAP_DISTANCE),
            we place the Gem in a Socket.
        */

        const SNAP_DISTANCE = 20;

        // if the gem was being dragged
        if (this.model.draggingOffset) {
            let minDistance = Infinity;
            let nearestSocket = null;

            // find the nearest Socket
            for (const controller of this.game.gameObjects) {
                if (controller instanceof SocketController == false) {
                    // we are only interested in sockets
                    continue;
                }

                // it IS a socket, keep processing

                const distance = this.model.position
                    .subtract(controller.model.position)
                    .length();

                /*
                    If the distance to this socket is smaller,
                    than previously saved distance,
                    save the newly found nearest socket

                    the first socket is guaranteed to overwrite nearestSocket=null,
                    because any distance is less, than Infinity
                */
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestSocket = controller;
                }
            }

            /*
                If there are no sockets in the game,
                nearestSocket will remain null
            */
            if (nearestSocket != null && minDistance < SNAP_DISTANCE) {
                this.model.position = nearestSocket.model.position;
                this.model.socket = nearestSocket;
            }
        }
        this.model.draggingOffset = null;
    }

    update() {
        if (this.model.draggingOffset != null) {
            this.model.position = this.game.inputManager.mousePosition.add(
                this.model.draggingOffset
            );
        }

        this.model.isMouseOver = this._isMouseOver();
    }
}
