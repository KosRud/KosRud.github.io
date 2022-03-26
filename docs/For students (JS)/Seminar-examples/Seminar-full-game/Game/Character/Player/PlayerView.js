import CharacterView from "../CharacterView.js";
import ExtraMath from "../../Utility/ExtraMath.js";
import Vector2 from "../../Utility/Vector2.js";


export default class PlayerView extends CharacterView {
    constructor({
        model,
        inputManager
    }) {
        super(model);

        this.inputManager = inputManager;

        /*
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
        */
        model.addEventListener(
            "healthChanged",
            this.updateHealthBar.bind(this)
        );
    }

    _drawDashMarker(canvas) {
        const ctx = canvas.getContext('2d');

        let dashMarkerParts = [
            [
                new Vector2(-6, 0),
                new Vector2(6, 0),
                new Vector2(3, 100),
                new Vector2(-3, 100)
            ],
            [
                new Vector2(-3, 103),
                new Vector2(3, 103),
                new Vector2(3, 113),
                new Vector2(0, 120),
                new Vector2(-3, 113)
            ]
        ];

        const fromPlayerToMouse = this.inputManager.getMousePosition()
            .subtract(this.model.position);

        const angle = Vector2.up().fromToAngle(
            fromPlayerToMouse
        );

        ctx.save(); {
            ctx.fillStyle = "rgba(0,0,0,0.5)";

            for (const markerPart of dashMarkerParts) {
                ctx.beginPath();

                const rotatedPoint = markerPart[0].multiplyScalar(
                    ExtraMath.lerp(1, 2, this.model.dashCharge)
                ).rotate(angle).add(this.model.position);

                ctx.moveTo(
                    rotatedPoint.x,
                    canvas.height - rotatedPoint.y
                );

                for (const point of markerPart) {
                    const rotatedPoint = point.multiplyScalar(
                        ExtraMath.lerp(1, 2, this.model.dashCharge)
                    ).rotate(angle).add(this.model.position);
                    ctx.lineTo(
                        rotatedPoint.x,
                        canvas.height - rotatedPoint.y
                    );
                }

                ctx.fill();
            }
        }
        ctx.restore();
    }

    draw(canvas) {

        this._drawDashMarker(canvas);
        super.draw(canvas);
    }

    updateHealthBar() {
        document.getElementById("hp-text").innerHTML = `hp: ${this.model.getHealth()}`;
        const fillPercent = Math.floor(
            this.model.getHealth() / this.model.baseHealth * 100
        );
        document.getElementById("hp-fill").style.width = `${fillPercent}%`;
    }
}