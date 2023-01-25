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

function drawCheck(x, y, gridSize, colors, squareSize) {
  for (let i = 0; i < gridSize; i++) {
    let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
    drawLine(x, y + squareSize * i, gridSize, currColors, squareSize);
  }
}

let x = -10;
let duration = 2000;
let speed = 20;

function animate() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCheck(x, 11, 15, ['green', 'red', 'yellow', 'white', 'black'], 15);
  drawCheck(x - canvas.width, 11, 15, ['green', 'red', 'yellow', 'white', 'black'], 15);
  x += speed;
  x = x % canvas.width;

  setTimeout(animate, duration / speed );

}

animate();

document.addEventListener('click',function(e) {
  function stopAnimation() {
    isAnimating = false;
  }
});
