import { Position } from "./Position";
import { Check } from "./Check";

export class Animation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.start = 0;
    this.speed = 2;
  }
  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let check = new Check(new Position(this.start, 40), 10, ['red', 'blue', 'green', 'black'], 20);
    check.draw(this.context);
    this.start += this.speed;
  
    if (this.start + check.gridSize * check.size >= this.canvas.width) {
      this.start = 20;
    } 

    setTimeout(() => {
      this.animate();
    }, 6);
  }
}