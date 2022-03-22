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