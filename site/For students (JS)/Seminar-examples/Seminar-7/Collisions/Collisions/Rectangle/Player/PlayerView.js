import RectangleView from '../RectangleView.js';

export default class PlayerView extends RectangleView {
    draw(canvas) {
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.save();
        {
            /*
                this { } block simply emphasizes save-restore
                it is here only to improve readability
            */

            const outlineThickness = 2;

            const cornerPos = this.model.position.subtract(
                this.model.size.multiplyScalar(0.5)
            );

            // outline
            ctx.fillStyle = 'black';
            ctx.fillRect(
                cornerPos.x,
                // flip Y coordinate
                canvas.height - cornerPos.y - this.model.size.y,
                this.model.size.x,
                this.model.size.y
            );

            // inside color
            ctx.fillStyle = this.model.getColor();
            ctx.fillRect(
                cornerPos.x + outlineThickness,
                // flip Y coordinate
                canvas.height -
                    cornerPos.y -
                    this.model.size.y +
                    outlineThickness,
                this.model.size.x - outlineThickness * 2,
                this.model.size.y - outlineThickness * 2
            );
        }
        ctx.restore();
    }
}
