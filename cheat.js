canvas.addEventListener('click', cheat);

function cheat(){
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      grid[x][y].flooded == true;
      ctx.fillStyle = "red";
      ctx.fillRect(x*30, y*30, grid[x][y].width, grid[x][y].height);
    }
  }
  document.getElementById("result").innerHTML = "YOU WON";
}