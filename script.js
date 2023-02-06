import { Canvas } from "./Canvas";
import { Line } from "./Line";
import { Square } from "./Square";
import { Position } from "./Position";
import { Check } from "./Check";
import { Animation } from "./Animation";

let myCanvas = new Canvas("canvas");
let pos = new Position();
/*pos.setX(10);
pos.setY(10);
//pos.setX(5);
pos._x = "a";
pos._y = "b";


*/

//let square = new Square(pos, 50, 'red');
//square.draw(myCanvas.context);

//let line = new Line(pos, 10, ['red', 'blue', 'green'], 20);
//line.draw(myCanvas.context);

let check = new Check(pos, 10, ['red', 'blue', 'green', 'black'], 20);
check.draw(myCanvas.context);


let canvasId = 'canvas';
let animation = new Animation(canvasId);

animation.animate();
console.log(canvas.width)
