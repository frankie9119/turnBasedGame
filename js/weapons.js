//$wp = $('.wp-0')
$wep = $('.wep-' + activePlayer);
$wp = $('.wp-' + activePlayer);

function checkW1() {

        alert('WEAPON 1'); //SWAP CLASSES

        $('.w-1').addClass('wp-0');
        $('.w-1').removeClass('.w-1');
        $('.wep-0').addClass('w-1');
        $('.wep-0').removeClass('wp-0');
}






function selectElementAndCheckClass(element, className) {
          let arrOfClasses = $(element).attr('class').split(" ");

          for (var i = 0; i < arrOfClasses.length; i++) {

            if (arrOfClasses[i] === className) {

              alert('WEAPON 1'); //SWAP CLASSES

        $('.w-1').addClass('wp-0');
        $('.w-1').removeClass('.w-1');
        $('.wep-0').addClass('w-1');
        $('wep-0').removeClass('wp-0');


            } else {
              //alert("Help")
            }
          }
          //alert(arrOfClasses)
        }

        /*________

        if p-0 has class w-1

              $('.ob2').addClass('def');
              $('.ob2').removeClass('ob2');
              $('.ex_box').addClass('ob2');
              $('.ex_box').removeClass('def');

        $('.w-1').addClass('wp-0');
        $('.w-1').removeClass('.w-1');
        $('.wp-0').addClass('w-1');
        $('wp-0').removeClass('wp-0');




*/






$('#right-button').on('click', function() {

    moveCounter += 1;
/*
    let weaponPlace1 = document.getElementById('wp1-' + activePlayer);
    let weaponPlace2 = document.getElementById('wp2-' + activePlayer);
    let weaponPlace3 = document.getElementById('wp3-' + activePlayer);
    let weaponPlace4 = document.getElementById('wp4-' + activePlayer);
*/
    //let w1 = 10;

    console.log(moveCounter);
    let weaponPrint = $('#score-' + activePlayer)

    $pOne = $('.p-' + activePlayer)
    $pOneNext = $pOne.next();
    

/*

   if ($pOneNext.hasClass('w-1')) {
        //alert('WEAPON !!!')
        //selectElementAndCheckClass(".wep-0", "wp-0", "w-1", "w-2")
        checkW1();
        alert("This Weapon = 15 points destroy power");
        score = w1
        weaponPrint.html(score)
        //weaponPrint.text(parseInt(weaponPrint.text()) = w1)
        //document.getElementById('score-0').textContent = '10';
        //score = score + 5;
        //alert(score);
        
        $(drawWone).removeClass("w-1")
        $(weaponPlace1).addClass("w-1")



        // score + w-1 points 
       // weaponPrint = w1
       


    } else if ($pOneNext.hasClass('w-2')) {
        //alert('WEAPON !!!')
        checkW2()
        alert("This Weapon = 20 points destroy power");
        score = w2
        weaponPrint.html(score)
        //weaponPrint.text(parseInt(weaponPrint.text()) + w2)

        $(drawWtwo).removeClass("w-2")
        $(weaponPlace2).addClass("w-2")
    } else if ($pOneNext.hasClass('w-3')) {
        //alert('WEAPON !!!')
        checkW3();
        alert("This Weapon = 30 points destroy power");
        score = w3
        weaponPrint.html(score)

        $(drawWthree).removeClass("w-3")
        $(weaponPlace3).addClass("w-3")
    } else if ($pOneNext.hasClass('w-4')) {
        //alert('WEAPON !!!')
        checkW4();
        alert("This Weapon = 40 points destroy power");
        score = w4
        weaponPrint.html(score)

        $(drawWfour).removeClass("w-4")
        $(weaponPlace4).addClass("w-4")
    }


*/





    if ($pOneNext.hasClass("p-1")) {

        fight();
        //window.open ('battle.html','_self',false)
        
        
        //$(".att-def").removeClass("hidden");

    } else if ($pOneNext.hasClass("p-0")) {
       fight();
    }else if ($pOneNext.hasClass("ob")) {
        return false;
    } else {
        $pOne.removeClass('p-' + activePlayer);
        $pOneNext.addClass('p-' + activePlayer);
    }

//alert(playerOne.currentWeapon)
    let currentWeapon = getWeapon("#square" + moveCounter);
    playerWeapon.currentWeapon = currentWeapon;
    
    $('#player-one-weapon').text(playerWeapon.currentWeapon)

    if (moveCounter >=3) {
        moveCounter = 0;
        console.log('more then 3 move')
        $("#b-button").trigger("click");
    }



});






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











