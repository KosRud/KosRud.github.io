export default class View {
    constructor(model) {
        this.model = model;
    }

    draw() {
        throw "calling abstract method!";
    }
}