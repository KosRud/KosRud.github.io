export default class DiceRoller {
    static _dx(n) {
        let rollResult = Math.floor(
            Math.random() * n
        ) + 1;

        return rollResult;
    }

    static d20() {
        return DiceRoller._dx(20);
    }

    static d6() {
        return DiceRoller._dx(6);
    }
}