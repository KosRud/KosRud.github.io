class Controller {
    constructor({
        view,
        model
    }) {
        this.view = view;
        this.model = model;
    }

    update() {
        throw "calling abstract method!";
    }

    draw(canvas) {
        this.view.draw(canvas);
    }
}