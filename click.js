let greenBttn = document.getElementById("green");
let blueBttn = document.getElementById("blue");
let purpleBttn = document.getElementById("purple");
let yellowBttn = document.getElementById("yellow");
let redBttn = document.getElementById("red");
let restartBttn = document.getElementById("restart");
let clearBttn = document.getElementById("clear");

greenBttn.addEventListener("click", paintGreen);
yellowBttn.addEventListener("click", paintYellow);
blueBttn.addEventListener("click", paintBlue);
purpleBttn.addEventListener("click", paintPurple);
redBttn.addEventListener("click", paintRed);
restartBttn.addEventListener("click", restart)
clearBttn.addEventListener("click", clearHighScore);

function restart(){
  drawRect();
  click_number = -1;
  highscore = highscore;
  score();
  resumeGrid = undefined;
  document.getElementById("result").innerHTML = "";
}

function clearHighScore(){
  highscore = undefined;
  localStorage.setItem("history", highscore);
  document.getElementById("history").innerHTML = "";
}

function paintGreen(){
  new_grid = flood();
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      if(new_grid[x][y].flooded == true){
        new_grid[x][y].colour = "green";
        ctx.fillStyle = "green";
        ctx.fillRect(x*30, y*30, new_grid[x][y].width, new_grid[x][y].height);
      }
    }
  }
  score();
}

function paintYellow(){
  new_grid = flood();
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      if(new_grid[x][y].flooded == true){
        new_grid[x][y].colour = "yellow";
        ctx.fillStyle = "yellow";
        ctx.fillRect(x*30, y*30, new_grid[x][y].width, new_grid[x][y].height);
      }
    }
  }
  score();
}

function paintPurple(){
  new_grid = flood();
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      if(new_grid[x][y].flooded == true){
        new_grid[x][y].colour = "purple";
        ctx.fillStyle = "purple";
        ctx.fillRect(x*30, y*30, new_grid[x][y].width, new_grid[x][y].height);
      }
    }
  }
  score();
}

function paintBlue(){
  new_grid = flood();
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      if(new_grid[x][y].flooded == true){
        new_grid[x][y].colour = "blue";
        ctx.fillStyle = "blue";
        ctx.fillRect(x*30, y*30, new_grid[x][y].width, new_grid[x][y].height);
      }
    }
  }
  score();
}

function paintRed(){
  new_grid = flood();
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      if(new_grid[x][y].flooded == true){
        new_grid[x][y].colour = "red";
        ctx.fillStyle = "red";
        ctx.fillRect(x*30, y*30, new_grid[x][y].width, new_grid[x][y].height);
      }
    }
  }
  score();
}
