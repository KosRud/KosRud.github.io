export default class Cooldown {
    constructor(cooldown) {
        this.cooldown = cooldown;
        this.timeLastUsed = 0;
    }

    use() {
        this.timeLastUsed = new Date().getTime();
    }

    isAvailable() {
        return new Date().getTime() - this.timeLastUsed > this.cooldown;
    }
}