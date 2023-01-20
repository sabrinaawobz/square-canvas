let black = '#202020';
let orange = '#FFA500';

function drawSquare(x, y, size, color) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillStyle = (color);
  ctx.fillRect(x, y, size, size); 
}

let colors = [orange, black];
let colors2 = [black, orange];

function drawLine(x, y, length, sizeSquare) {
  let i = 0;
  while (i < length) {
    drawSquare(x + i * sizeSquare, y, sizeSquare, colors[i%2]);
    i++;
  }
}

function drawCheck(x, y, width, height, sizeSquare) {
  for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
  drawSquare(x + i * sizeSquare, y + j * sizeSquare, sizeSquare, colors2[(i+j) % 2]);
      }
  }
}

drawCheck(0, 0, 6, 4, 100);