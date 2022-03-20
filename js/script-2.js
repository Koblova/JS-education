//let a;
//let b = "hello";
//console.log(b);

let inputIn = document.querySelector(".input-in"); //инпут
let button = document.querySelector("button"); //кнопка
let div = document.querySelector(".out");

button.onclick = function (){
  // когда кнопка нажата срабатывает функция внизу
  console.log("Работает!");
  //console.log(inputIn.value); // value - это то, что введено в инпут
  let b = +inputIn.value; //плюсик для перевести в число
  console.log(b + 10);
  div.innerHTML = b;
  inputIn.value = ""; //очищает строчку
}

//ДОМАШНЕЕ ЗАДАНИЕ
/*a = 7;
b = 9;
console.log(a + b);

c = 7;
d = 9;
console.log(c / d);

e = 3;
f = 5;
console.log(e + f);

e1 = '3';
f1 = 5;
console.log(e1 + f1);

e2 = 3;
f2 = 0;
console.log(e2 / f2);

e3 = 3;
f3 = 'Hello';
console.log(e2 / f3);

e4 = 3;
f4 = 'Hello';
console.log(e4 * f4);*/


//выводит на страницу, что пользователь ввел в input
let inputTwo = document.querySelector(".input-two");
let buttonTwo = document.querySelector(".two");

buttonTwo.onclick = function (){
  console.log("Сработала"); //когда по кнопке кликнули, то срабатывает функция (например, вывод в консоль)
  let z = inputTwo.value; // переменная для введенного значения
  console.log(z); //вывести введенное значение в консоль
  inputTwo.value = ""; //затирает значения в строке поиска
}


//выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10
let inputThree = document.querySelector(".input-three");
let buttonThree = document.querySelector(".three");


buttonThree.onclick = function (){
  let w = inputThree.value;
  console.log(w * 10);
}


//выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10
let inputFour = document.querySelector(".input-four");
let buttonFour = document.querySelector(".four");

buttonFour.onclick = function(){
 let h = inputFour.value;
 console.log(h + "10");
 inputFour.value = "";
}

//В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия

let inputFive = document.querySelector(".input-five");
let inputSix = document.querySelector(".input-six");
let buttonFive = document.querySelector(".five");

buttonFive.onclick = function(){
  let r = inputFive.value;
  let t = inputSix.value;
  console.log("hello " + r + " " + t);
  inputFive.value = "";
  inputSix.value = "";
}

//Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу

let numberOne = document.querySelector(".number-one"); 
let numberTwo = document.querySelector(".number-two");
let buttonNumber = document.querySelector(".number");
let out = document.querySelector(".out-number"); 

buttonNumber.onclick = function(){
  let one = +numberOne.value;
  let two = +numberTwo.value;
  console.log(one + two);
  out.innerHTML = one;
  out.innerHTML = two;
}

//Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'

document.queryCommandValue("hello").innerHTML = "Hello World";