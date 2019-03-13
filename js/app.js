
let moveCounter, activePlayer, score, w1, w2, w3, w4;

moveCounter = 0;
activePlayer = 0;
score = 10;
w1 = 15;
w2 = 20;
w3 = 30;
w4 = 40;


let playerWeapon = {
   currentWeapon:"wp-0"
}
let playerWeapon1 = {
   currentWeapon:"wp-1"
}
//let weaponPrint = $('#score-' + activePlayer)

// add all w points

document.getElementById('score-0').textContent = '10';
document.getElementById('score-1').textContent = '10';

$("#square" + 0).addClass("player")


//_______________________________________________________BEGIN Create grid

var grid = document.getElementById("grid-box");


for (var i = 0; i <= 99; i++) {
    var square = document.createElement("div");
    square.className = 'square';
    square.id = 'square' + i;
    grid.appendChild(square);
}

//______________________________________________________END Create grid

//___________________________________________________BEGIN CHECK ALL CLASSES FIRST LETTER 'W'

function getWeapon(ele) {

  let classList = $(ele).attr("class").split(' ');

  for (let i = 0; i < classList.length; i += 1) {

    //___________________________________________________WT NEW
if($('.p-' + activePlayer).hasClass('p-0')){
    if (classList[i][0] === "w") { // ____________________IF current grid-square has a class that begins with "w"
        
            alert('p0 weapon')
        
      // THEN . . . . .

      $(ele).addClass(playerWeapon.currentWeapon) // SET current weapon as class to current grid-box
      alert(playerWeapon.currentWeapon);
      $(".ww-" + activePlayer).removeClass(playerWeapon.currentWeapon);

      playerWeapon.currentWeapon = classList[i]; // GET the originally set weapon class and SET it to playerOneCurrentWeapon

      $(ele).removeClass(playerWeapon.currentWeapon) // REMOVE old weapon from grid-box

      alert(playerWeapon.currentWeapon);

      $(".ww-" + activePlayer).addClass(playerWeapon.currentWeapon);
      //___________________________________________________WT NEW
      return classList[i]
    }

  }

}
}

//______________________________________________END CHECK ALL CLASSES FIRST LETTER 'W'
//______________________________________________BEGIN WEAPONS POINTS

function pointsWeapon(eles) {
  let weaponPrint = $('#score-' + activePlayer)
  let classCheck = $(eles).attr("class").split(' ');

  for (let i = 0; i < classCheck.length; i += 1) {
    //___________________________________________________WT NEW
    if (classCheck[i] === "w-1") { 
        alert("This Weapon = 15 points destroy power");
        score = w1
        weaponPrint.html(score)

        //$(weaponPlace1).addClass("w-1")
      
      return classCheck[i]
    } else if (classCheck[i] === "w-2"){
        alert("This Weapon = 20 points destroy power");
        score = w2
        weaponPrint.html(score)
        //$(weaponPlace2).addClass("w-2")
        return classCheck[i]

    }else if (classCheck[i] === "w-3"){
        alert("This Weapon = 30 points destroy power");
        score = w3
        weaponPrint.html(score)
        
        return classCheck[i]

    }else if (classCheck[i] === "w-4"){
        alert("This Weapon = 40 points destroy power");
        score = w4
        weaponPrint.html(score)
       
        return classCheck[i]

    }
  }

}
//______________________________________________END WEAPONS POINTS

//______________________________________________________BEGIN right movement

$('#right-button').on('click', function() {

    moveCounter += 1;

    $pOne = $('.p-' + activePlayer)
    $pOneNext = $pOne.next();

    if ($pOneNext.hasClass("ob")) {
        return false;
    } else if ($pOneNext.hasClass('p-1')){
            fight()
    } else if ($pOneNext.hasClass('p-0')){
            fight()
    }else {
        $pOne.removeClass('p-' + activePlayer);
        $pOneNext.addClass('p-' + activePlayer);
    }

        pointsWeapon(".p-" + activePlayer);
        getWeapon(".p-" + activePlayer);

    
    
    //getWeapon(".p-" + activePlayer);

    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#b-button").trigger("click");
    }
    
});


//______________________________________________________END right movement

//______________________________________________________BEGIN left movement

$('#left-button').on('click', function() {
    moveCounter += 1;

    $pOne = $('.p-' + activePlayer)
    $pOnePrev = $pOne.prev();

    if ($pOnePrev.hasClass("ob")) {
        return false;
    } else if ($pOnePrev.hasClass('p-1')){
            fight()
    } else if ($pOnePrev.hasClass('p-0')){
            fight()
    }else {
        $pOne.removeClass('p-' + activePlayer);
        $pOnePrev.addClass('p-' + activePlayer);
    }

    pointsWeapon(".p-" + activePlayer);
    getWeapon(".p-" + activePlayer);

    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#b-button").trigger("click");
    }

});

//______________________________________________________END left movement


//______________________________________________________BEGIN up movement

$('#up-button').on('click', function() {
    moveCounter += 1;

    $pOne = $('.p-' + activePlayer)
    var id = $pOne.attr('id') // in which square is pActive

    var idNumber = +id.slice(6);
    var idMove = idNumber - 10
    if(idMove < 0){
        idMove +=10;
    }
    var idUpMove = 'square' + idMove;

    console.log('going up test')

     if($('#' + idUpMove).hasClass('ob')){
      return false;
    }

    if ($('#' + idUpMove).hasClass('p-1')) {
        fight()
    }else if ($('#' + idUpMove).hasClass('p-0')) {
        fight()
    }

    $pOne.removeClass('p-' + activePlayer);
    $('#' + idUpMove).addClass('p-' + activePlayer);

    pointsWeapon(".p-" + activePlayer);
    getWeapon(".p-" + activePlayer);

    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#b-button").trigger("click");
    }


});

//______________________________________________________END up movement


//______________________________________________________BEGIN down movement

$('#down-button').on('click', function() {
    moveCounter += 1;

    $pOne = $('.p-' + activePlayer)
    var id = $pOne.attr('id');
    console.log(id)

    var idNumber = +id.slice(6);
    var idMove = idNumber + 10;
    var idDownMove = 'square' + idMove;

     if($('#' + idDownMove).hasClass('ob')){
      return false;
    }

    if ($('#' + idDownMove).hasClass('p-0')){
            fight()
    }else if ($('#' + idDownMove).hasClass('p-1')){
            fight()
    }

     if(idMove <= 100){
    $pOne.removeClass('p-' + activePlayer);
    }
      
    
    //$('#' + idUpMove).removeClass('pOne');
      

 //_______________________________________________________________________BEGIN Get all classes
      let classList = $('#' + idDownMove).attr("class").split(' ');
      console.log(classList)
  //______________________________________________________________________END get all classes
     

    $('#' + idDownMove).addClass('p-' + activePlayer);

    pointsWeapon(".p-" + activePlayer);
    getWeapon(".p-" + activePlayer);

    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#b-button").trigger("click");
    }


});

//______________________________________________________END down movement

//____________________________________________________________________________BEGIN done button


$('#b-button').on('click', function() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    moveCounter = 0;                                                      // set move to 0
    
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
})

//__________________________________________________________________________END done button



function fight (){

        $('#d-pad').addClass("hiddenDpad");
        $('#b-box').addClass("hiddenDpad");
        $("#grid-box").removeClass("grid-box");
        $(".hidden").css({"display": "inline-block"});
        alert('LET S FIGHT')
    }





$('.attack_p1').on('click', function() {

        alert('here new score')
        document.getElementById('scores-0').textContent = score + 50;

})






