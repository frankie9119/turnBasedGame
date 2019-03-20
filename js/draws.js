
$('#up-button').on('click', function() {


  $pOne = $('.p-' + activePlayer)
  var id = $pOne.attr('id') // in which square is pActive

  var idNumber = +id.slice(6);
  var idMove = idNumber - 10
  if (idMove < 0) {
    return false;
  }
  var idUpMove = 'square' + idMove;

  console.log('going up test')

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
    console.log('more then 3 move')
    $("#b-button").trigger("click");
  }


});














