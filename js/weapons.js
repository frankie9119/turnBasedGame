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