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

// Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:
// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл while.

let i91 = document.querySelector(".i-91")
let i92 = document.querySelector(".i-92")
let out9 = document.querySelector(".out-9")
let b9 = document.querySelector(".b-9")

function f9() {
  k = i91.value
  i = i92.value
  if (k > i) {
    while (k >= i) {
    out9.innerHTML += i + " "
    i++
  }
}
  if (k < i)  {
  while (k <= i) {
      out9.innerHTML += k + " "
      k++
  }
  }
}

b9.onclick = f9

// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл while, а четность - через шаг (равный 2).

let out10 = document.querySelector(".out-10")
let b10 = document.querySelector(".b-10")

function t10() {
let k = 1950
let i = 2000

  while (k <= i) {
    out10.innerHTML += k + " "
    k = k + 2
  }
}

b10.onclick = t10

// Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так:
// one 3 4 two

function t11() {
  let out11 = document.querySelector('.out-11');
  let divs11 = document.querySelectorAll('.div-11');
  let out = '';
  for (let i = 0; i < divs11.length; i++){
    out += divs11[i].innerHTML + ' ';
  }
  out11.innerHTML = out;
}

document.querySelector('.b-11').onclick = t11;

//Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’

function t12() {

  let elem = document.querySelectorAll('.div-12');
  for (let i = 0; i < elem.length; i = i + 1){
    elem[i].style.background = "orange"
  }
  
}

document.querySelector('.b-12').onclick = t12;

// Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {

let inp = document.querySelectorAll('.i-13');
for (let i = 0; i < inp.length; i++) {
  inp[i].value = i + 1
 }
}

document.querySelector('.b-13').onclick = t13;

//Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

function t14() {
  let out14 = document.querySelector('.out-14');
  let inp = document.querySelectorAll('.i-14');
  let i = 0
  while (inp.length > i) {
    if (inp[i].checked) {
      out14.innerHTML += inp[i].value
    }
    i++
   }
  }
  
  document.querySelector('.b-14').onclick = t14;

  // Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:
  // 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10


  function t15() {
    let out15 = document.querySelector('.out-15');

    for (let i = 0, j = 10; i <= 10; i++, j--)  {
      out15.innerHTML += j + " "
      out15.innerHTML += i + " "

     }
    }
    
    document.querySelector('.b-15').onclick = t15;