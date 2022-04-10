let f1 = document.querySelector(".f-1");

function one() {
  console.log("work");
}

one();

// f1.onclick = one;
f1.onclick = () => {
  console.log("hello");
}

console.log(1 + one());
console.log(one()); //undefined

function two (){
  console.log("work 222");
  return 54;
}

two();

console.log(1 + two());

let a = 8;
let b = 9;

function multi(){
  console.log(a * b);
  return a * b;
}

let c1 = multi();
let c2 = multi();
console.log(c1, c2);

function multi2(x, y) {
  return x * y;
  //не будет срабатывать, либо пишем folse/true
}

console.log( multi2(4, 5));
console.log( multi2(20, 5));
console.log( multi2(20, a));

document.querySelector(".f-2").onclick = function(){
  console.log("++++++");
}

document.querySelector(".f-2").onclick = () => {
  console.log("arrow");
  console.log("++++++");
}

// function (a, b) {

// }

// (a, b) => {

// }

// a => {
  
// }

// function(a) {
//   return 56 * a
// }

// (a) => "hello"


//ДОМАШНЯЯ РАБОТА

//Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.

let a1 = 8;
let out1 = document.querySelector(".out-1");

function t1() {
  out1.innerHTML = a1;
}

document.querySelector(".b-1").onclick = t1;

// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.

let a2 = 8;
function t2() {
  a2
}


document.querySelector(".b-2").onclick =function() {
document.querySelector(".out-2").textContent = f2();
}


