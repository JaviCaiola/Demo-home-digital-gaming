const leftCard = document.querySelector('#left');
const mediumCard = document.querySelector('#medium');
const rightCard = document.querySelector('#rigth');
const card = document.querySelectorAll('.card');


function handleCardHover(enteredCard, addClass, removeClass) {
  mediumCard.classList.add('normal-size');
  mediumCard.classList.remove('medium');
  enteredCard.classList.add('index-card');
  enteredCard.addEventListener('mouseleave', function() {
    mediumCard.classList.add('medium');
    mediumCard.classList.remove('normal-size');
    enteredCard.classList.remove('index-card');
  });
}

leftCard.addEventListener('mouseenter', function() {
  handleCardHover(leftCard, 'index-card', 'normal-size');
});

rightCard.addEventListener('mouseenter', function() {
  handleCardHover(rightCard, 'index-card', 'normal-size');
});
