let a;
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
console.log(a + b);*/

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
console.log(e4 * f4);


//выводит на страницу, что пользователь ввел в input
let inputTwo = document.querySelector(".input-two");
let buttonTwo = document.querySelector(".two");
let outTwo = document.querySelector(".out-two");

buttonTwo.onclick = function (){
  console.log("Сработала"); //когда по кнопке кликнули, то срабатывает функция (например, вывод в консоль)
  let z = inputTwo.value; // переменная для введенного значения
  console.log(z); //вывести введенное значение в консоль
  inputTwo.value = ""; //затирает значения в строке поиска
}


//выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10
let inputThree = document.querySelector(".input-three");
let buttonThree = document.querySelector(".three");
let outThree = document.querySelector(".out-three");

buttonThree.onclick = function (){
  let w = inputThree.value;
  console.log(w * 10);
}


//выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10
let inputFour = document.querySelector(".input-four");
let buttonFour = document.querySelector(".four");
let outFour = document.querySelector(".out-four");

buttonFour.onclick = function(){
 let h = inputFour.value;
 console.log(h + "10")
}

//В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия