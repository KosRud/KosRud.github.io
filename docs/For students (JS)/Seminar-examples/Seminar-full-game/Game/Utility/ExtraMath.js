export default class ExtraMath {
    /**
     * inear interplation between a and b
     * @param {Number} a
     * @param {Number} b
     * @param {Number} coef - Coefficient of interpolation
     */
    static lerp(a, b, coef) {
        return (coef * b + (1.0 - coef) * a);
    }
}