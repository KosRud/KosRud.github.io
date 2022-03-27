import { InputManager } from './Utility/InputManager.js';

import GameObjectController from './GameObject/GameObjectController.js';
import GemController from './GameObject/Gem/GemController.js';
import GemModel from './GameObject/Gem/GemModel.js';
import GemView from './GameObject/Gem/GemView.js';
import SocketController from './GameObject/Socket/SocketController.js';
import SocketModel from './GameObject/Socket/SocketModel.js';
import SocketView from './GameObject/Socket/SocketView.js';
import Vector2 from './Utility/Vector2.js';

export default class Game {
    constructor({ canvas, socketDiv }) {
        this.canvas = canvas;
        this.socketDiv = socketDiv;
        this._running = true;

        /**
         * @type {GameObjectController[]}
         */
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

        this._createGem();
        this._createSockets(5);
    }

    _createGem() {
        let gemModel = new GemModel('red');

        gemModel.position = new Vector2(
            this.canvas.width / 2,
            this.canvas.height / 2
        );

        let gemView = new GemView(gemModel);
        let gemController = new GemController({
            view: gemView,
            model: gemModel,
            mouseDragDemo: this,
        });

        this.gameObjects.push(gemController);

        /*
            whenever the Gem is placed in a new socket,
            call gemView.updateHTML
        */
        gemModel.eventDispatcher.addEventListener('socketChanged', () => {
            gemView.updateHTML(this.socketDiv);
        });

        // set initial value
        gemView.updateHTML(this.socketDiv);
    }

    _createSockets(numSockets) {
        /*
            7 sockets:

            0 1 2 (3) 4 5 6
        */
        const centralSocketIndex = (numSockets - 1) / 2;
        const SOCKET_GAP = 80;

        for (let i = 0; i < numSockets; i++) {
            const offset = (i - centralSocketIndex) * SOCKET_GAP;

            const position = new Vector2(
                this.canvas.width / 2 + offset,
                this.canvas.height / 2 + 80
            );

            const name = i + 1; // first Socket has name "1"

            let socketModel = new SocketModel(name);
            socketModel.position = position;

            let socketView = new SocketView(socketModel);
            let socketController = new SocketController({
                view: socketView,
                model: socketModel,
            });

            this.gameObjects.push(socketController);
        }
    }

    _update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update();
        }
    }

    _draw() {
        /*
            this.gameObjects contains objects with different draw order

            This function ensures, that for any two objects A and B:
                if (B.drawOrder > A.drawOrder) then
                    B will be rendered on top of A
            
            This way the Gem is always drawn on top of Sockets
        */

        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Set has 1 instance of every unique value
        const drawOrdersSet = new Set(
            // An array, which contains the drawOrder of every gameObject
            this.gameObjects.map((controller) => controller.model.drawOrder)
        );
        /*
            Make and array of sorted draw orders

            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

            https://constantinerudenko.github.io/For%20students%20%28JS%29/JS%20tricks/#spread-syntax
        */
        const drawOrders = [...drawOrdersSet].sort();

        // Iterate over sorted draw orders
        for (const drawOrder of drawOrders) {
            // Array of objects with given draw order
            const gameObjects = this.gameObjects.filter(
                (controller) => controller.model.drawOrder == drawOrder
            );

            // Render objects with given draw order
            for (const gameObject of gameObjects) {
                gameObject.draw(this.canvas);
            }
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

                "Call gameObject.onMouseDown() if it exists, do nothing otherwise"
            */
            gameObject.onMouseDown?.();
        }
    }

    _onMouseUp() {
        for (const gameObject of this.gameObjects) {
            /*
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

                https://constantinerudenko.github.io/For%20students%20%28JS%29/JS%20tricks/#optional-chaining

                "Call gameObject.onMouseUp() if it exists, do nothing otherwise"
            */
            gameObject.onMouseUp?.();
        }
    }
}
