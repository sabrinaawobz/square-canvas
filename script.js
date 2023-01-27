import { DrawLine } from "./DrawLine";
import { Canvas } from "./Canvas";
import { Square } from "./Square";
import { Position } from "./Position";

let myCanvas = new Canvas("canvas");
let pos = new Position(100, 200);
let square = new Square(pos, 50, 'red');
square.draw(myCanvas.context);
