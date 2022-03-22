class Game {
    constructor(logDiv) {
        this.enemies = [];

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

            let playerModel = new PlayerModel("Player");
            let playerView = new PlayerView(playerModel);

            this.playerController = new PlayerController({
                model: playerModel,
                view: playerView
            });
        }

        //  Game.log(playerModel); - this would produce an error

        // init enemies

        {
            // add slime

            let slimeModel = new SlimeModel();
            let slimeView = new SlimeView(slimeModel);
            this.enemies.push(
                new SlimeController({
                    model: slimeModel,
                    view: slimeView
                })
            );
        }

        {
            // add skeleton

            let skeletonModel = new SkeletonModel();
            let skeletonView = new SkeletonView(skeletonModel);
            this.enemies.push(
                new SkeletonController({
                    model: skeletonModel,
                    view: skeletonView
                })
            );
        }

        {
            // add thief

            let thiefModel = new ThiefModel();
            let thiefView = new ThiefView(thiefModel);
            this.enemies.push(
                new ThiefController({
                    model: thiefModel,
                    view: thiefView
                })
            );
        }
    }

    static log(str, ...classList) {
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
        */

        let logLine = document.createElement("p");
        logLine.innerHTML = str;
        for (const htmlClass of classList) {
            logLine.classList.add(htmlClass);
        }
        document.getElementById("game-log").appendChild(logLine);
    }

    run() {
        for (
            let round = 1;
            (
                this.playerController.getIsDead() == false &&
                this.enemies.length != 0
            ); round++
        ) {
            Game.log(`round: ${round}`, "important")

            // player turn

            this.playerController.attack(this.enemies[0]);

            // remove dead enemies

            this.enemies = this.enemies.filter(
                /*
                    Array.filter(func) returns a new copy of the array,
                        where we can choose which items to keep, 
                        and which ones to delete
                    
                    func is a function,
                        which takes 1 item from the array as an argument
                        and returns true, if we want to keep it
                        or false, if we want to delete it
                */

                (enemyController) => {
                    // keep enemies, if they are alive

                    if (enemyController.getIsDead() == true) {
                        Game.log(
                            `${enemyController.model.name} died!`
                        );

                        return false;
                    } else {
                        return true;
                    }
                }
            );

            // enemy turn

            for (const enemy of this.enemies) {
                enemy.attack(this.playerController);

                if (this.playerController.getIsDead() == true) {
                    Game.log("player died!");
                    break; // stop the for loop
                }
            }
        }

        if (this.playerController.getIsDead() == true) {
            Game.log("player lost!", "important");
        } else {
            Game.log("player won!", "important");
        }
    }
}

game = new Game();
game.run();