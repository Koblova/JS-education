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
  return a2;
}


document.querySelector(".b-2").onclick =function() {
    document.querySelector(".out-2").textContent = t2();
}



// Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.

function t3(a, b) {
  return a * b 
} 

document.querySelector(".b-3-1").onclick =function() {
    document.querySelector(".out-3-1").textContent = t3(3,4);
}

document.querySelector(".b-3-2").onclick = function(){
    document.querySelector(".out-3-2").textContent = t3(5,6);
}


// Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.


function t4(c, d) {
  return c - d
}

document.querySelector(".b-4").onclick =function() {
  document.querySelector(".out-4").textContent = t4(2022, 1991);
}

t4()

// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.


function t5(e) {
  return "Hello " + e
}
document.querySelector(".b-5").onclick =function() {
  document.querySelector(".out-5").textContent = t5("Alina");
}

t5()

// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.

function t6(a, b) { 
  return Math.round(Math.random() * (a - b) + b); 
} 

document.querySelector('.b-6').onclick = function () { 
  document.querySelector('.out-6').textContent = t6(1, 7); 
}

//Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z) (строка). Где x,y,z - случайные числа в диапазоне [0, 255].

// function t7() {
//   let x = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//   let y = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//   let z = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
//   return `rgb(${x}, ${y}, ${z})`;
// }

// document.querySelector('.b-7').onclick = function () {
//   document.querySelector('.out-7').style.background = t7();
// ​}

// t7() 

//Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim.


//Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное.

function t9() { 
  return m1 
} 

document.querySelector('.b-9').onclick = function () {

  let out9 = document.querySelector('.out-9')
  let m1 = document.querySelector('.m-1').value
  if (m1 % 2 == 0) {
    out9.innerHTML += "true"
  }

  else {
    out9.innerHTML += "false"
  }

}

//Создайте функцию t10, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел.

function t10(j, l) {

 return 

}

document.querySelector('.b-10').onclick = function () { 

  
  let out10 = document.querySelector('.out-10')
  let j = document.querySelector('.m-2').value
  let l = document.querySelector('.m-3').value

  if (j > l) {
  out10.innerHTML += j
  }

  // else {
  //   out10.innerHTML += l
  // }

if (j < l) {
  out10.innerHTML += l
}

else {
  out10.innerHTML += "123"
}


}