const one = document.querySelector(".one");

one.style.width = "150px";
one.style.paddingBottom = "40px";

// console.log(one.style);

one.classList.add("two", "three");
one.classList.remove("three");

const toggle = document.querySelector(".toggle");

toggle.onclick = function(){
  this.classList.toggle("three");
}

//атрибут data

console.log(one.getAttribute("data"));
// console.log(document.querySelectorAll("link")[1].getAttribute("href"));

one.setAttribute("data-num", 6); 

let gas = document.querySelectorAll(".gas");
for (let i = 0; i < gas.length; i++) {
  gas[i].onclick = function() {
    let gallons = document.querySelector(".gallons").value;
    let amount = this.getAttribute("data");
    console.log(gallons*amount);
  }
}

let a = document.createElement("div");
a.innerHTML = "Hello";
a.classList.add("one");
a.onclick = function () {
  alert("hello");
}

document.querySelector(".test").appendChild(a);

console.log(a);

//ДОМАШНЯЯ РАБОТА

// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.

function f1() {
  document.querySelector(".out-1").style.width = "200px";
  document.querySelector(".out-1").style.height = "40px";
}

document.querySelector(".b-1").onclick = f1

// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.

function f2() {
  document.querySelector(".out-2").classList.add("bg-2");
}

document.querySelector(".b-2").onclick = f2

//По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3

function f3() {
  document.querySelector(".out-3").classList.remove("bg-3");
}

document.querySelector(".b-3").onclick = f3

//По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.

function f4() {
  document.querySelector(".out-4").classList.toggle("bg-4");
}

document.querySelector(".b-4").onclick = f4

//По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.

function f5() {
  if (document.querySelector(".out-4") == document.querySelector(".bg-4")){
  document.querySelector(".out-5").innerHTML += "true"
  }
  else {
  document.querySelector(".out-5").innerHTML += "false"}
}

document.querySelector(".b-5").onclick = f5

//По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.

function f6() {
  document.querySelector(".p-6").innerHTML += document.querySelectorAll(".p-6").length
}

document.querySelector(".b-6").onclick = f6

//По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

function f7() {
  let out7 = document.querySelectorAll(".out-7");
  for (let i = 0; i < out7.length; i++) {
    out7[i].classList.add("bg-7");
  }
}

document.querySelector(".b-7").onclick = f7

//По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

function f8() {
  let out8 = document.querySelectorAll(".out-8");
  for (let i = 0; i < out8.length; i++) {
    out8[i].classList.toggle("bg-8");
  }
}

document.querySelector(".b-8").onclick = f8

//Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.

function f9() {
  let out9 = document.querySelectorAll(".out-9");
  for (let i = 0; i < out9.length; i++) {

    out9[i].onclick = function(){
      out9[i].classList.add("bg-9");
    }
  }
}

f9 ()

// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.

function f10() {
  let out10 = document.querySelectorAll(".out-10");
  for (let i = 0; i < out10.length; i++) {

    out10[i].onclick = function(){
      out10[i].classList.add("bg-10");
    }
  }
}

f10 ()