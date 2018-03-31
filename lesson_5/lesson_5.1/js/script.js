let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu'),
    advertise = document.querySelector('.adv'),
    column = document.getElementsByClassName('column'),
    review = document.getElementById('prompt')
 

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
 
menu[0].insertBefore(menuItem[2], menuItem[1]); 

let five = document.createElement('li');
five.innerHTML = 'Пятый пункт';
five.classList.add('menu-item');
menu[0].appendChild(five);
 
title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(advertise);

review.textContent = prompt('Что вы думаете о технике Apple');

 