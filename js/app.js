
var grid = document.getElementById("grid-box");

// CREATE GRID
for (var i = 1; i <= 100; i++) {
  var square = document.createElement("div");
  square.className = 'square';
  square.id = 'square' + i;
  grid.appendChild(square);
}

// DRAW OBSTACLES 
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

// DRAW PLAYER ONE
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


// !! DEFINE MOVEMENT !!

// RIGHT MOVEMENT
$('#button_right').on('click', function(){
  $pOne = $('.pOne')
  $pOneNext = $pOne.next();
  $pOne.removeClass('pOne');
  $pOneNext.addClass('pOne');
});

// LEFT MOVEMENT
$('#button_left').on('click', function(){
  $pOne = $('.pOne')
  $pOnePrev = $pOne.prev();
  $pOne.removeClass('pOne');
  $pOnePrev.addClass('pOne');
});

// UP MOVEMENT
$('#button_up').on('click', function(){
  console.log('up works');

  $pOne = $('.pOne')
  var id = $pOne.attr('id')
  console.log(id);

  var idNumber = +id.slice(6);
  var idMove = idNumber - 10
  console.log(idMove)

  var idUpMove = 'square' + idMove;
  $pOne.removeClass('pOne');
  //$('#' + idUpMove).removeClass('pOne');
  $('#' + idUpMove).addClass('pOne');

  //$pOneUp = $pOne.pre();
  // write code to move up (-10)

  //$pOne.removeClass('pOne');
  //$pOnePrev.addClass('pOne');
});

// DOWN MOVEMENT










