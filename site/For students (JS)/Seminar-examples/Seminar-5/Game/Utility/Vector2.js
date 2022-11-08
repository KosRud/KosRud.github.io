const VECTOR_PRECISION = 1e-5;

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

    static randomDirection() {
        const angle = Math.random() * Math.PI * 2;
        return Vector2.fromAngle(angle);
    }

    static fromAngle(angle) {
        /*
            angle = 0 generates a vector pointing right {x: 1; y: 0}
            increasing angle rotates the vector counter-clockwise
            angle is provided in radians, with 2*Pi corresponding to a full rotation
        */

        return new Vector2(Math.cos(angle), Math.sin(angle));
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

    normalized() {
        const length = this.length();
        if (this.isZero()) {
            throw 'trying to normalize a zero-length vector!';
        }
        return new Vector2(this.x / length, this.y / length);
    }

    multiplyScalar(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    isZero() {
        if (
            Math.abs(this.x) < VECTOR_PRECISION &&
            Math.abs(this.y) < VECTOR_PRECISION
        ) {
            return true;
        }

        return false;
    }
}
