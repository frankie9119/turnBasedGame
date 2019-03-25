let moveCounter, activePlayer, damage, damage1, score, score1, w1, w2, w3, w4;

moveCounter = 0;
activePlayer = 0;
damage = 20;
damage1 = 10;
score = 100;
score1 = 100;
w1 = 15;
w2 = 20;
w3 = 30;
w4 = 40;

let defend_0 = [''];
let defend_1 = [''];


document.getElementById('damage-0').textContent = '20';
document.getElementById('damage-1').textContent = '10';




let newScore0 = $('#scores-0');
let newScore1 = $('#scores-1');


//________________________________________________ATTACK P 1
$('.attack_p1').on('click', function() {

  if (defend_1 > 1) {
    //alert('good...!')
    score1 -= defend_1
    newScore1.html(score1)
    defend_1 = 0
    alert(defend_1)
  } else {
    score1 -= damage
    newScore1.html(score1)
  }


})

// ____________________________________________________DEFEND P1

$('.defend_p1').on('click', function() {

  defend_0 = (damage1 / 2)
  //newScore1.html(score1)
  alert(defend_0)

})


$('.attack_p2').on('click', function() {

  //alert('here new score')

  //score -= damage1
  //newScore0.html(score)
  //alert(score)

  if (defend_0 > 1) {
    //alert('good...!')
    score -= defend_0
    newScore0.html(score)
    defend_0 = 0
    alert(defend_0)
  } else {
    score -= damage1
    newScore0.html(score)
  }

})


$('.defend_p2').on('click', function() {

  defend_1 = (damage0 / 2)
  alert(defend_1)

})
