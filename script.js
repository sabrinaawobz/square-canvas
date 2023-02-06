import { Canvas } from "./Canvas";
import { Line } from "./Line";
import { Square } from "./Square";
import { Position } from "./Position";
import { Check } from "./Check";
import { Animation } from "./Animation";

let myCanvas = new Canvas("canvas");
let pos = new Position();
let check = new Check(pos, 10, ['red', 'blue', 'green', 'black'], 20);
check.draw(myCanvas.context);
let canvasId = 'canvas';
let animation = new Animation(canvasId);
animation.animate();