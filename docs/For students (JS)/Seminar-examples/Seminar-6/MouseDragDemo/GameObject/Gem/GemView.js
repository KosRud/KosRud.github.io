import View from '../../MVC/View.js';

export default class GemView extends View {
    draw(canvas) {
        const ctx = canvas.getContext('2d');

        let strokeStyle = 'black';
        switch (true) {
            case this.model.draggingOffset != null:
                strokeStyle = 'yellow';
                break;
            case this.model.isMouseOver:
                strokeStyle = 'blue';
                break;
        }

        ctx.beginPath();
        ctx.save();
        {
            /*
                this { } block simply emphasizes save-restore
                it is here only to improve readability
            */

            ctx.fillStyle = this.model.color;
            ctx.strokeStyle = strokeStyle;
            ctx.arc(
                // circle
                this.model.position.x,
                canvas.height - this.model.position.y, // flip y coordinate
                this.model.size, // radius
                0, // start angle
                2 * Math.PI // end angle
            );
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();
    }
}
