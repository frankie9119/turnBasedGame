
let moveCounter, activePlayer, score, w1, w2, w3, w4;

moveCounter = 0;
activePlayer = 0;
score = 10;
w1 = 15;
w2 = 20;
w3 = 30;
w4 = 40;


let playerWeapon = {
   currentWeapon:""
}
// add all w points

document.getElementById('score-0').textContent = '10';
document.getElementById('score-1').textContent = '10';




//_______________________________________________________BEGIN Create grid

var grid = document.getElementById("grid-box");


for (var i = 0; i <= 99; i++) {
    var square = document.createElement("div");
    square.className = 'square';
    square.id = 'square' + i;
    grid.appendChild(square);
}

//______________________________________________________END Create grid

function getWeapon(ele){

  let classList = $(ele).attr("class").split(' ');

  for(let i = 0; i < classList.length; i+=1){

       if(classList[i][0] === "w"){

        alert(classList[i])
        $(ele).addClass(playerWeapon.currentWeapon);
        $(ele).removeClass(classList[i]);
        return classList[i]


        
       //return classList[i]


       /*
        $(ele).addClass(playerOne.currentWeapon);
        $(ele).removeClass(classList[i]);
        return classList[i]
           */
           
       }
  }
    
}


//______________________________________________________BEGIN right movement

//$("#square"  + moveCounter ).addClass("player")

$('#right-button').on('click', function() {
    moveCounter += 1;

    $pOne = $('.p-' + activePlayer)
    $pOneNext = $pOne.next();


    $pOne.removeClass('p-' + activePlayer);
    $pOneNext.addClass('p-' + activePlayer);
       // $("#square" + moveCounter).removeClass("p-" + activePlayer)
      //  $("#square"  + moveCounter ).addClass("p-" + activePlayer)

     
    let currentWeapon = getWeapon(".p-" + activePlayer);
    //moveCounter non the right one
    playerWeapon.currentWeapon = currentWeapon;
    
    $("#player-one-weapon").text( playerWeapon.currentWeapon);
    //$(".wp-0").addClass( playerWeapon.currentWeapon);
});
//______________________________________________________END right movement



//______________________________________________________BEGIN left movement

$('#left-button').on('click', function() {
    moveCounter += 1;

    let weaponPlace1 = document.getElementById('wp1-' + activePlayer);
    let weaponPlace2 = document.getElementById('wp2-' + activePlayer);
    let weaponPlace3 = document.getElementById('wp3-' + activePlayer);
    let weaponPlace4 = document.getElementById('wp4-' + activePlayer);

    let weaponPrint = $('#score-' + activePlayer)

    $pOne = $('.p-' + activePlayer)
    $pOnePrev = $pOne.prev();




if ($pOnePrev.hasClass('w-1')) {
        
        alert("This Weapon = 15 points destroy power");
        score = w1
        weaponPrint.html(score)

        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")

    } else if ($pOnePrev.hasClass('w-2')) {
        
        alert("This Weapon = 20 points destroy power");
        score = w2
        weaponPrint.html(score)

        $(drawWtwo).removeClass("w-2")
        $(weaponPlace2).addClass("w-2")

    } else if ($pOnePrev.hasClass('w-3')) {
        
        alert("This Weapon = 30 points destroy power");
        score = w3
        weaponPrint.html(score)

        $(drawWthree).removeClass("w-3")
        $(weaponPlace3).addClass("w-3")

    } else if ($pOnePrev.hasClass('w-4')) {
        
        alert("This Weapon = 40 points destroy power");
        score = w4
        weaponPrint.html(score)

        $(drawWfour).removeClass("w-4")
        $(weaponPlace4).addClass("w-4")
    }





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

    let weaponPlace1 = document.getElementById('wp1-' + activePlayer);
    let weaponPlace2 = document.getElementById('wp2-' + activePlayer);
    let weaponPlace3 = document.getElementById('wp3-' + activePlayer);
    let weaponPlace4 = document.getElementById('wp4-' + activePlayer);

    let weaponPrint = $('#score-' + activePlayer);

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

    if ($('#' + idUpMove).hasClass('w-1')) {  

        alert("This Weapon = 15 points destroy power");
        score = w1
        weaponPrint.html(score)

        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")
    } else if ($('#' + idUpMove).hasClass('w-2')) {  

        alert("This Weapon = 20 points destroy power");
        score = w2
        weaponPrint.html(score)

        $(drawWtwo).removeClass("w-2")
        $(weaponPlace1).addClass("w-2")
    }else if ($('#' + idUpMove).hasClass('w-3')) { 

        alert("This Weapon = 30 points destroy power");
        score = w3
        weaponPrint.html(score)

        $(drawWthree).removeClass("w-3")
        $(weaponPlace1).addClass("w-3")
    }else if ($('#' + idUpMove).hasClass('w-4')) {

        alert("This Weapon = 40 points destroy power");
        score = w4
        weaponPrint.html(score)

        $(drawWfour).removeClass("w-4")
        $(weaponPlace1).addClass("w-4")
    }else if ($('#' + idUpMove).hasClass('p-1')) {
        fight()
    }else if ($('#' + idUpMove).hasClass('p-0')) {
        fight()
    }

    $pOne.removeClass('p-' + activePlayer);
    $('#' + idUpMove).addClass('p-' + activePlayer);

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

    let weaponPlace1 = document.getElementById('wp1-' + activePlayer);
    let weaponPlace2 = document.getElementById('wp2-' + activePlayer);
    let weaponPlace3 = document.getElementById('wp3-' + activePlayer);
    let weaponPlace4 = document.getElementById('wp4-' + activePlayer);

    let weaponPrint = $('#score-' + activePlayer)

    console.log(moveCounter);


    $pOne = $('.p-' + activePlayer)
    var id = $pOne.attr('id');
    console.log(id)

    var idNumber = +id.slice(6);
    var idMove = idNumber + 10;
    var idDownMove = 'square' + idMove;
     if($('#' + idDownMove).hasClass('ob')){
        console.log(moveCounter)
      return false;
        }

    if($('#' + idDownMove).hasClass('w-1')){

        alert("This Weapon = 15 points destroy power");
        score = w1
        weaponPrint.html(score)

        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")
    } else if ($('#' + idDownMove).hasClass('w-2')){

        alert("This Weapon = 20 points destroy power");
        score = w2
        weaponPrint.html(score)

        $(drawWtwo).removeClass("w-2")
        $(weaponPlace2).addClass("w-2")
    }else if ($('#' + idDownMove).hasClass('w-3')){

        alert("This Weapon = 30 points destroy power");
        score = w3
        weaponPrint.html(score)

        $(drawWthree).removeClass("w-3")
        $(weaponPlace3).addClass("w-3")
    }else if ($('#' + idDownMove).hasClass('w-4')){

        alert("This Weapon = 40 points destroy power");
        score = w4
        weaponPrint.html(score)

        $(drawWfour).removeClass("w-4")
        $(weaponPlace4).addClass("w-4")
    }else if ($('#' + idDownMove).hasClass('p-0')){
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

        $('#d-pad').addClass("hidden");
        $("#grid-box").removeClass("grid-box");
        $(".hidden").css({"display": "inline-block"});
        alert('LET S FIGHT')
    }





