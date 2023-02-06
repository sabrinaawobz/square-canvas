import { Line } from "./Line";
import { Square } from "./Square";
import { Position } from "./Position";

export class Check {
    constructor(pos, gridSize, colors, size) {
        this.pos = pos;
        this.gridSize = gridSize;
        this.colors = colors;
        this.size = size;
    }
    draw(context) {
        for (let i = 0; i < this.gridSize; i++) {
            let currColors = [...this.colors.slice(i%this.colors.length, this.colors.length), ...this.colors.slice(0, i%this.colors.length)]; 
            let squarePos = new Position(this.pos.x, this.pos.y + this.size * i);
            let line = new Line(squarePos, this.gridSize, currColors, this.size);
            line.draw(context);
        }
    }
}