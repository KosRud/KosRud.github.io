import CharacterController from "../CharacterController.js"
import DiceRoller from "../../Utility/DiceRoller.js";
import Vector2 from "../../Utility/Vector2.js";
import {
    Key
} from "../../Utility/InputManager.js";

export default class PlayerController extends CharacterController {
    attack(characterController) {
        this.model.attackCooldown.use();

        let dmg = DiceRoller.d6() + this.model.strength;

        this.game.log(
            `${this.model.name} hits ${characterController.model.name} for ${dmg} damage`
        );

        characterController.receiveDamage(dmg);
    }

    move(game) {
        let moveDirection = new Vector2(0, 0);

        if (this.game.inputManager.IsKeyDown(Key.W)) {
            moveDirection = moveDirection.add(
                new Vector2(0, 1)
            );
        }

        if (this.game.inputManager.IsKeyDown(Key.S)) {
            moveDirection = moveDirection.add(
                new Vector2(0, -1)
            );
        }

        if (this.game.inputManager.IsKeyDown(Key.A)) {
            moveDirection = moveDirection.add(
                new Vector2(-1, 0)
            );
        }

        if (this.game.inputManager.IsKeyDown(Key.D)) {
            moveDirection = moveDirection.add(
                new Vector2(1, 0)
            );
        }

        if (moveDirection.isZero()) {
            return;
        }

        moveDirection = moveDirection.normalized();

        const newPosition = this.model.position.add(
            moveDirection.multiplyScalar(this.model.speed)
        );

        switch (true) {
            /*
                https: //p3adaptive.com/2015/03/the-diabolical-genius-of-switch-true/
            */

            case newPosition.x - this.model.size < 0:
                return;
            case newPosition.x + this.model.size > game.canvas.width:
                return;
            case newPosition.y - this.model.size < 0:
                return;
            case newPosition.y + this.model.size > game.canvas.height:
                return;
            default:
                this.model.position = newPosition;
                return;
        }
    }

    handleAttackInput() {
        if (this.game.inputManager.IsKeyDown(Key.K)) {
            // attack button pressed

            for (const enemyController of this.game.enemies) {
                //cooldown check is performed inside tryAttack()

                if (this.tryAttack(enemyController)) {
                    // stop trying after we successfully attack once
                    break;
                }
            }
        }
    }

    regenTick() {
        if (
            this.model.regenCooldown.isAvailable()
        ) {
            let newHealth = this.model.health + this.model.regenAmount;
            this.model.health = Math.min(
                newHealth,
                this.model.baseHealth
            );


            this.model.regenCooldown.use();
        }
    }

    update(game) {
        this.move(game);
        this.handleAttackInput();
        this.regenTick();
    }
}