let black = '#202020';
let orange = '#FFA500';

function drawSquare(x, y, size, color) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillStyle = (color);
  ctx.fillRect(x, y, size, size); 
}

let colors = [orange, black];
let colors2 = [black, orange];

function drawLine(x, y, length, sizeSquare,colors) {
    for (let i = 0; i < length; i++) {
        let color = colors[i%2];
        drawSquare(x + i * sizeSquare, y, sizeSquare, color);
    }
}

function drawCheck(x, y, width, height, sizeSquare) {
  for (let i = 0; i < height; i++) {
      let colorsToUse = i % 2 == 0 ? [orange, black] : [black, orange];
      drawLine(x, y + i * sizeSquare, width, sizeSquare, colorsToUse);
  }
}

drawCheck(0, 0, 15, 8, 100);