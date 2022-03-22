class PlayerView extends CharacterView {
    updateHealthBar() {
        /*
            using observer pattern would be more efficient
            (only update HTML element, when health changes)

            PlayerModel would extend Observable
            and PlayerView would subscribe to observe it
        */
        document.getElementById("hp-text").innerHTML = `hp: ${this.model.health}`;
        const fillPercent = Math.floor(
            this.model.health / this.model.baseHealth * 100
        );
        document.getElementById("hp-fill").style.width = `${fillPercent}%`;
    }
}