class Controller {
    constructor({
        view,
        model
    }) {
        this.view = view;
        this.model = model;
    }

    draw(canvas) {
        this.view.draw(canvas);
    }
}