let Key = {
    Space: 32,
    W: 87,
    S: 83,
    A: 65,
    D: 68,
    Ctrl: 17,
    K: 75
}

let InputManager = {

    _downKeys: {},
    _pressedKeysAfterLastUpdate: {},
    _pressedKeysBeforeLastUpdate: {},


    // IsKeyDown(keyCode) tells you whether the key is currently down
    IsKeyDown: function (keyCode) {

        /*
          if the key was pressed and immediately released
          between two runs of the game loop (frames)
          
          it will still be registered for 1 frame
        */
        if (this.WasKeyPressed(keyCode)) {
            return true;
        }

        return this._downKeys[keyCode];
    },

    /*
		WasKeyPressed(keyCode) tells you whether the key was pressed
		it only returns "true" during a single frame after the key was pressed
		holding the key down will not cause it to return "true" for multiple frames
		only releasing the key and pressing it down again will cause WasKeyPressed(keyCode)
		to return "true" again
  */
    WasKeyPressed: function (keyCode) {
        return this._pressedKeysBeforeLastUpdate[keyCode];
    },

    OnKeyDown: function (event) {
        // we only register key as "pressed" if it wasn't already held down
        if (!this._downKeys[event.keyCode]) {
            this._pressedKeysAfterLastUpdate[event.keyCode] = true;
        }

        this._downKeys[event.keyCode] = true;
    },

    OnKeyUp: function (event) {
        delete this._downKeys[event.keyCode];
    },

    Update: function () {
        this._pressedKeysBeforeLastUpdate = this._pressedKeysAfterLastUpdate;
        this._pressedKeysAfterLastUpdate = {};
    },
}

window.addEventListener(
    'keyup',
    function (event) {
        InputManager.OnKeyUp(event);
    },
    false
);

window.addEventListener(
    'keydown',
    function (event) {
        InputManager.OnKeyDown(event);
    },
    false
);