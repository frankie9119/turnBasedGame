


  var draw = [];

// DRAW OBSTACLES ____________________

while (draw.length < 10) { // Stop only if 10 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (draw.indexOf(randomIndex) === -1) {
    draw.push(randomIndex);

    var drawObstacle = document.getElementById('square' + randomIndex);
    $(drawObstacle).addClass("ob")

  }
};

// DRAW PLAYER 0 _____________________________

while (draw.length < 11) {

  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (draw.indexOf(randomIndex) === -1) {
    draw.push(randomIndex);
   
    var drawPone = document.getElementById('square' + randomIndex);
    $(drawPone).addClass("p-0")
  }
};

//DRAW PLAYER 1 __________________________

while (draw.length < 12) {

  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (draw.indexOf(randomIndex) === -1) {
    draw.push(randomIndex);
   
    var drawPtwo = document.getElementById('square' + randomIndex);
    $(drawPtwo).addClass("p-1")
  }
};



// DRAW WEAPON 1 ________________________

  while (draw.length < 13) {
    var randomIndex = parseInt(99 * Math.random());


    if (draw.indexOf(randomIndex) === -1) {
      draw.push(randomIndex);


    var drawWone = document.getElementById('square' + randomIndex);
    $(drawWone).addClass("w-1")

    }
  };

// DRAW WEAPON 2 _________________________

  while (draw.length < 14) {
    var randomIndex = parseInt(99 * Math.random());


    if (draw.indexOf(randomIndex) === -1) {
      draw.push(randomIndex);


      var drawWtwo = document.getElementById('square' + randomIndex);
      $(drawWtwo).addClass("w-2")

    }
  };

// DRAW WEAPON 3 ________________________

  while (draw.length < 15) {
    var randomIndex = parseInt(99 * Math.random());


    if (draw.indexOf(randomIndex) === -1) {
      draw.push(randomIndex);


    var drawWthree = document.getElementById('square' + randomIndex);
    $(drawWthree).addClass("w-3")
    }
  };

// DRAW WEAPON 4 ____________________________

  while (draw.length < 16) {
    var randomIndex = parseInt(99 * Math.random());


    if (draw.indexOf(randomIndex) === -1) {
      draw.push(randomIndex);


    var drawWfour = document.getElementById('square' + randomIndex);
    $(drawWfour).addClass("w-4")
    }
  };

