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






// function t1() {

//   let k = 0;
//   let out1 = document.querySelector(".out-1");

//   while (k <= 50) {
//     k++;
//     out1.innerHTML = k;
//   }
// }

// document.querySelector(".b-1").onclick = t1;

let j = 0;
// let out1 = document.querySelector(".out-1");

while (j < 50) {
  j++;
  document.querySelector(".out-1").innerHTML = j;
}