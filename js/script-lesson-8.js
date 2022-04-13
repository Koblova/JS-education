// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// let k = 0;
// while (k < 5){
//   console.log("k: " + k);
//   if (k == 3) continue;
//   k++;
// }

// 0 +... + 10

let sum = 0;
let p = 0;
while (p <= 10) {
  sum = sum + p;
  p++;
 
}
console.log("sum = " + sum);

let out = document.querySelector(".out");
p = 0;
let outStr = "";
let flag = 3;

while (p < 4) {
  let p1 = 0;
  while (p1 < 4) {
    if (p1 < flag) {
      outStr += "0";
    }
    else {
      outStr += "*";
    }
    p1++;
  }
  flag--;
  outStr += "<br>";
  p++;
}

out.innerHTML = outStr;

// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.

let i = 1
let out1 = document.querySelector(".out-1")
let b = document.querySelector(".b-1")

function t1() {
  while (i <= 50) {
    out1.innerHTML += i + " "
    i++
  }
}

b.onclick = t1

// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while.

let k = 2
let out2 = document.querySelector(".out-2")
let b2 = document.querySelector(".b-2")

function t2() {
  while (k <= 122) {
    out2.innerHTML += k + " "
    k =  k + 2
  }
}

b2.onclick = t2

// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.

let j = 25
let out3 = document.querySelector(".out-3")
let b3 = document.querySelector(".b-3")

function t3() {
  while (j >= 7) {
    out3.innerHTML += j + " "
    j--
  }
}

b3.onclick = t3

// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла while.

let l = 77
let out4 = document.querySelector(".out-4")
let b4 = document.querySelector(".b-4")

function t4() {
  while (l >= 35) {
    out4.innerHTML += l + "_"
    l = l - 3
  }
}

b4.onclick = t4

// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*

let s = 1
let out5 = document.querySelector(".out-5")
let b5 = document.querySelector(".b-5")

function t5() {
  while (s <= 17) {

    if (s % 2 !== 0) {
      out5.innerHTML += s + "_" + "*"
    }
    else {
      out5.innerHTML += s + "_" + "**"
    }
    // out5.innerHTML += s + "_" + "*"
    s++
  }
}

b5.onclick = t5

// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******

let h = 1
let out6 = document.querySelector(".out-6")
let b6 = document.querySelector(".b-6")

function t6() {
  while (h <= 3) {
    out6.innerHTML += "<br>"
    h++
    let y = 0
    while (y < 6) {
      out6.innerHTML += "*"
      y++
    }
  }
}

b6.onclick = t6

// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4 3 2 1 0
// Задача решается с помощью цикла while.


let out7 = document.querySelector(".out-7")
let b7 = document.querySelector(".b-7")
let i7 = document.querySelector(".i-7")

function f7() {
  g = i7.value
  while (g >= 0) {
    out7.innerHTML += g + " "
    g--
  }
}

b7.onclick = f7

//Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:
// 4 5 6 7 8
// Задача решается с помощью цикла while.

let i81 = document.querySelector(".i-81")
let i82 = document.querySelector(".i-82")
let out8 = document.querySelector(".out-8")
let b8 = document.querySelector(".b-8")

function f8() {
  k = i81.value
  i = i82.value
  while (k <= i) {
    out8.innerHTML += k + " "
    k++
  }
}

b8.onclick = f8