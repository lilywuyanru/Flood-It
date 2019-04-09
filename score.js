let click_number = 0;
let highscore;
let resumeGrid;

function score(){
  click_number = click_number + 1;
  print_score = document.getElementById("score");
  print_score.innerHTML = click_number + "/25";

  let win = false;
  let win_colour = grid[0][0].colour

  for (var x=0; x < 10; x++) {
    for (var y=0; y < 10; y++) {
        if (grid[x][y].flooded == false) {
            win = false;
            break;
        }
        else win = true;
    }
  }

  if(win == true && click_number <= 25){
    document.getElementById("result").innerHTML = "YOU WON";
    
    if(highscore == undefined || click_number < highscore){
      highscore = click_number;
      localStorage.setItem("history", highscore);
      document.getElementById("history").innerHTML = "High Score: " + localStorage.history;
    }
    else {
      highscore == highscore;
    }
    console.log(highscore);
  }
  else if(win == false && click_number > 25){
    document.getElementById("result").innerHTML = "YOU LOST";
  }
}



//when you refresh the page
//keep track of high score
//keep track of player progress in game

// clear button clear high score
// restart button researt the game