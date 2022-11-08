class EnemyController extends CharacterController {
    attack(characterController) {
        if (
            DiceRoller.d20() + this.model.strength >
            10 + characterController.model.armor
        ) {
            Game.log(
                `${this.model.name} hits ${characterController.model.name} ` +
                `for ${this.model.strength} damage`
            );

            characterController.receiveDamage(this.model.strength);
        } else {
            Game.log(
                `${this.model.name} tries to ` +
                `attack ${characterController.model.name}, but misses`
            );
        }
    }
}