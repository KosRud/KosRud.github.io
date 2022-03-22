class EnemyController extends CharacterController {
    attack(characterController) {
        this.model.attackCooldown.use();

        if (
            DiceRoller.d20() + this.model.strength >
            10 + characterController.model.armor
        ) {
            this.game.log(
                `${this.model.name} hits ${characterController.model.name} ` +
                `for ${this.model.strength} damage`
            );

            characterController.receiveDamage(this.model.strength);
        } else {
            this.game.log(
                `${this.model.name} tries to ` +
                `attack ${characterController.model.name}, but misses`
            );
        }
    }

    move() {
        const newPosition = this.model.position.add(
            this.model.speedVector.getVector()
        );

        switch (true) {
            case newPosition.x - this.model.size < 0:
                this.model.speedVector.direction = Vector2.fromAngle(
                    (Math.random() - 0.5) * Math.PI
                );
                break;
            case newPosition.x + this.model.size > this.game.canvas.width:
                this.model.speedVector.direction = Vector2.fromAngle(
                    (Math.random() + 0.5) * Math.PI
                );
                break;
            case newPosition.y - this.model.size < 0:
                this.model.speedVector.direction = Vector2.fromAngle(
                    Math.random() * Math.PI
                );
                break;
            case newPosition.y + this.model.size > this.game.canvas.height:
                this.model.speedVector.direction = Vector2.fromAngle(
                    (Math.random() + 1.0) * Math.PI
                );
                break;
            default:
                this.model.position = newPosition;
                break;
        }
    }

    update() {
        this.move();
        this.tryAttack(this.game.playerController);
    }
}