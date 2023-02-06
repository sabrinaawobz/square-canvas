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

/*
export class Check {
    constructor(pos, gridSize, colors, size) {
        this.pos = pos;
        this.gridSize = gridSize;
        this.colors = colors;
        this.size = size;
    }
    draw(context) {
        for (let i = 0; i < this.gridSize; i++) {
            
            let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
            let squarePos = new Position(this.pos.x, this.pos.y + i * this.size);
            let line = new Line(squarePos, length, currColors, size);
            line.draw(context);
        }
    }
}
*/


/*
function Check(x, y, gridSize, colors, squareSize) {
    for (let i = 0; i < gridSize; i++) {
      let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
      Line(x, y + squareSize * i, gridSize, currColors, squareSize);
    }
}*/