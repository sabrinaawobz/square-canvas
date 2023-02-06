let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function drawSquare(x, y, size, color) {
    if (x < 0) {
    x += canvas.width;
  }
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

function drawLine(x, y, length, colors, squareSize) {
  for (let i = 0; i < length; i++) {
    drawSquare(x + i * squareSize, y, squareSize, colors[i % colors.length]);
  }
}

//drawLine(11, 11, 44, ['red', 'blue', 'green'], 55)

function drawCheck(x, y, gridSize, colors, squareSize) {
  for (let i = 0; i < gridSize; i++) {
    let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
    drawLine(x, y + squareSize * i, gridSize, currColors, squareSize);
  }
}

//drawCheck(11, 11, 11, ['red', 'blue', 'green'], 11);

let x = 100;
let duration = 2000;
let speed = 20;

function animate() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // drawCheck(x, 11, 15, ['red','white', 'black'], 15);
 drawCheck(x - canvas.width, 11, 15, ['green','white', 'black'], 15);
  x += speed;
 x = x % canvas.width;

  setTimeout(animate, duration / speed );
}  

animate();


export function Animation(check) {
    let x = -10;
    let duration = 2000;
    let speed = 20;
    let numFrames = duration / speed;
  
    check.context.clearRect(0, 0, check.myCanvas.element.width, check.myCanvas.element.height);
  
    check.draw(check.context, x, 11, 15, ['red','white', 'black'], 15);
    x += speed;
    x = x % check.myCanvas.element.width;
  
    setTimeout(() => Animation(check), duration / numFrames);
} 

...

let myCanvas = new Canvas("canvas");
let pos = new Position(5, 5);
let check = new Check(myCanvas, pos, 10, ['red', 'blue', 'green', 'black'], 20);
check.draw(check.context);
Animation(check);
