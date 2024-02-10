var diceElement = document.getElementById('dice');


diceElement.addEventListener('click', function() {
    
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    
    var imgElement = diceElement.querySelector('img');

    
    imgElement.src = './img/' + randomNumber + '.png';
});