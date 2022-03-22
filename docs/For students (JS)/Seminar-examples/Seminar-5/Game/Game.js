import PlayerController from "./Character/Player/PlayerController.js";
import PlayerView from "./Character/Player/PlayerView.js";
import PlayerModel from "./Character/Player/PlayerModel.js";

import ThiefController from "./Character/Enemy/Thief/ThiefController.js";
import ThiefView from "./Character/Enemy/Thief/ThiefView.js";
import ThiefModel from "./Character/Enemy/Thief/ThiefModel.js";

import SlimeController from "./Character/Enemy/Slime/SlimeController.js";
import SlimeView from "./Character/Enemy/Slime/SlimeView.js";
import SlimeModel from "./Character/Enemy/Slime/SlimeModel.js";

import SkeletonController from "./Character/Enemy/Skeleton/SkeletonController.js";
import SkeletonView from "./Character/Enemy/Skeleton/SkeletonView.js";
import SkeletonModel from "./Character/Enemy/Skeleton/SkeletonModel.js";

import Vector2 from "./Utility/Vector2.js";

export default class Game {
    constructor({
        logDiv,
        canvas,
        gameOver,
        victory
    }) {
        this.enemies = [];
        this.canvas = canvas;
        this.logDiv = logDiv;
        this.gameOver = gameOver
        this.victory = victory;

        this._isRunning = false;

        const canvasCenter = new Vector2(
            this.canvas.width / 2,
            this.canvas.height / 2
        );

        // init player

        {
            /*
                These braces are not necessary,
                but they provide isolation.

                Variables created with "let" will not be accessible
                outside the block, where they were created.

                The less variables you have to think about - the better.
                Easier to understand what your code is doing, and find bugs.

                This is one of the reasons to prefer "let" over "var"!

                We could also create a function "initPlayer()" inside Game
            */

            let playerModel = new PlayerModel({
                name: "Player",
                position: new Vector2(0, 0)
            });

            // let the player start in a corner
            playerModel.position = new Vector2(
                playerModel.size,
                playerModel.size
            ).add(
                new Vector2(
                    20,
                    20
                )
            );

            let playerView = new PlayerView(playerModel);

            this.playerController = new PlayerController({
                model: playerModel,
                view: playerView,
                game: this
            });
        }

        //  Game.log(playerModel); - this would produce an error

        // init enemies

        {
            // add slime

            let slimeModel = new SlimeModel(canvasCenter);
            let slimeView = new SlimeView(slimeModel);
            this.enemies.push(
                new SlimeController({
                    model: slimeModel,
                    view: slimeView,
                    game: this
                })
            );
        }

        {
            // add skeleton

            let skeletonModel = new SkeletonModel(canvasCenter);
            let skeletonView = new SkeletonView(skeletonModel);
            this.enemies.push(
                new SkeletonController({
                    model: skeletonModel,
                    view: skeletonView,
                    game: this
                })
            );
        }

        {
            // add thief

            let thiefModel = new ThiefModel(canvasCenter);
            let thiefView = new ThiefView(thiefModel);
            this.enemies.push(
                new ThiefController({
                    model: thiefModel,
                    view: thiefView,
                    game: this
                })
            );
        }
    }

    log(str, ...classList) {
        /*
            classList is an array,
            which receves any number of arguments

            examples:

                log("log string")
                    classList = []
                
                log("log string", "important")
                    classList = ["important"]
            
                log("log string", "important", "bigFont")
                    classList = ["important", "bigFont"]
            
            Links:
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

                https://constantinerudenko.github.io/For%20students%20%28JS%29/JS%20tricks/#spread-syntax
        */

        let logLine = document.createElement("p");
        logLine.innerHTML = str;
        for (const htmlClass of classList) {
            logLine.classList.add(htmlClass);
        }
        this.logDiv.append(logLine);

        this.logDiv.scrollTo({
            top: this.logDiv.scrollHeight
        });
    }

    _update() {
        this.playerController.update(this);

        for (const enemyController of this.enemies) {
            enemyController.update(this);
        }

        this.enemies = this.enemies.filter(
            (enemyController) => {
                return enemyController.getIsDead() == false
            }
        );
    }

    _draw() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const enemyController of this.enemies) {
            enemyController.draw(this.canvas);
        }

        this.playerController.draw(this.canvas);
    }

    _loop() {
        this._update();
        this._draw();

        if (this.playerController.getIsDead() == true) {
            this._isRunning = false;
            this.gameOver.hidden = false;
        }

        if (this.enemies.length == 0) {
            this._isRunning = false;
            this.victory.hidden = false;
        }

        if (this._isRunning) {
            window.requestAnimationFrame(
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

                this._loop.bind(this)
            );
        }
    }

    stop() {
        this._isRunning = false;
        //this.canvas.onmousemove
    }

    run() {
        this._isRunning = true;
        window.requestAnimationFrame(
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

            this._loop.bind(this)
        );
    }
}