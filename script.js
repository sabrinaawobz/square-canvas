function drawLine() {

    var ctx = document.getElementById('canvas').getContext('2d');

    for (var i = 0; i < 50; i++) {    
      ctx.fillStyle = 'red' 
      ctx.fillRect(i * 50, 0, 25, 25);
      ctx.fillStyle = 'black';   
      ctx.fillRect(i * 50 + 25, 0, 25, 25);
    }

    for (var i = 0; i < 50; i++) { 
      ctx.fillStyle = 'black' 
      ctx.fillRect(i * 50, 25, 25, 25);
      ctx.fillStyle = 'red';   
      ctx.fillRect(i * 50 + 25, 25, 25, 25); 
    }
}

drawLine();
  
function drawLineDeux() {
  
    var ctx = document.getElementById('canvas').getContext('2d');

    for (var i = 0; i < 50; i++) {    
      ctx.fillStyle = 'red';
      ctx.fillRect(i * 50 + 0, 50, 25, 25);
      ctx.fillStyle = 'black';   
      ctx.fillRect(i * 50 + 25, 50, 25, 25);
    }

    for (var i = 0; i < 50; i++) { 
       ctx.fillStyle = 'black';
      ctx.fillRect(i * 50, 75, 25, 25);
      ctx.fillStyle = 'red';   
      ctx.fillRect(i * 50 + 25, 75, 25, 25);
    }
}

drawLineDeux();





