let moveCounter = 0;
let activePlayer = 0;





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

$('#button_right').on('click', function() {

    moveCounter += 1;


    console.log(moveCounter);

    $pOne = $('.p-' + activePlayer)
    $pOneNext = $pOne.next();

    if ($pOneNext.hasClass("p-1")) {
        alert('FIRE !!!')
    } else if ($pOneNext.hasClass('w-1')) {
        alert('WEAPON !!!')
    } else if ($pOneNext.hasClass("ob")) {
        alert('collision !!')
    } else {
        $pOne.removeClass('p-' + activePlayer);
        $pOneNext.addClass('p-' + activePlayer);
    }

    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#done").trigger("click");
    }
});

//______________________________________________________END right movement



//______________________________________________________BEGIN left movement

$('#button_left').on('click', function() {
    moveCounter += 1;

    $pOne = $('.p-' + activePlayer)
    $pOnePrev = $pOne.prev();

    if ($pOnePrev.hasClass("ob")) {
        alert('collision !!!!!!!!!')
    } else {
        $pOne.removeClass('p-' + activePlayer);
        $pOnePrev.addClass('p-' + activePlayer);
    }


    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#done").trigger("click");
    }

});

//______________________________________________________END left movement



//______________________________________________________BEGIN up movement

$('#button_up').on('click', function() {
    moveCounter += 1;



    $pOne = $('.p-' + activePlayer)
    var id = $pOne.attr('id') // in which square is pActive

    var idNumber = +id.slice(6);
    var idMove = idNumber - 10
    var idUpMove = 'square' + idMove;

    console.log('going up test')

    $pOne.removeClass('p-' + activePlayer);
    $('#' + idUpMove).addClass('p-' + activePlayer);

        if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#done").trigger("click");
    }


});

//______________________________________________________END up movement


//______________________________________________________BEGIN down movement

$('#button_down').on('click', function() {
    moveCounter += 1;
    console.log(moveCounter);


    $pOne = $('.p-' + activePlayer)
    var id = $pOne.attr('id');
    console.log(id)

    var idNumber = +id.slice(6);
    var idMove = idNumber + 10;



    var idDownMove = 'square' + idMove;
    $pOne.removeClass('p-' + activePlayer);
    //$('#' + idUpMove).removeClass('pOne');
       

 //_______________________________________________________________________BEGIN Get all classes
      let classList = $('#' + idDownMove).attr("class").split(' ');
      console.log(classList)
  //______________________________________________________________________END get all classes




    $('#' + idDownMove).addClass('p-' + activePlayer);

        if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#done").trigger("click");
    }


});

//______________________________________________________END down movement






//____________________________________________________________________________BEGIN done button


$('#done').on('click', function() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    moveCounter = 0;                                                      // set move to 0
    
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
})

//__________________________________________________________________________END done button