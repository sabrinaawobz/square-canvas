import { Square } from "./Square";

export class DrawLine {
    constructor(x, y, length, colors, size) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.colors = colors;
        this.size = size;
    }
    drawLine(context) {
        for (let i = 0; i < this.length; i++) {
            let square = new Square(this.x + i * this.size, this.y, this.size, this.colors[i % this.colors.length]);
            square.draw(context);
        }
    }
}