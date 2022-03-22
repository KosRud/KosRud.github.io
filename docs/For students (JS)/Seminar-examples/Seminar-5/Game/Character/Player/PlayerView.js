import CharacterView from "../CharacterView.js";

export default class PlayerView extends CharacterView {
    constructor(model) {
        super(model);

        /*
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
        */
        model.addEventListener(
            "healthChanged",
            this.updateHealthBar.bind(this)
        );
    }

    updateHealthBar() {
        document.getElementById("hp-text").innerHTML = `hp: ${this.model.getHealth()}`;
        const fillPercent = Math.floor(
            this.model.getHealth() / this.model.baseHealth * 100
        );
        document.getElementById("hp-fill").style.width = `${fillPercent}%`;
    }
}