import RectangleController from '../RectangleController.js';

export default class PlayerController extends RectangleController {
    constructor({ model, view, game }) {
        super({
            model: model,
            view: view,
        });
        this.game = game;
    }

    _updatePosition() {
        /*
            Be careful!
            It's easy to introduce a bug in similar situations
            
            Bug example:
                object A:
                    this.model.position = inputManager.mousePosition;
                    this.model.position += 5;
                object B:
                    this.model.position = inputManager.mousePosition;
                    this.model.position += 10;
                
                Result:
                    both objects move by 15

            How to avoid it:
                option 1
                    never assign an object directly, always make a copy:
                        this.model.position = inputManager.mousePosition.clone();
                        this.model.position.x += 5; // safe, you own this copy
                    you need to implement .clone() yourself
                option 2
                    never edit the object directly,
                    always make a copy before editing
                        this.model.position = new Vector2(
                            this.model.position.x + 5,
                            this.model.position.y
                        ); // safe, you just created a new Vector2
                    
        */
        this.model.position = this.game.inputManager.mousePosition.clone();
    }

    _updateColliding() {
        // default state
        this.model.isColliding = false;

        /*
            if at least one collision detected,
            set isColliding flag and stop
        */
        for (const rectangle of this.game.rectangles) {
            if (rectangle == this) {
                continue;
            }

            if (rectangle.getIsColliding(this)) {
                this.model.isColliding = true;
                /*
            found one collision
            no need to keep looping
        */
                break;
            }
        }
    }

    update() {
        this._updatePosition();
        this._updateColliding();
    }
}
