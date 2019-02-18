




let moveCounter = 0;


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
// var player
while (playerOne.length < 1) {
//player
 // Stop only if 2 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (playerOne.indexOf(randomIndex) === -1) {
    playerOne.push(randomIndex);
    //$('#square'+ randomIndex).css("background-image", "url(/img/food.png' no-repeat");
   
    var drawPone = document.getElementById('square' + randomIndex);
    $(drawPone).addClass("p-0")
    //("p-0")


  }
}

// DRAW PLAYER TWO
var playerTwo = []; // Stores the squares index placed

while (playerTwo.length < 1) { // Stop only if 2 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (playerTwo.indexOf(randomIndex) === -1) {
    playerTwo.push(randomIndex);
    //$('#square'+ randomIndex).css("background-image", "url(/img/food.png' no-repeat");
   
    var drawPtwo = document.getElementById('square' + randomIndex);
    $(drawPtwo).addClass("p-1")
    //("p-1")
  }
};


// !! DEFINE MOVEMENT !!
/*
$('#done').on('click', function(){ 
  var playing = $('p-' + activePlayer)

  if (playing === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

})*/
var activePlayer = 0;

//document.querySelector('.done').addEventListneder('click', function(){


//})
  let items = $(".ob").attr("class").split(' ');
  for (var i = 0; i<items.length; i++) {
  if (items[i] === '.p-0') {
   alert('COLLISION')
  }
}
  if ($( ".p-0" ).hasClass( "ob" )){
    alert('collision !!!') 
  }

// RIGHT MOVEMENT
$('#button_right').on('click', function(){

  moveCounter += 1;

  if (moveCounter >3 ){
    moveCounter = 0;
    console.log('more then 3 move')
    $( "#done" ).trigger( "click" );
  }
  console.log(moveCounter);

  $pOne = $('.p-' + activePlayer)
  $pOneNext = $pOne.next();
 
  if ($pOneNext.hasClass("p-1")){
    alert('FIRE !!!')
  }else if ($pOneNext.hasClass("ob")){
  alert('collision !!!!!!!!')
} else {
   $pOne.removeClass('p-' + activePlayer);
  $pOneNext.addClass('p-' + activePlayer);
}
});



// ___________ LEFT MOVEMENT //
$('#button_left').on('click', function(){
   moveCounter += 1;

  if (moveCounter >3 ){
    moveCounter = 0;
    console.log('more then 3 move')
    $( "#done" ).trigger( "click" );
  }

  $pOne = $('.p-' + activePlayer)
  $pOnePrev = $pOne.prev();

  if ($pOnePrev.hasClass("ob")){
    alert('collision !!!!!!!!!')
  } else{
  $pOne.removeClass('p-' + activePlayer);
  $pOnePrev.addClass('p-' + activePlayer);
  }
});


// ________ UP MOVEMENT //
$('#button_up').on('click', function(){
   moveCounter += 1;

  if (moveCounter >3 ){
    moveCounter = 0;
    console.log('more then 3 move')
    $( "#done" ).trigger( "click" );
  }

  $pOne = $('.p-' + activePlayer)
  var id = $pOne.attr('id') // in which square is pActive

  var idNumber = +id.slice(6);
  var idMove = idNumber - 10
  var idUpMove = 'square' + idMove;

  console.log('going up test')

  $pOne.removeClass('p-' + activePlayer);
  $('#' + idUpMove).addClass('p-' + activePlayer);

  //$pOneUp = $pOne.pre();
  // write code to move up (-10)

  //$pOne.removeClass('pOne');
  //$pOnePrev.addClass('pOne');
});

// DOWN MOVEMENT
$('#button_down').on('click', function(){
   moveCounter += 1;
  console.log(moveCounter);

  if (moveCounter >3 ){
    moveCounter = 0;
    console.log('more then 3 move')
    $( "#done" ).trigger( "click" );
  }
  $pOne = $('.p-' + activePlayer)
  var id = $pOne.attr('id')
  var idNumber = +id.slice(6);
  var idMove = idNumber + 10

  var idDownMove = 'square' + idMove;
  $pOne.removeClass('p-' + activePlayer);
  //$('#' + idUpMove).removeClass('pOne');
  $('#' + idDownMove).addClass('p-' + activePlayer);
});


$('#done').on('click', function(){
  activePlayer === 0 ? activePlayer =1 : activePlayer = 0;

  document.querySelector('.player-0').classList.toggle('active');
  document.querySelector('.player-1').classList.toggle('active');
})


















