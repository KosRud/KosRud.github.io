import Vector2 from "./Vector2.js";

export let Key = {
    Space: 32,
    W: 87,
    S: 83,
    A: 65,
    D: 68,
    Ctrl: 17,
    K: 75
}

export let InputManager = {

    _downKeys: {},
    _pressedKeysAfterLastUpdate: {},
    _pressedKeysBeforeLastUpdate: {},
    _mouseCaptureElement: null,
    _mousePosition: new Vector2(0, 0),
    _mouseCaptureCallback: (event) => {
        InputManager._mousePosition.x = event.offsetX;
        /*
            flip y coordinate
            by default it goes down
        */
        InputManager._mousePosition.y =
            InputManager._mouseCaptureElement.height - event.offsetY;
    },

    setMouseCaptureElement: function (element) {
        if (this._mouseCaptureElement != null) {
            this._mouseCaptureElement.removeEventListener(
                "mousemove",
                this._mouseCaptureCallback
            );
        }

        this._mouseCaptureElement = element;

        this._mouseCaptureElement.addEventListener(
            "mousemove",
            this._mouseCaptureCallback
        )
    },

    getMousePosition: function () {
        return this._mousePosition.clone();
    },


    // IsKeyDown(keyCode) tells you whether the key is currently down
    isKeyDown: function (key) {

        /*
          If the key was pressed and immediately released
          between two runs of the game loop (frames),
          
          it will still be registered for 1 frame
          as being held down.
        */
        if (this.wasKeyPressed(key)) {
            return true;
        }

        return this._downKeys[key];
    },

    /**
     * Tells if the key was pressed. Only returns "true" during a single frame after the key was pressed.
     * 
     * Holding the key down will not cause it to return "true" for multiple frames. Only releasing the key and pressing it down again will cause WasKeyPressed(keyCode) to return "true" again.
     * @param {Number} keyCode - Use Key object to get key codes.
     * @returns {Boolean} True if the key was pressed, false otherwise.
     */
    wasKeyPressed: function (key) {
        return this._pressedKeysBeforeLastUpdate[key];
    },

    /**
     * Updates which keys were pressed (not just held) during the last frame. Call this function at the START of every frame.
     */
    Update: function () {
        this._pressedKeysBeforeLastUpdate = this._pressedKeysAfterLastUpdate;
        this._pressedKeysAfterLastUpdate = {};
    },

    _onKeyUp: function (event) {
        delete this._downKeys[event.key];
    },

    _onKeyDown: function (event) {
        // we only register key as "pressed" if it wasn't already held down
        if (!this._downKeys[event.key]) {
            this._pressedKeysAfterLastUpdate[event.key] = true;
        }

        this._downKeys[event.key] = true;
    }
}

window.addEventListener(
    'keyup',
    InputManager._onKeyUp.bind(InputManager),
    false
);

window.addEventListener(
    'keydown',
    InputManager._onKeyDown.bind(InputManager),
    false
);