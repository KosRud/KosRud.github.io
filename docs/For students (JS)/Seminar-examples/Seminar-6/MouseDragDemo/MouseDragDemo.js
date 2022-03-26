import GemController from './GameObject/Gem/GemController.js';
import GemModel from './GameObject/Gem/GemModel.js';
import GemView from './GameObject/Gem/GemView.js';
import { InputManager } from './Utility/InputManager.js';
import Vector2 from './Utility/Vector2.js';

export default class MouseDragDemo {
    constructor(canvas) {
        this.canvas = canvas;
        this._running = true;
        this.gameObjects = [];

        this.inputManager = InputManager;
        this.inputManager.mouseTrackingTarget = canvas;
        this.inputManager.eventDispatcher.addEventListener(
            'mouseup',
            this._onMouseUp.bind(this)
        );
        this.inputManager.eventDispatcher.addEventListener(
            'mousedown',
            this._onMouseDown.bind(this)
        );

        // create a Gem
        {
            let gemModel = new GemModel('red');

            gemModel.position = new Vector2(
                this.canvas.width / 2,
                this.canvas.height / 2
            );

            let gemView = new GemView(gemModel);
            let gemController = new GemController({
                view: gemView,
                model: gemModel,
            });

            this.gameObjects.push(gemController);
        }
    }

    _update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update(this.canvas);
        }
    }

    _draw() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const gameObject of this.gameObjects) {
            gameObject.draw(this.canvas);
        }
    }

    _loop() {
        this._update();
        this._draw();

        // request the next frame
        if (this._isRunning) {
            window.requestAnimationFrame(
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

                this._loop.bind(this)
            );
        }
    }

    stop() {
        this._isRunning = false;
    }

    run() {
        this._isRunning = true;
        window.requestAnimationFrame(
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

            this._loop.bind(this)
        );
    }

    _onMouseDown() {
        for (const gameObject of this.gameObjects) {
            /*
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

                https://constantinerudenko.github.io/For%20students%20%28JS%29/JS%20tricks/#optional-chaining
            */
            gameObject?.onMouseDown();
        }
    }

    _onMouseUp() {}
}
