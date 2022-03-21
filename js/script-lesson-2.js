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

document.querySelector('.hello').value = 'Hello';

//Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red'. Изучите результат операции

let y = document.querySelector(".seven"); 
y.style.border = '2px solid red';

//Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел

let eightOne = document.querySelector(".eight-one"); //переменная для значения 1 value
let eightTwo = document.querySelector(".eight-two"); //переменная для значения 1 value
let eight = document.querySelector(".eight"); //переменная для кнопки
let outEight = document.querySelector(".out-eight"); //переменная для строки вывода суммы

eight.onclick = function(){
  let one = +eightOne.value; //переменная для вводимого значения 1 value
  let two = +eightTwo.value; //переменная для вводимого значения 2 value
  outEight.innerHTML = (one + two); //сумма двух value
  inputIn.value = ""; //очистить строку
}

//запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль

let inputNine = document.querySelector(".nine");
let buttonNine = document.querySelector(".button-nine");

buttonNine.onclick = function(){
  t = inputNine.value;
  t = parseInt(t);
  console.log(parseInt(t));
}

//запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 

let inputTen = document.querySelector(".ten");
let buttonTen = document.querySelector(".button-ten");

buttonTen.onclick = function(){
  t = inputTen.value;
  t = parseFloat(t);
  console.log(parseFloat(t));
}

//Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел

let inputElevenOne = document.querySelector(".eleven-one");
let inputElevenTwo = document.querySelector(".eleven-two");
let buttonEleven = document.querySelector(".button-eleven");
let outEleven = document.querySelector(".out-eleven");

buttonEleven.onclick = function(){
  let ElevenOne = +inputElevenOne.value;
  let ElevenTwo = +inputElevenTwo.value;
  outEleven.innerHTML = (ElevenOne + ElevenTwo);
}

//Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let inputName = document.querySelector(".name");
let inputFirstname = document.querySelector(".firsname");
let inputAge = document.querySelector(".age");
let inputProfession = document.querySelector(".profession");
let buttonName = document.querySelector(".button-name");
let outName = document.querySelector(".out-name");

buttonName.onclick = function(){
  let name = inputName.value;
  let firstname = inputFirstname.value;
  let age = inputAge.value;
  let proffesion = inputProfession.value;
  outName.innerHTML = ("Уважаемый"+ " " + name + " " + firstname + " " + "Ваш возраст" + " " + age + " " + "года" + " " + "по профессии Вы" + " " + proffesion);
}
