import Vector2 from './Vector2.js';

export let InputManager = {
    mousePosition: new Vector2(),
    mouseTrackingTarget: null,

    _onMouseMove: function (event) {
        this.mousePosition.x = event.offsetX;
        // invert Y axis
        this.mousePosition.y = this.mouseTrackingTarget.height - event.offsetY;
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
        }

        mouseTrackingTarget = newTrackingTarget;

        mouseTrackingTarget.addEventListener('mousemove', mouseMoveCallback);
    },
});
