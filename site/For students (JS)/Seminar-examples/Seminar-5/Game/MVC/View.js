export default class View {
    constructor(model) {
        this.model = model;
    }

    draw(canvas) {
        throw "calling abstract method!";
    }
}