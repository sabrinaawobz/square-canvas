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
    let check = new Check(new Position(this.start, 0), 10, ['red', 'blue', 'green', 'black'], 20);
    check.draw(this.context);
    this.start += this.speed;
    
    if (this.start + check.gridSize * check.size >= this.canvas.width) {
      this.speed = -2;
    } else if (this.start <= 0) {
      this.speed = 2;
    }
    
    setTimeout(() => {
      this.animate();
    }, 16);
  }
}




/*export class Animation {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext("2d");
      this.start = 1;
      this.speed = 1;
    }
    
    animate() {
      setInterval(() => {
        this.clearCanvas();
        this.start += this.speed;
        let pos = new Position(this.start, 5);
        let check = new Check(pos, 10, ['red', 'blue', 'green', 'black'], 20);
        check.draw(this.context);
      }, 50);
    }
    
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
*/
/*
class Animation {
  constructor(canvasId) {
    this.x = 100;
    this.duration = 1000;
    this.speed = 20;
    this.canvas = new Canvas(canvasId);
  }

  animate() {
    let context = this.canvas.context;
    context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);

    let check = new Check(new Position(this.x - this.canvas.element.width, 11), 11, ['green','white', 'black'], 15);
    this.x += this.speed;
    this.x = this.x % this.canvas.element.width;

    setTimeout(() => this.animate(), this.duration);
  }
}
*/





/*
export function Animation() {
    let x = -10;
    let duration = 2000;
    let speed = 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    Check(x, 11, 15, ['red','white', 'black'], 15);
    //drawCheck(x - canvas.width, 11, 15, ['green','white', 'black'], 15);
    x += speed;
    x = x % canvas.width;
  
    setTimeout(Animation, duration / speed );
}  
*/


/*
let x = -10;
let duration = 2000;
let speed = 20;

function animate() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCheck(x, 11, 15, ['green', 'red', 'yellow', 'white', 'black'], 15);
  x += speed;
  

  setTimeout(animate, duration / speed );
}  
*/


//----------------------------- add function animation 
//----------------------------- à mettre ds une class : x = x % canvas.width;

/*  V1

export class Animation {
    constructor(start, duration, speed) {
        this.start = start;
        this.duration = duration;
        this.speed = speed;
    }
    draw(context) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Check(start - canvas.width, 11, 15, ['green','white', 'black'], 15);
        start += speed;
        start = start % canvas.width;
        setTimeout(animate, duration / speed);
    }
}*/