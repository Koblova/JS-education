console.log("Hello"); //коммент
console.log("World");
console.log("333");
console.log(334);

console.log("Hello" + "World"); //конкатенация пробел
console.log("Hello " + "World"); //конкатенация пробел
console.log("Hello" + " " + "World"); //конкатенация пробел

//alert("Hello"); //ctrl+l

//кемелкейс (большие-маленькие буквы)
// = присвоить
document.getElementById("out").innerHTML = "Hello"; //заменить текст
document.getElementById("out").innerHTML = "2022";
document.getElementById("out").innerHTML = "<b>2022</b>";

document.querySelector("h2").innerHTML = 15; //обращаемся через тег
document.querySelector("h2.header").innerHTML = 15; //обращаемся через тег и класс
document.querySelector(".header").innerHTML = 15;  //обращаемся через класс
document.querySelector("#out").innerHTML = 777; //обращение к люому элементу (есть решетка)
//document.queryElementById("out").innerHTML = 777; //обращение к айди (нет решетки)

let b; //обращение к переменной, var - устарело, название переменной должно быть уникально
//let a = document.querySelector("#out"); // внутрь а получаем параграф
let c; //объявление переменной
с = document.querySelector(".header").innerHTML = 888; //присвоение значения переменной

//a.innerHTML= 9999; //сокращенное
//c.innerHTML = 000;

//ДОМАШНЕЕ ЗАДАНИЕ
console.log("Алина");
console.log(03);
console.log('Добро '+'пожаловать '+'на курс');
//alert(2019 - 200);

document.getElementById("one").innerHTML = "Hello World";
document.getElementById("two").innerHTML = 12 * 12;

let d; //обозначаю переменную d
d = document.querySelector(".one").innerHTML = "Hello World!!!"; //в переменной лежит класс текста, который нужно заменить three

document.querySelector("span").innerHTML = "world";
document.querySelector(".three").innerHTML = document.querySelector("h3");
document.querySelector(".four").innerHTML = document.querySelector("h4").innerHTML += document.querySelector("p");

a = document.querySelector(".five").innerHTML = 3.1415;

let div7;
div7 = document.querySelector(".seven").innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

y1 = 6;
y2 = 3;

document.querySelector(".test").innerHTML = y1 / y2;

x1 = 'Hello ';
x2 = 5;

document.querySelector(".test-0").innerHTML = x1 + x2;

d1 = document.querySelector(".test-1");
console.log(d1);

d2 = document.querySelector(".test-2");
console.log(d2);
d2 = 5;
console.log(d2);

divS3 = document.querySelector("div.s3");
console.log(divS3);

divS3 = document.querySelector("div.s4");
console.log(divS3);

//document.querySelector("body").innerHTML = ' ';