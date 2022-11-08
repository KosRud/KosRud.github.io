export default class Vector2 {
    /**
     * Either provide both arguments, or none. If no arguments are provided, initializes with {x: 0, y: 0}.
     * @param {Number=} x
     * @param {Number=} y
     */
    constructor(x, y) {
        switch (true) {
            case x != undefined && y != undefined:
                this.x = x;
                this.y = y;
                break;
            case x == undefined && y == undefined:
                this.x = 0;
                this.y = 0;
                break;
            default:
                throw 'invalid Vector2 initialization';
        }
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    multiplyScalar(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    add(vector2) {
        return new Vector2(this.x + vector2.x, this.y + vector2.y);
    }

    subtract(vector2) {
        return new Vector2(this.x - vector2.x, this.y - vector2.y);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
