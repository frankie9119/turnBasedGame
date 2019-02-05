
/*function getXYPosition(square) {
    return {
        x: (square) % 10
        ,
        y: Math.floor((square) / 10)
    }
}

function getSquareValue(xPos, yPos) {
    return yPos * 10 + xPos;
}

function movePlayer() {
    //mouseover the square to see if you want to go there
    let boxClass = $('.box');
    boxClass.hover(
        function () {
            hover = true;
            let sqHovered = $(this).attr('boxID');
            newPos = getXYPosition(sqHovered);

            for (let i = Math.min(oldPos.x, newPos.x); i <= Math.max(oldPos.x, newPos.x); i++) {
                let num = getSquareValue(i, oldPos.y);
                let square = $('.box[boxID = ' + num + ']');
                if (square.hasClass('obstacle')) {
                    return;
                }
                if (player1Active) {
                    if (square.hasClass('player2')) {
                        return;
                    }
                } else {
                    if (square.hasClass('player1')) {
                        return;
                    }
                }
            }
            for (let i = Math.min(oldPos.y, newPos.y); i <= Math.max(oldPos.y, newPos.y); i++) {
                let num = getSquareValue(oldPos.x, i);
                let square = $('.box[boxID = ' + num + ']');
                if (square.hasClass('obstacle')) {
                    return;
                }
                if (player1Active) {
                    if (square.hasClass('player2')) {
                        return;
                    }
                } else {
                    if (square.hasClass('player1')) {
                        return;
                    }
                }
            }
            if (!attacked) {
                if (newPos.y === oldPos.y && newPos.x <= oldPos.x + maxMoves && newPos.x >= oldPos.x - maxMoves
                    || newPos.x === oldPos.x && newPos.y <= oldPos.y + maxMoves && newPos.y >= oldPos.y - maxMoves) {

                    if (player1Active) {
                        $(this).css('backgroundImage', 'url(' + player1Avatar.active + ')');

                    } else {
                        $(this).css('backgroundImage', 'url(' + player2Avatar.active + ')');
                    }
                }

            }
        }, function () {
            hover = false;
            $(this).css('backgroundImage', '');
        }
    );*/



/*
for(var i = 1; i <=100; i += 1){
    
    $('#game').append(`<div id=${i} class='grid-box'>${i}</div>`)

}

$('.grid-box').on('click',function(){
      console.log( $(this).attr('id') )
});

 $(function () {
     $('#game').draggable({
         cursor: 'move',
         containment: 'grid-box'
     });
    
 });


for(var i = 1;i<=100;i++){
    $(".grid-box").append(
            "<div id=\"draggable\"" + i
            + " class=\"dropbox ui-widget-content\"></div>"
        );
}
$(".dropbox").droppable();

$( ".dropbox" ).draggable({ snap: ".dropbox", grid: [40,40] });





  for(var i = 1;i<=100;i++){
    $(".grid-box").append(
            "<div id=\"draggable\"" + i
            + " class=\"dropbox \"></div>"
        );
}
$(".dropbox").droppable();*/
/*
var grid = document.getElementById("grid-box");

for (var i = 1; i <= 100; i++) {
  var square = document.createElement("div");
  square.className = 'square';
  square.id = 'square' + i;
  grid.appendChild(square);
}



var rando = function(){
    var obstacles = [];
    var playerOne = [];

    var randomIndex = parseInt(99 + Math.random());

while (obstacles.length < 10) {
    if (obstacles.indexOf(randomIndex) === -1){
        obstacles.push(randomIndex);

        var drawObstacle = document.getElementById('square' + randomIndex).style.backgroundColor = 'yellow';
    }
}

while (playerOne.length < 1){
    if (playerOne.indexOf(randomIndex) === -1){
        playerOne.push(randomIndex);

        var drawPlayerOne = document.getElementById('square' + randomIndex).style.backgroundColor = 'red';
    }
}

};*/
//var obstaclesImg = "http://icons.iconarchive.com/icons/fasticon/freestyle/128/tree-icon.png";






//$("#square9").draggable({axis: "x,y"});






/*
    var drawObstacle = function() {
        var ob = document.getElementById('square' + randomIndex);
        var obs = ob.document.createElement("div");
        obs.className= 'obstacles';
        obs.id= 'obstacles';
        grid.appendChild(square);
    }
    return drawObstacle;
    //drawObstacle.style.backgroundColor = 'yellow';
   // $('square' + randomIndex).css("background", "url("+obstaclesImg+")");
    //document.getElementById('square' + randomIndex).style.backgroundColor = 'yellow';

  }
}*/





/*
var playerTwo = []; // Stores the squares index placed

while (playerTwo.length < 1) { // Stop only if 2 squares are added
  var randomIndex = parseInt(99 * Math.random()); // Generate a random number between 0 and 99

  // Only add the square if it doesn't exist already
  if (playerTwo.indexOf(randomIndex) === -1) {
    playerTwo.push(randomIndex);
    document.getElementById('square' + randomIndex).style.borderColor = 'blue';
  }
}
*/

//$( "#player-one" ).draggable({ snap: ".dropbox", grid: [40,40] });


//$("#player-one").draggable({ snap: ".dropbox", grid: [40,40] });


/* DRAW THE GRID 

// Box width
var bw = 608;
// Box height
var bh = 608;
// Padding
var p = 0;
// define box
var box = 50;


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoard(){
for (var x = 0; x <= bw; x += box) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
}


for (var x = 0; x <= bh; x += box) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
    
}

context.strokeStyle = "black";
context.stroke();
}

drawBoard();
*/
