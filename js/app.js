let moveCounter = 0;
let activePlayer = 0;





//_______________________________________________________BEGIN check for classes


function selectElementAndCheckClass(element, className) {
  let arrOfClasses = $(element).attr('class').split(" ");
  //let weaponPlace = document.getElementById('wp');
  for (var i = 0; i < arrOfClasses.length; i++) {

    if (arrOfClasses[i] === className) {

      //alert('Weapon detected via class checker function')
     // $(drawWthree).removeClass("w-3")
      //$(weaponPlace).addClass("w-3")

      /*
          if ($pOneNext.hasClass('w-1')) {
        $(drawWone).removeClass("w-1")
        $(weaponPlace).addClass("w-1")
        }
    */
    } 
  }
  
}




//______________________________________________________END check for classes















//_______________________________________________________BEGIN Create grid

var grid = document.getElementById("grid-box");


for (var i = 1; i <= 100; i++) {
    var square = document.createElement("div");
    square.className = 'square';
    square.id = 'square' + i;
    grid.appendChild(square);
}

//______________________________________________________END Create grid




//______________________________________________________BEGIN right movement

$('#right-button').on('click', function() {

    moveCounter += 1;

    let weaponPlace1 = document.getElementById('wp1-' + activePlayer);
    let weaponPlace2 = document.getElementById('wp2-' + activePlayer);
    let weaponPlace3 = document.getElementById('wp3-' + activePlayer);
    let weaponPlace4 = document.getElementById('wp4-' + activePlayer);
    /*let weaponPlace = $('#wp-0');
    selectElementAndCheckClass(".p-0", "w-1")
    selectElementAndCheckClass(".p-0", "w-2")
    selectElementAndCheckClass(".p-0", "w-3")
    selectElementAndCheckClass(".p-0", "w-4")

    selectElementAndCheckClass(".p-1", "w-1")
    selectElementAndCheckClass(".p-1", "w-2")
    selectElementAndCheckClass(".p-1", "w-3")
    selectElementAndCheckClass(".p-1", "w-4")
*/


    console.log(moveCounter);

    $pOne = $('.p-' + activePlayer)
    $pOneNext = $pOne.next();

   if ($pOneNext.hasClass('w-1')) {
        //alert('WEAPON !!!')
        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")
    } else if ($pOneNext.hasClass('w-2')) {
        //alert('WEAPON !!!')
        $(drawWtwo).removeClass("w-2")
        $(weaponPlace2).addClass("w-2")
    } else if ($pOneNext.hasClass('w-3')) {
        //alert('WEAPON !!!')
        $(drawWthree).removeClass("w-3")
        $(weaponPlace3).addClass("w-3")
    } else if ($pOneNext.hasClass('w-4')) {
        //alert('WEAPON !!!')
        $(drawWfour).removeClass("w-4")
        $(weaponPlace4).addClass("w-4")
    }




    if ($pOneNext.hasClass("p-1")) {
        alert('FIRE !!!')
    } else if ($pOneNext.hasClass("ob")) {
        return false;
    } else {
        $pOne.removeClass('p-' + activePlayer);
        $pOneNext.addClass('p-' + activePlayer);
    }

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

    let weaponPlace1 = document.getElementById('wp1-' + activePlayer);
    let weaponPlace2 = document.getElementById('wp2-' + activePlayer);
    let weaponPlace3 = document.getElementById('wp3-' + activePlayer);
    let weaponPlace4 = document.getElementById('wp4-' + activePlayer);

    $pOne = $('.p-' + activePlayer)
    $pOnePrev = $pOne.prev();



if ($pOnePrev.hasClass('w-1')) {
        //alert('WEAPON !!!')
        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")

    } else if ($pOnePrev.hasClass('w-2')) {
        //alert('WEAPON !!!')
        $(drawWtwo).removeClass("w-2")
        $(weaponPlace2).addClass("w-2")

    } else if ($pOnePrev.hasClass('w-3')) {
        //alert('WEAPON !!!')
        $(drawWthree).removeClass("w-3")
        $(weaponPlace3).addClass("w-3")

    } else if ($pOnePrev.hasClass('w-4')) {
        //alert('WEAPON !!!')
        $(drawWfour).removeClass("w-4")
        $(weaponPlace4).addClass("w-4")
    }





    if ($pOnePrev.hasClass("ob")) {
        return false;
    } else {
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
        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")
    } else if ($('#' + idUpMove).hasClass('w-2')) {     
        $(drawWtwo).removeClass("w-2")
        $(weaponPlace1).addClass("w-2")
    }else if ($('#' + idUpMove).hasClass('w-3')) {      
        $(drawWthree).removeClass("w-3")
        $(weaponPlace1).addClass("w-3")
    }else if ($('#' + idUpMove).hasClass('w-4')) {
        $(drawWfour).removeClass("w-4")
        $(weaponPlace1).addClass("w-4")
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
        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")
    } else if ($('#' + idDownMove).hasClass('w-2')){
        $(drawWtwo).removeClass("w-2")
        $(weaponPlace2).addClass("w-2")
    }else if ($('#' + idDownMove).hasClass('w-3')){
        $(drawWthree).removeClass("w-3")
        $(weaponPlace3).addClass("w-3")
    }else if ($('#' + idDownMove).hasClass('w-4')){
        $(drawWfour).removeClass("w-4")
        $(weaponPlace4).addClass("w-4")
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