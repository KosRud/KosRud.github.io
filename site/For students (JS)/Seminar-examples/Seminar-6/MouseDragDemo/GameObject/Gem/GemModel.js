import EventDispatcher from '../../EventDispatcher/EventDispatcher.js';
import GameObjectModel from '../GameObjectModel.js';

export default class GemModel extends GameObjectModel {
    constructor() {
        super();
        this.size = 20;

        /**
         * Null, if the gem is not being dragged.
         *
         * Otherwise, Vector2 offset from the mouse position to the gem position.
         */
        this.draggingOffset = null;
        this.isMouseOver = false;

        this.eventDispatcher = new EventDispatcher('socketChanged');

        /**
         * Reference to a Socket controller, where the Gem is placed
         *
         * If the Gem is not in a Socket, this will contain null.
         */
        let _socket = null;
        Object.defineProperty(this, 'socket', {
            get: function () {
                return _socket;
            },
            set: function (newSocket) {
                if (_socket != newSocket) {
                    _socket = newSocket;
                    this.eventDispatcher.dispatch('socketChanged');
                }
            },
        });

        this.drawOrder = 1;
    }
}
