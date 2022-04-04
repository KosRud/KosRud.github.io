import { InputManager } from './Utility/InputManager.js';

import RectangleView from './Rectangle/RectangleView.js';
import RectangleModel from './Rectangle/RectangleModel.js';
import RectangleController from './Rectangle/RectangleController.js';

import PlayerModel from './Rectangle/Player/PlayerModel.js';
import PlayerView from './Rectangle/Player/PlayerView.js';
import PlayerController from './Rectangle/Player/PlayerController.js';

import Vector2 from './Utility/Vector2.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this._running = true;

        /**
         * @type {RectangleController[]}
         */
        this.rectangles = [];
        this._addRectangle(110, 80, 100, 70);
        this._addRectangle(500, 90, 80, 30);
        this._addRectangle(300, 250, 120, 120);

        this._addPlayer();

        this._connectInputmanager(canvas);
    }

    _addRectangle(x, y, width, height) {
        const rectangleModel = new RectangleModel(new Vector2(width, height));
        rectangleModel.position = new Vector2(x, y);

        const rectangleView = new RectangleView(rectangleModel);
        const rectangleController = new RectangleController({
            view: rectangleView,
            model: rectangleModel,
        });

        this.rectangles.push(rectangleController);
    }

    _addPlayer() {
        const playerModel = new PlayerModel(new Vector2(60, 60));
        const playerView = new PlayerView(playerModel);
        const playerController = new PlayerController({
            model: playerModel,
            view: playerView,
            game: this,
        });
        this.rectangles.push(playerController);
    }

    _connectInputmanager(canvas) {
        /*
            We could use "this.canvas"
            instead of passing it as an argument,
            but "_connectInputmanager()" is called
            inside "constructor()".
            
            I's better to avoid relying on "this",
            in case "this.canvas" is assigned AFTER calling _connectInputmanager()
        */
        this.inputManager = InputManager;
        this.inputManager.mouseTrackingTarget = canvas;
    }
    _update() {
        for (const rectangle of this.rectangles) {
            rectangle.update();
        }
    }

    _draw() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const rectangle of this.rectangles) {
            rectangle.draw(this.canvas);
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
}
