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

//Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.



function f11() {
  let out11 = document.querySelector(".out-11");
  let b = document.createElement("div");
  b.innerHTML = '25';
  out11.append(b);
}

document.querySelector(".b-11").onclick = f11

// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.

function f12() {
  let out12 = document.querySelector(".out-12");
  let b = document.createElement("div");
  b.innerHTML = '12';
  b.classList.add("bg-12");
  out12.append(b);
}

document.querySelector(".b-12").onclick = f12

// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.

function f13() {
  let div13 = document.querySelector('div');
  div13.onclick = f13_1;
  div13.innerHTML = 'pushME';
  div13.classList.add('bg-orange');
  document.querySelector('.out-13').append(div13);
}

function f13_1() {
  document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}

document.querySelector('.b-13').onclick = f13;


// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.

function f14() {
  let out14 = document.querySelector(".out-14");
  let b = document.createElement("div");
  b.innerHTML = '14';
  b.classList.add("bg-14");
  out14.prepend(b);
}

document.querySelector(".b-14").onclick = f14

// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.

function f15() {
  let out15 = document.querySelector(".out-15");
  let b = document.createElement("div");
  b.innerHTML = '15';
  b.classList.add("bg-15");
  out15.before(b);
}

document.querySelector(".b-15").onclick = f15

//Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.

function f16() {
  let out16 = document.querySelector(".out-16");
  let b = document.createElement("div");
  b.innerHTML = '16';
  b.classList.add("bg-16");
  out16.after(b);
}

document.querySelector(".b-16").onclick = f16

//Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет out-17 с помощью replaceWith.


function f17() {
  let out17 = document.querySelector(".out-17");
  let b = document.createElement("div");
  b.innerHTML = '17';
  b.classList.add("bg-17");
  out17.replaceWith(b);
}

document.querySelector(".b-17").onclick = f17


//append - добавляет элемент (указанный в скобках) со значением и выводит в иннер
//prepend - добавляет вложенный элемент с новым классом
//before - добавляет элемент перед указанным
//after - добавляет элемент после указанного
//replaceWith - выводит значение указанного в скобках элемента


// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

let out18 = document.querySelector(".out-18");
let p18 = document.querySelector(".p-18");

function f18() {
  let par18 = p18.getAttribute("data-b");
  out18.innerHTML = par18;
}

document.querySelector(".b-18").onclick = f18

// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.

// function f19() {
//   let out19 = document.querySelector('.out-19')
//   let p19 = document.querySelectorAll('.p-19');

//   for (i = 0; i < p19.length; i++) {
//     out19 += p19[i].getAttribute('date-c') + ' ';
//   }
//   out19.innerHTML = out19
// }

// document.querySelector('.b-19').onclick = f19;

out19 = document.querySelector('.out-19');
p19 = document.querySelectorAll('.p-19');
document.querySelector('.b-19').onclick = f19;


function f19() {
    for (let i = 0; i <= p19.length; i++) {
        let data = p19[i].getAttribute('data-c');
        out19.innerHTML += data + ' ';   
    }    
}