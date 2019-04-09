function flood(){
  for(var x = 0; x < 10; x++){
    for(var y = 0; y < 10; y++){

      if(x < 9 && x > 0){
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x+1][y].colour){
          grid[x+1][y].flooded = true;
        }
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x-1][y].colour){
          grid[x-1][y].flooded = true;
        }
      }

      if (y < 9 && y > 0){
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x][y-1].colour && y < 9){
          grid[x][y-1].flooded = true;
        }
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x][y+1].colour && y < 9){
          grid[x][y+1].flooded = true;
        }
      }

      if(x == 9){
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x-1][y].colour){
          grid[x-1][y].flooded = true;
        }
      }
      else if(x == 0){
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x+1][y].colour){
          grid[x+1][y].flooded = true;
        } 
      }
      if(y == 9){
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x][y-1].colour && y < 9){
          grid[x][y-1].flooded = true;
        }
      }
      else if(y == 0){
        if(grid[x][y].flooded == true && grid[x][y].colour == grid[x][y+1].colour && y < 9){
          grid[x][y+1].flooded = true;
        }      
      }
    }
  }
  return grid;
}

// const flood = (colour) => {
//   let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
//   let current = {x: 0, y: 0};
//   let queue = [current];

//   ctx.fillStyle = colour;
//   while (queue.length !== 0) {
//     current = queue.shift();
//     console.log(queue);
//     visited[current.x][current.y] = true;
//     current.colour = colour;
//     ctx.fillRect(current.x * 30, current.y * 30, 30, 30);

//     queue.concat(getNeighbors(current, visited));
//   }
// };

// const getNeighbors = (current, visited) =>  {
//   let neighbours = [];
//   if (addPoint({x: current.x - 1, y: current.y}, visited)) neighbours.push({x: current.x - 1, y: current.y});
//   if (addPoint({x: current.x + 1, y: current.y}, visited)) neighbours.push({x: current.x + 1, y: current.y});
//   if (addPoint({x: current.x, y: current.y - 1}, visited)) neighbours.push({x: current.x, y: current.y - 1});
//   if (addPoint({x: current.x, y: current.y + 1}, visited)) neighbours.push({x: current.x, y: current.y + 1});
//   return neighbours;
// };

// const addPoint = (point, visited) => {
//   console.log(previousColour);
//   if (point.x < 0 || point.y < 0 || point.x > grid.length || point.y > grid[0].length) return false;
//   if (visited[point.x][point.y]) return false;
//   debugger;
//   if (grid[point.x][point.y].colour != previousColour) return false;
//   console.log(true);
//   return true;
// };
