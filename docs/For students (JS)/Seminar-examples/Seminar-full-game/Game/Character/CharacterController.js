import Controller from "../MVC/Controller.js";

export default class CharacterController extends Controller {
    constructor({
        view,
        model,
        game
    }) {
        super({
            view: view,
            model: model
        });

        this.game = game;
    }

    isColliding(characterController) {
        if (
            this.model.position.subtract(
                characterController.model.position
            ).length() < this.model.size + characterController.model.size
        ) {
            return true;
        }

        return false;
    }

    tryAttack(characterController) {
        if (
            this.isColliding(characterController) &&
            this.model.attackCooldown.isAvailable()
        ) {
            this.attack(characterController);
            return true;
        } else {
            return false;
        }
    }

    receiveDamage(amount) {
        let newHealth = this.model.health - amount;

        this.model.health = Math.max(
            newHealth,
            0
        );

        this.game.log(
            `${this.model.name} received ${amount} damage`
        );

        this.game.log(
            `his new health is: ${this.model.health}`,
            "indent"
        );
    }

    attack(characterController) {
        throw "calling abstract method!";
    }

    update(game) {
        throw "calling abstract method!";
    }
}