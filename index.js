const leftCard = document.querySelector('#left');
const mediumCard = document.querySelector('#medium');
const rigthCard = document.querySelector('#rigth');
const contentLeft = document.querySelector('#content-left');
const contentMedium = document.querySelector('#content-medium');
const contentRigth = document.querySelector('#content-rigth');
const card = document.querySelectorAll('.card');

leftCard.addEventListener('mouseenter', (event) =>{
    mediumCard.classList.add('normal-size');
    mediumCard.classList.add('index-two');
    mediumCard.classList.remove('medium');
    leftCard.classList.add('index-card');

    contentLeft.classList.remove('oculto');
    leftCard.classList.remove('card_not');
    contentMedium.classList.add('oculto');
    mediumCard.classList.add('card_not');

    mediumCard.classList.remove('index-card');
    leftCard.classList.add('index-card');
})

leftCard.addEventListener('mouseleave', (event) =>{
    mediumCard.classList.remove('normal-size');
    mediumCard.classList.remove('index-two');
    mediumCard.classList.add('medium');
    leftCard.classList.remove('index-card');
    
    contentLeft.classList.add('oculto');
    leftCard.classList.add('card_not');
    contentMedium.classList.remove('oculto');
    mediumCard.classList.remove('card_not');

    
    mediumCard.classList.add('index-card');
    leftCard.classList.remove('index-card');
})
rigthCard.addEventListener('mouseenter', (event) =>{
    mediumCard.classList.add('normal-size')
    mediumCard.classList.remove('medium');
    rigthCard.classList.add('index-card');
    rigthCard.classList.remove('card_not');
    contentRigth.classList.remove('oculto')

    contentLeft.classList.remove('oculto');
    leftCard.classList.remove('card_not');
    contentMedium.classList.add('oculto');
    mediumCard.classList.add('card_not');

    mediumCard.classList.remove('index-card');
    rigthCard.classList.add('index-card');

    contentLeft.classList.add('oculto');
    leftCard.classList.add('card_not')
})

rigthCard.addEventListener('mouseleave', (event) =>{
    mediumCard.classList.remove('normal-size')
    mediumCard.classList.add('medium');
    rigthCard.classList.remove('index-card');
    rigthCard.classList.add('card_not');
    contentRigth.classList.add('oculto');

    contentLeft.classList.add('oculto');
    leftCard.classList.add('card_not');
    contentMedium.classList.remove('oculto');
    mediumCard.classList.remove('card_not');

    mediumCard.classList.add('index-card');
    rigthCard.classList.remove('index-card');

})