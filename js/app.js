

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

*/

for(var i = 1;i<=100;i++){
    $(".grid-box").append(
            "<div id=\"draggable\"" + i
            + " class=\"dropbox ui-widget-content\"></div>"
        );
}
$(".dropbox").droppable();

$( ".dropbox" ).draggable({ snap: ".dropbox", grid: [40,40] });











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

