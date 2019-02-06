
var grid = document.getElementById("grid-box");


for (var i = 1; i <= 100; i++) {
  var square = document.createElement("div");
  square.className = 'square';
  square.id = 'square' + i;
  grid.appendChild(square);
}

var obstacles = []; // Stores the squares index placed

while (obstacles.length < 10) { // Stop only if 10 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (obstacles.indexOf(randomIndex) === -1) {
    obstacles.push(randomIndex);

    var drawObstacle = document.getElementById('square' + randomIndex);
    $(drawObstacle).addClass("ob")
    
    //obstacles.appendChild(square + randomIndex);

  }
}


var playerOne = []; // Stores the squares index placed

while (playerOne.length < 1) { // Stop only if 2 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (playerOne.indexOf(randomIndex) === -1) {
    playerOne.push(randomIndex);
    //$('#square'+ randomIndex).css("background-image", "url(/img/food.png' no-repeat");
   
    var drawPone = document.getElementById('square' + randomIndex);
    $(drawPone).addClass("pOne")


  }
}



$('#button_right').on('click', function(){
  $pOne = $('.pOne')
  $pOneNext = $pOne.next();
  $pOne.removeClass('pOne');
  $pOneNext.addClass('pOne');
});


$('#button_left').on('click', function(){
  $pOne = $('.pOne')
  $pOnePrev = $pOne.prev();
  $pOne.removeClass('pOne');
  $pOnePrev.addClass('pOne');
});
