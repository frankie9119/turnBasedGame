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


//DRAW WEAPON 1
var weaponOne = []; 

while (weaponOne.length < 1) { 
  var randomIndex = parseInt(99 * Math.random()); 

  
  if (weaponOne.indexOf(randomIndex) === -1) {
    weaponOne.push(randomIndex);
    
   
    var drawWone = document.getElementById('square' + randomIndex);
    $(drawWone).addClass("w-1")
  }
};
//DRAW WEAPON 2
var weaponTwo = []; 

while (weaponTwo.length < 1) { 
  var randomIndex = parseInt(99 * Math.random()); 

  
  if (weaponTwo.indexOf(randomIndex) === -1) {
    weaponTwo.push(randomIndex);
    
   
    var drawWtwo = document.getElementById('square' + randomIndex);
    $(drawWtwo).addClass("w-2")
    
  }
};
//DRAW WEAPON 3
var weaponThree = []; 

while (weaponThree.length < 1) { 
  var randomIndex = parseInt(99 * Math.random()); 

  
  if (weaponThree.indexOf(randomIndex) === -1) {
    weaponThree.push(randomIndex);
    
   
    var drawWthree = document.getElementById('square' + randomIndex);
    $(drawWthree).addClass("w-3")
    
  }
};
//DRAW WEAPON 4
var weaponFour = []; 

while (weaponFour.length < 1) { 
  var randomIndex = parseInt(99 * Math.random()); 
 
  if (weaponFour.indexOf(randomIndex) === -1) {
    weaponFour.push(randomIndex);
    
    var drawWfour = document.getElementById('square' + randomIndex);
    $(drawWfour).addClass("w-4")
    
  }
};