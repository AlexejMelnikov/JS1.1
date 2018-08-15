
let menu = document.querySelector('.menu')
item = document.querySelectorAll('.menu-item');
console.log(item);

menu.insertBefore(item[1], item[3]);

let newLi = document.createElement("li");
newLi.textContent ='Пятый пункт';
newLi.className = "menu-item";

menu.appendChild(newLi);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let title = document.querySelector('#title');

title.textContent = "Мы продаём только подлинную технику Apple";

let market = document.querySelector('.adv');

let col = document.querySelector('.column');
console.log(col);

market.parentNode.removeChild(market);

let ans = prompt("Ваше отношение к технике Apple");
let prompt1 = document.querySelector('#prompt');
prompt1.textContent = ans;
