/*let a = 19;

// >= проверка на меньше 
// <= проверка на больше 
// == проверка на равенство
// != не равно

/*
if (a != 9) {
  // если это правда, то в консоли выведется Yes
  console.log("Yes");
}

else {
  // если нет, то выведется else
  console.log("else");
}
*/
/*
const button = document.querySelector("button"); //константы нельзя менять
const input = document.querySelector(".age");

button.onclick = () => { //стрелочная функция вместо function
  let num = +input.value;
  if (num >= 16 && num < 60) {
    console.log("welcome"); //если число больше/равно 16, в консоли выведется велком
  }
  else if (num > 60) {
    console.log("you're not here");
  }
  else {
    console.log("taboo"); //если число меньше (неправда), выведется табу
  }

  switch (num) {
    case 15:
      console.log("be patient for another year");
      break;
    case 16:
      console.log("Yes!");
      break;
    default:
      console.log("Ok!");
  }
}
*/
/*
let b = 4;
console.log(b == 3 || b == 7); //&& - и || - или
*/
//ДОМАШНЕЕ ЗАДАНИЕ
//При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1

let b1 = document.querySelector(".b-1");
let i1 = document.querySelector(".i-1");
let out1 = document.querySelector(".out-1");

b1.onclick = () => {
  let f1 = +i1.value;
  if (f1 == 4); {
    out1.innerHTML = f1 == 4;
  }
}

//Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = document.querySelector(".a-21");
let a22 = document.querySelector(".a-22");
let b2 = document.querySelector(".b-2");
let out2 = document.querySelector(".out-2");

b2.onclick = () => {
  let f2 = +a21.value;
  let f33 = +a22.value;
  if (f2 >= f33); {
    out2.innerHTML = f2;
  }
  if (f2 <= f33) {
    out2.innerHTML = f33;
  }
}

//Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.

//Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let i31 = document.querySelector(".i-31");
let i32 = document.querySelector(".i-32");
let b3 = document.querySelector(".b-3");
let out3 = document.querySelector(".out-3");

b3.onclick = () => {
  let f3 = +i31.value;
  let f44 = +i32.value;
  if (f3 > f44) {
    out3.innerHTML = f3;
  }
  else if (f44 > f3) {
    out3.innerHTML = f44;
  }
}

//Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 ok если пользователю больше или равно 18 лет, и Oh если меньше.

let b4 = document.querySelector(".b-4");
let i4 = document.querySelector(".i-4");
let out4 = document.querySelector(".out-4");

b4.onclick = () => {
  let f4 = +i4.value;
  if (2022 - f4 > 18) {
    out4.innerHTML = "ok!";
  }
  else if (2022 - f4 < 18) {
    out4.innerHTML = "you are baby!";
  }  
}

// Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let b5 = document.querySelector(".b-5");
let i5 = document.querySelector(".i-5");
let out5 = document.querySelector(".out-5");

b5.onclick = () => {
  let f5 = +i5.value;
  if (f5 < 0) {
    out5.innerHTML = "m"
  }
  else if (f5 == 0) {
    out5.innerHTML = "0"
  }
  if (f5 > 0) {
    out5.innerHTML = "1"
  }
}

//Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.

let b6 = document.querySelector(".b-6");
let i6 = document.querySelector(".i-6");
let out6 = document.querySelector(".out-6");

b6.onclick = () => {
  let f6 = +i6.value % 2;
  if (f6 == 0) {
    console.log("odd");
  }
  if (f6 != 0) {
    console.log("even");
  }
}

