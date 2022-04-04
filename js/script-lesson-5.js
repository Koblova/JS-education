//for
//while
let div = document.querySelectorAll(".one")

console.log(div);
//div.style.background = "red";

// for (let i = 0; i < div.length; i = i + 1) {
//   console.log(div[i]);
//   div[i].style.background = "red";
//   div[i].onclick = two;
// }

// function two() {
//   console.log("123");
// }

// let b = document.getElementsByClassName("one");
// let c = document.getElementsByTagName("div");
// console.log("b");
// console.log("c");

// for (let i = 0; i < b.length; i++){
//   b[i].style.border = "3px solid black"
// }

document.querySelector("button").onclick = () => {
  let r = document.querySelectorAll('input [type="radio"]');
  console.log(r);
  for (let i = 0; i < r.length; i++) {
  if (r[i].checked) {
  console.log(r[i].value);
  }
  }
}
let out = " ";
for (let i = 0; i < 10; i++) {
  if (i == 6) continue;
  out += i + " ";
  //if (i == 6) break;

}
document.querySelector(".out").innerHTML = out;


//ДОМАШНЕЕ ЗАДАНИЕ

//Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида: 1 2 3 4 5 6 7 8 9 ... 49 50 от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


let out1 = document.querySelector(".out-1");
let b1 = document.querySelector(".b-1");

b1.onclick = () => {
 for (let i = 1; i <= 50; i++) {
 out1.innerHTML += i + " "
}
}

//Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида: 2 4 6 ... 122 от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

let out2 = document.querySelector(".out-2");
let b2 = document.querySelector(".b-2");

b2.onclick = () => {
  for (let i = 2; i < 122; i = i + 2) {
    out2.innerHTML += i + " "
  }
}

//Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида: 25 24 23 22 . . 7 от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

let out3 = document.querySelector(".out-3");
let b3 = document.querySelector(".b-3");

b3.onclick = () => {
  for (i = 25; i >= 7; i--) {
    out3.innerHTML += i + " "
  }
}

//Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида: 77_74_71_68_65_62_ ... _38_35_ от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let out4 = document.querySelector(".out-4");
let b4 = document.querySelector(".b-4");

b4.onclick = () => {
  for (i = 77; i >= 35; i = i - 3) {
    out4.innerHTML += i + "_"
  }
}

//Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида: 1_*2_**3_*4_** ... 17_* от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

let out5 = document.querySelector(".out-5");
let b5 = document.querySelector(".b-5");

b5.onclick = () => {
  let i = 1;
  while (i <= 17) {
    out5.innerHTML += i;
    if (i % 2 === 0) {
      out5.innerHTML += '_**';
    }
      else {
        out5.innerHTML += '_*';     
    }
    i++; 
  }
  out5.innerHTML += i
}


