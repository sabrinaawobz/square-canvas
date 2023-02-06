import { Square } from "./Square";
import { Position } from "./Position";

export class Line {
    constructor(pos, length, colors, size) {
        this.pos = pos;
        this.length = length;
        this.colors = colors;
        this.size = size;
    }
    draw(context) {
        for (let i = 0; i < this.length; i++) {
            let squarePos = new Position(this.pos.x + i * this.size, this.pos.y);
            let square = new Square(squarePos, this.size, this.colors[i % this.colors.length]);
            square.draw(context);
        }
    }
}
