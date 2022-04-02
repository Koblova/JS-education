//document.querySelector("body").innerHTML = ' ';



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
    out6.innerHTML = "odd";
  }
  if (f6 != 0) {
    out6.innerHTML = "even";
  }
}

//Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.

let b7 = document.querySelector(".b-7");
let i71 = document.querySelector(".i-71");
let i72 = document.querySelector(".i-72");
let out7 = document.querySelector(".out-7");

b7.onclick = () => {
  let f71 = +i71.value;
  let f72 = +i72.value;
  out7.innerHTML = Math.pow(f71, f72);
}

//Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let b8 = document.querySelector(".b-8");
let s8 = document.querySelector(".s-8");
let out8 = document.querySelector(".out-8");

b8.onclick = () => {
 let f8 = +s8.value;
 switch (f8) {
  case 1:
    out8.innerHTML = "one";
    break
  case 2:
    out8.innerHTML = "two";
    break
  case 2:
    out8.innerHTML = "three";
    break
}
  let plus = "+";
  let minus = "-";
  let umn = "*";
  let del = "/";
//Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.

let i9 = document.querySelector(".i-9");
let b9 = document.querySelector(".b-9");
let out9 = document.querySelector(".out-9");

b9.onclick = () => {
  let f9 = +i9.value;
  if (f9 >= 1 && f9 < 32)
  out9.innerHTML = "1 подъезд";
  else if (f9 >= 33 && f9 < 43)
  out9.innerHTML = "2 подъезд";
  else if (f9 >= 44 && f9 < 64)
  out9.innerHTML = "3 подъезд";
  else if (0 > f9 || f9 > 64)
  out9.innerHTML = "нет такой квартиры!";
}

let i10 = document.querySelector(".s-100");
let b10 = document.querySelector(".b-10");
let out10 = document.querySelector(".out-10");

b10.onclick = () => {
  let f10 = +i10.value;
  out10.innerHTML = f10;
}

//Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let s110 = document.querySelector(".s-110");
let out11 = document.querySelector(".out-11");

s110.onclick = () => {
  let f110 = s110.value;
  out11.innerHTML = f110;
}

//Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector(".i-120");
let b12 = document.querySelector(".b-12");
let out12 = document.querySelector(".out-12");

b12.onclick = () => {
  let f120 = i120.value;
  out12.innerHTML = typeof f120;
}

//Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let i130 = document.querySelector(".i-130");
let b13 = document.querySelector(".b-13");
let out13 = document.querySelector(".out-13");

b13.onclick = () => {
  let f130 = i130.value;
  out13.innerHTML = typeof f130;
}
//Дан input i-141 и input-142, type=number. Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14.

function f14(){
    let a = +document.querySelector('.i-141').value;
    let b = +document.querySelector('.i-142').value;
    let v = document.querySelector('.s-143').value;
    let out = document.querySelector('.out-14');
    switch (v) {
      case '+': out.innerHTML = a + b
          break;
      case '-': out.innerHTML = a - b
          break;
      case '*': out.innerHTML = a * b
          break;
      case '/': out.innerHTML = a / b
          break;
    }
  }

  document.querySelector('.b-14').onclick = f14;
}