export default class SpeedVector {
    constructor({
        direction,
        magnitude
    }) {
        this.direction = direction;
        this.magnitude = magnitude;
    }

    getVector() {
        return this.direction.multiplyScalar(this.magnitude);
    }
}