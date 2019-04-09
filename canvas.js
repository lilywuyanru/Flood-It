window.onload = function(){
  // if (localStorage.resumeGrid !== "undefined"){
  //   grid = resumeGrid;
  //   for(var x = 0; x < 10; x++){
  //     for(var y = 0; y < 10; y++){
  //       ctx.fillStyle = grid[x][y].colour;
  //       ctx.fillRect(x*30, y*30, grid[x][y].width, grid[x][y].height);
  //     }
  //   }
  // }

  if (localStorage.history !== "undefined"){
    document.getElementById("history").innerHTML = "High Score: " + localStorage.history;
  }
  else{
    highscore = undefined;
    document.getElementById("history").innerHTML = "";
    drawRect();
  }

}

// localStorage.setItem("high_score", "");
// let history = document.getElementById("history").innerHTML;
// history = localStorage.getItem("high_score");

// if(click_number < history){
//   localStorage.setItem("high_score", click_number);
// }
// history = localStorage.getItem("high_score");


class Rectangle{
  constructor(height, width) {
    this.height = height;
    this.width = width;
    let colourArray = ["red", "yellow", "green", "blue", "purple"];
    this.colour = colourArray[Math.floor(Math.random()*5)];
    this.flooded = false;
  }
};

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let grid = new Array(10);
for (i=0; i <10; i++){
  grid[i]=new Array(10);
}

function drawRect(){
 
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){
      rect = new Rectangle(30,30);
      grid[x][y] = rect;
      ctx.fillStyle = grid[x][y].colour;
      ctx.fillRect(x*30, y*30, grid[x][y].width, grid[x][y].height);
    }
  }
  grid[0][0].flooded = true;
  return grid;
}

