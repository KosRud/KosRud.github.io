class CharacterController extends Controller {
    receiveDamage(amount) {
        this.model.health -= amount;

        if (this.model.health < 0) {
            this.model.health = 0;
        }

        console.log(
            `${this.model.name} received ${amount} damage`
        );

        console.log(
            `    his new health is: ${this.model.health}`
        );
    }

    attack(characterController) {
        throw "calling abstract method!";
    }

    getIsDead() {
        return this.model.health == 0;
    }
}