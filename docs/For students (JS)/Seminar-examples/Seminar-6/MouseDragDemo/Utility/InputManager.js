import Vector2 from './Vector2.js';
import EventDispatcher from '../EventDispatcher/EventDispatcher.js';

export let InputManager = {
    mousePos: new Vector2(),
    mouseTrackingTarget: null,

    eventDispatcher: new EventDispatcher('mousedown', 'mouseup'),

    _onMouseMove: function (event) {
        this.mousePos.x = event.offsetX;
        // invert Y axis
        this.mousePos.y = this.mouseTrackingTarget.height - event.offsetY;
    },

    _onMouseDown: function () {
        this.eventDispatcher.dispatch('mousedown');
    },

    _onMouseUp: function () {
        this.eventDispatcher.dispatch('mouseup');
    },
};

let mouseTrackingTarget = null;
/*
    If we want to remove the event handler,
    we need to keep the function reference.

    Every time we call .bind(), a new "bound" function is created.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
*/
const mouseMoveCallback = InputManager._onMouseMove.bind(InputManager);
const mouseUpCallback = InputManager._onMouseUp.bind(InputManager);
const mouseDownCallback = InputManager._onMouseDown.bind(InputManager);

Object.defineProperty(InputManager, 'mouseTrackingTarget', {
    get: function () {
        return mouseTrackingTarget;
    },

    set: function (newTrackingTarget) {
        if (mouseTrackingTarget != null) {
            mouseTrackingTarget.removeEventListener(
                'mousemove',
                mouseMoveCallback
            );
            mouseTrackingTarget.removeEventListener('mouseup', mouseUpCallback);
            mouseTrackingTarget.removeEventListener(
                'mousedown',
                mouseDownCallback
            );
        }

        mouseTrackingTarget = newTrackingTarget;

        mouseTrackingTarget.addEventListener('mousemove', mouseMoveCallback);
        mouseTrackingTarget.addEventListener('mouseup', mouseUpCallback);
        mouseTrackingTarget.addEventListener('mousedown', mouseDownCallback);
    },
});
