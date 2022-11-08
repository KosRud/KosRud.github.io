class PlayerController extends CharacterController {
    attack(characterController) {
        let dmg = DiceRoller.d6() + this.model.strength;

        Game.log(
            `${this.model.name} hits ${characterController.model.name} for ${dmg} damage`
        );

        characterController.receiveDamage(dmg);
    }
}