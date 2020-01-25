let moveCounter, activePlayer, damage, damage1, score, score1, w1, w2, w3, w4, newScore0, newScore1, defend_0, defend_1, playerWeapon, playerWeapon1;

moveCounter = 0;
activePlayer = 0;
damage = 10;
damage1 = 10;
score = 100;
score1 = 100;
w1 = 15;
w2 = 20;
w3 = 30;
w4 = 40;
newScore0 = $('#scores-0');
newScore1 = $('#scores-1');
defend_0 = [''];
defend_1 = [''];

playerWeapon = {
  currentWeapon: "wp-0"
}

playerWeapon1 = {
  currentWeapon: "wp-1"
}


$(document).ready(function() {  

var id = '#dialog';

  
//Get the screen height and width
var maskHeight = $(document).height();
var maskWidth = $(window).width();
  
//Set heigth and width to mask to fill up the whole screen
$('#mask').css({'width':maskWidth,'height':maskHeight});

//transition effect
$('#mask').fadeIn(500); 
$('#mask').fadeTo("slow",0.9);  
  
//Get the window height and width
var winH = $(window).height();
var winW = $(window).width();
              
//Set the popup window to center
$(id).css('top',  winH/2-$(id).height()/2);
$(id).css('left', winW/2-$(id).width()/2);
  
//transition effect
$(id).fadeIn(2000);   
  
//if close button is clicked
$('.window .close').click(function (e) {
//Cancel the link behavior
e.preventDefault();

$('#mask').hide();
$('.window').hide();
});

//if mask is clicked
$('#mask').click(function () {
$(this).hide();
$('.window').hide();
});
  
});



document.getElementById('damage-0').textContent = '10';
document.getElementById('damage-1').textContent = '10';

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

    if (activePlayer === 0) {

      if (classList[i][0] === "w") { // ____________________IF current grid-square has a class that begins with "w"

        //console.log(activePlayer)


        $(ele).addClass(playerWeapon.currentWeapon) // SET current weapon as class to current grid-box

        $(".ww-" + activePlayer).removeClass(playerWeapon.currentWeapon);

        playerWeapon.currentWeapon = classList[i]; // GET the originally set weapon class and SET it to playerOneCurrentWeapon

        $(ele).removeClass(playerWeapon.currentWeapon) // REMOVE old weapon from grid-box


        $(".ww-" + activePlayer).addClass(playerWeapon.currentWeapon);

        return classList[i]


      }
    } else if (activePlayer === 1) {
      if (classList[i][0] === "w") { // ____________________IF current grid-square has a class that begins with "w"

        //console.log(activePlayer)

        $(ele).addClass(playerWeapon1.currentWeapon) // SET current weapon as class to current grid-box

        $(".ww-" + activePlayer).removeClass(playerWeapon1.currentWeapon);

        playerWeapon1.currentWeapon = classList[i]; // GET the originally set weapon class and SET it to playerOneCurrentWeapon

        $(ele).removeClass(playerWeapon1.currentWeapon) // REMOVE old weapon from grid-box

        $(".ww-" + activePlayer).addClass(playerWeapon1.currentWeapon);

        return classList[i]

      }

    }

  }
}


//______________________________________________END CHECK ALL CLASSES FIRST LETTER 'W'

//______________________________________________BEGIN WEAPONS POINTS

function pointsWeapon(eles) {
  let weaponPrint = $('#damage-' + activePlayer)
  let classCheck = $(eles).attr("class").split(' ');

  for (let i = 0; i < classCheck.length; i += 1) {
    //___________________________________________________WT NEW
    if (classCheck[i] === "w-1") {

      alert("This Weapon = 15 points destroy power");
      if (activePlayer === 0) {
              damage = w1
      weaponPrint.html(damage)
    }else{
      damage1 = w1
      weaponPrint.html(damage1)
    }
      return classCheck[i]
    } else if (classCheck[i] === "w-2") {

      alert("This Weapon = 20 points destroy power");
      if (activePlayer === 0) {
          damage = w2
         weaponPrint.html(damage)
    }else{
          damage1 = w2
         weaponPrint.html(damage1)

    }

      //$(weaponPlace2).addClass("w-2")
      return classCheck[i]

    } else if (classCheck[i] === "w-3") {
      alert("This Weapon = 30 points destroy power");

      if (activePlayer === 0) {
        damage = w3
        weaponPrint.html(damage)        
      }else{
      damage1 = w3
      weaponPrint.html(damage1)
    }

      return classCheck[i]

    } else if (classCheck[i] === "w-4") {
      alert("This Weapon = 40 points destroy power");

      if (activePlayer === 0) {
      damage = w4
      weaponPrint.html(damage)        
    }else{
      damage1 = w4
      weaponPrint.html(damage1)
    }
      return classCheck[i]

    }
  }

}
//______________________________________________END WEAPONS POINTS

//______________________________________________________BEGIN right movement

$('#right-button').on('click', function() {

  $pOne = $('.p-' + activePlayer)

  let id = $pOne.attr('id')
  let x = +id.slice(6)
    //console.log(x)

    if (x > 98){
      return false;
    }




  $pOneNext = $pOne.next();
  $x = $pOneNext.next();

  if ($pOneNext.hasClass("ob")) {
    return false;
  } else if ($pOneNext.hasClass('p-1')) {
    fight()
  } else if ($pOneNext.hasClass('p-0')) {
    fight()
  } else {
    $pOne.removeClass('p-' + activePlayer);
    moveCounter += 1;
    $pOneNext.addClass('p-' + activePlayer);
  }

  pointsWeapon(".p-" + activePlayer);
  getWeapon(".p-" + activePlayer);

  document.getElementById('moves').textContent = moveCounter;



  if (moveCounter >= 3) {
    moveCounter = 0;
    //console.log('more then 3 moves')
    $("#b-button").trigger("click");
  }

});


//______________________________________________________END right movement

//______________________________________________________BEGIN left movement

$('#left-button').on('click', function() {


  $pOne = $('.p-' + activePlayer)

  let id = $pOne.attr('id')
  let x = +id.slice(6)
    //console.log(x)

    if (x < 1){
      return false;
    }

  $pOnePrev = $pOne.prev();

  if ($pOnePrev.hasClass("ob")) {
    return false;
  } else if ($pOnePrev.hasClass('p-1')) {
    fight()
  } else if ($pOnePrev.hasClass('p-0')) {
    fight()
  } else {
    $pOne.removeClass('p-' + activePlayer);
    moveCounter += 1;
    $pOnePrev.addClass('p-' + activePlayer);
  }

  pointsWeapon(".p-" + activePlayer);
  getWeapon(".p-" + activePlayer);
  document.getElementById('moves').textContent = moveCounter;

  if (moveCounter >= 3) {
    moveCounter = 0;
    //console.log('more then 3 moves')
    $("#b-button").trigger("click");
  }

});

//______________________________________________________END left movement


//______________________________________________________BEGIN up movement

$('#up-button').on('click', function() {


  $pOne = $('.p-' + activePlayer)
  var id = $pOne.attr('id') // in which square is pActive

  var idNumber = +id.slice(6);
  var idMove = idNumber - 10
  //console.log(idNumber)
  if (idMove < 0) {
    return false;
  }
  var idUpMove = 'square' + idMove;

  //console.log('going up test')

  if ($('#' + idUpMove).hasClass('ob')) {
    return false;
  }

  if ($('#' + idUpMove).hasClass('p-1')) {
    fight()
  } else if ($('#' + idUpMove).hasClass('p-0')) {
    fight()
  }

  $pOne.removeClass('p-' + activePlayer);
  moveCounter += 1;
  $('#' + idUpMove).addClass('p-' + activePlayer);

  pointsWeapon(".p-" + activePlayer);
  getWeapon(".p-" + activePlayer);
  document.getElementById('moves').textContent = moveCounter;

  if (moveCounter >= 3) {
    moveCounter = 0;
    //console.log('more then 3 moves')
    $("#b-button").trigger("click");
  }


});

//______________________________________________________END up movement


//______________________________________________________BEGIN down movement

$('#down-button').on('click', function() {


  $pOne = $('.p-' + activePlayer)
  var id = $pOne.attr('id');

  var idNumber = +id.slice(6);
  var idMove = idNumber + 10;
  if (idMove > 99) {
    return false;
  }
  var idDownMove = 'square' + idMove;

  if ($('#' + idDownMove).hasClass('ob')) {

    return false;
  }

  if ($('#' + idDownMove).hasClass('p-0')) {
    fight()
  } else if ($('#' + idDownMove).hasClass('p-1')) {
    fight()
  }

  $pOne.removeClass('p-' + activePlayer);

  moveCounter += 1;


  //_______________________________________________________________________BEGIN Get all classes

  //______________________________________________________________________END get all classes


  $('#' + idDownMove).addClass('p-' + activePlayer);

  pointsWeapon(".p-" + activePlayer);
  getWeapon(".p-" + activePlayer);
  document.getElementById('moves').textContent = moveCounter;

  if (moveCounter >= 3) {
    moveCounter = 0;
    //console.log('more then 3 moves')
    $("#b-button").trigger("click");
  }


});

//______________________________________________________END down movement

//____________________________________________________________________________BEGIN done button


$('#b-button').on('click', function() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  moveCounter = 0; // set move to 0

  document.querySelector('.name-1').classList.toggle('active');
  document.querySelector('.name-2').classList.toggle('active');


})


//__________________________________________________________________________END done button

//_________________________________________________________________________BEGUIN fight

function fight() {

  $('#d-pad').addClass("hiddenDpad");
  $('#b-box').addClass("hiddenDpad");
  $("#grid-box").removeClass("grid-box");
  $(".hidden").css({
    "display": "inline-block"
  });
  alert('LET S FIGHT')

  if (activePlayer === 1){
    $('.fight_p0').hide();
    $('.winner_p0').hide()
    $('.winner_p1').hide()
  }

  if (activePlayer === 0){
    $('.fight_p1').hide()
    $('.winner_p1').hide()
    $('.winner_p0').hide()
  }
}



//________________________________________________ATTACK P 1
$('.attack_p1').on('click', function() {

  if (defend_1 > 1) {
    
    score1 -= defend_1
    newScore1.html(score1)
    defend_1 = 0
    
  } else {
    score1 -= damage
    newScore1.html(score1)
  }
  $('.fight_p0').hide()
  $('.fight_p1').show()

  winner();

})

// ____________________________________________________DEFEND P1

$('.defend_p1').on('click', function(){

  defend_0 = (damage1 / 2)

  $('.fight_p0').hide()
  $('.fight_p1').show()

})

// ________________________________________________ATTACK P 2

$('.attack_p2').on('click', function() {

  if (defend_0 > 1) {
    //alert('good...!')
    score -= defend_0
    newScore0.html(score)
    defend_0 = 0
    //alert(defend_0)
  } else {
    score -= damage1
    newScore0.html(score)
  }
  
  $('.fight_p1').hide()
  $('.fight_p0').show()


  winner();



})

// __________________________________________DEFEND P2

$('.defend_p2').on('click', function(){

  defend_1 = (damage / 2)

  $('.fight_p1').hide()
  $('.fight_p0').show()


})

// if defend next time other player attack damage/2 

function winner(){
  if (score <= 0){
    //alert('Player 2 is the Winner!')
          $('.winner_p1').show();
      $('.fight_p1').hide();
      $('.fight_p0').hide();

  }else if(score1 <= 0){
   //alert('Player 1 is the Winner!')
      $('.fight_p1').hide();
      $('.fight_p0').hide();
      $('.winner_p0').show();
  }
}
















