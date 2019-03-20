  /*var grid = document.getElementById("grid-box");

  for (var i = 0; i <= 1; i++) {
    var square = document.createElement("div");
    square.className = 'square';
    square.id = 'square' + i;
    grid.appendChild(square);
  }
*/

  var draw = [];

  while (draw.length < 10) { // Stop only if 10 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (draw.indexOf(randomIndex) === -1) {
    draw.push(randomIndex);

    var drawObstacle = document.getElementById('square' + randomIndex);
    $(drawObstacle).addClass("ob")
    //obstacles.appendChild(square + randomIndex);
  }
}

  while (draw.length < 11) {
    var randomIndex = parseInt(99 * Math.random());


    if (draw.indexOf(randomIndex) === -1) {
      draw.push(randomIndex);


      var drawWtwo = document.getElementById('square' + randomIndex);
      $(drawWtwo).addClass("w2")

    }
  };

  while (draw.length < 12) {
    var randomIndex = parseInt(99 * Math.random());


    if (draw.indexOf(randomIndex) === -1) {
      draw.push(randomIndex);


      var draw3 = document.getElementById('square' + randomIndex);
      $(draw3).addClass("w3")