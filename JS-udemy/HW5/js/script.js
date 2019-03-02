let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]); // вставка элемента div перед circle[1]
menu.appendChild(li);                        // добавление элемента li к родительскому классу .menu в конец
li.classList.add('menu-item');               // добавление класса .menu-item к элементу li
li.textContent = 'Пятый пункт';              // добавление к элементу li текста

// ****************************************************************
let bodyFone = document.querySelector('body');

bodyFone.style.background = 'url(img/apple_true.jpg) center no-repeat';
// ******************************************************************
let title = document.getElementById('title');

title.textContent = 'Мы продаем только подлинную технику Apple';
// ******************************************************************
let adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column');

column[1].removeChild(adv);
// ********************************************************************
let answer = document.getElementById('prompt');
// let ques = prompt("Какое  ваше отношение к технике apple", "");
// answer.textContent = ques;


// console.log(ans);