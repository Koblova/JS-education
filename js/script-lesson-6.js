let out = document.querySelector(".out")

// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 10; k++) {
//   out.innerHTML += "*";
//   }
//   out.innerHTML += "<br>";
// }

// for (let i = 1; i < 10; i++) {
//   // out.innerHTML += "3*" + i + "=" + (i * 3) + "<br>";
  
//   for (let k = 1; k < 10; k++) {
//   out.innerHTML += `${i}*${k}=${k*i}<br>`;
//   }
//   out.innerHTML += "<hr>";
// }

//ДОМАШНЕЕ ЗАДАНИЕ

// С помощью вложенных циклов, нарисуйте строку:

// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

let out1 = document.querySelector(".out-1")

for (let i = 0; i < 3; i++) {
  out1.innerHTML += "_";

for (let k = 0; k < 3; k++) {
  out1.innerHTML += "*";
}
}

//С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.

let out2 = document.querySelector(".out-2")

for (let i = 1; i <= 3; i++) {
  out2.innerHTML += "<br>" + i + "<br>";

for (let k = 1; k <= 3; k++)
  out2.innerHTML += "*" + "_";
}

let out4 = document.querySelector(".out-4")

for (let i = 1; i <= 3; i++) {
  out4.innerHTML += " " + i + "_";
for (let k = 1; k <= 5; k++) {
  out4.innerHTML += k;
  }
}

