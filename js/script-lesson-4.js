// document.querySelector("button").onclick = function(){
//   console.log(document.querySelector("#one").value);
//   document.querySelector("button").style.backgroundColor = document.querySelector("#one").value
// }

// document.querySelector("#one").oninput = () => {
//   console.log(document.querySelector("#one").value)
//   document.querySelector("span").innerHTML = document.querySelector("#one").value
// }

document.querySelector("#btn-1").onclick = () => {
  console.log(document.querySelector("#i2").value);
  let myCheckbox = document.querySelector("#i2");
  console.log(myCheckbox.checked);
  if ( myCheckbox.checked) {
console.log("Нажат");
}

  else {
    console.log("Не нажат");
  }
}

document.querySelector("#btn-2").onclick = (event) => {
  event.preventDefault();
// let text = document.querySelector("#two")
// console.log(text.value);
// text.value = "one";
let form = document.querySelector("form")
console.log(form);
console.log(form.elements.two.value);
console.log(form.elements.three.value);

}


//ДОМАШНЕЕ ЗАДАНИЕ

//Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.

document.querySelector("#b-1").onclick = () => {
  alert( "Это задача №1" );
}

//Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

document.querySelector("#b-2").onclick = () => {
  alert( "Это задача №2" );
}

//Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

// document.querySelector("#p-3").onclick = () => {
//   alert( "Это задача №3" );
// }

//Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4
const out4 = document.querySelector(".out-4")

document.querySelector("#b-4").onclick = () => {

  let myCheckbox = document.querySelector("#i-4");
  if (myCheckbox.checked) {
    out4.innerHTML = "true"
  }
  else {
    out4.innerHTML = "folse"
  } 
}

//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.

const out5 = document.querySelector(".out-5")
const i5 = document.querySelector("#i-5")

document.querySelector("#b-5").onclick = () => {
  let myCheckbox = document.querySelector("#i-5");
  let b = i5.value;

  if (myCheckbox.checked) {
    out5.innerHTML = b;
  }
  else {
    out5.innerHTML = "folse"
  }
}

//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.

const out6 = document.querySelector(".out-6")
const i6 = document.querySelector("#i-6")

document.querySelector("#b-6").onclick = () => {
  let c = i6.value;
   {
    out6.innerHTML = c;
  }  
}

//Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

const i7 = document.querySelector("#i-7")
const out71 = document.querySelector(".out-71")
const out72 = document.querySelector(".out-72")


document.querySelector("#b-7").onclick = () => {
 let e = i7.value 
 let f = e.length 

 {
  out71.innerHTML = e;
 }

 if (f > 0 && f <= 6 ) {
 out72.innerHTML = "1";
 }
 else {
 out72.innerHTML = "0";
}
}

//Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

let out8 = document.querySelector(".out-8")
let out81 = document.querySelector(".out-81")


document.querySelector(".b-8").onclick = () => {
out8.innerHTML = '<input class="i-81"><button class="b-81">Push</button>'

let b81 = document.querySelector(".b-81");
let i81 = document.querySelector(".i-81")
b81.onclick = () => {
  let f81 = i81.value;
  out81.innerHTML = f81;
}
}

//Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.

let out9 = document.querySelector(".out-9")
let b9 = document.querySelector(".b-9")

b9.onclick = () => {
  let check = document.querySelector("#r-9");
  console.log(check.checked);
  let r9 = document.querySelector("#r-9")
  let h = r9.value

  if (check.checked) {
    out9.innerHTML = h;
  }
  else {
    out9.innerHTML = "0"
  }
}

//>Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).



document.querySelector(".b-10").onclick = () => {
 
 document.querySelector(".b-10").style.backgroundColor = document.querySelector("#i-10").value
}

//Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

document.querySelector(".b-11").onclick = () => {
  document.querySelector("#i-112").style.backgroundColor = document.querySelector("#i-111").value
}

//Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.


document.querySelector(".b-12").onclick = () => {
  document.querySelector(".out-12").innerHTML = document.querySelector("#i-12").value
}

//Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

document.querySelector("#i-13").oninput = () => {
  document.querySelector(".out-13").innerHTML  = document.querySelector("#i-13").value
}

//Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

document.querySelector("#b-14").onclick = (event) => {
  event.preventDefault();
  document.querySelector(".out-14").innerHTML = document.querySelector("#t-14").value
}

//Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

document.querySelector("#b-15").onclick = (event) => {
  event.preventDefault();
  document.querySelector("#t-15").innerHTML = document.querySelector("#i-15").value
  document.querySelector(".out-15").innerHTML = document.querySelector("#i-15").value
}

//Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

document.querySelector("#b-16").onclick = (event) => {
  event.preventDefault();
  document.querySelector(".out-16").innerHTML = document.querySelector("#s-16").value
}

//Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

document.querySelector("#s-17").onchange = (event) => {
  event.preventDefault();
  document.querySelector(".out-17").innerHTML = document.querySelector("#s-17").value
}

//Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

document.querySelector("#s-18").onchange = (event) => {
  event.preventDefault();
  document.querySelector("#i-18").innerHTML = document.querySelector("#s-18").value
}

//Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

let text = document.querySelector("#i-191");
let password = document.querySelector("#i-192");
let b19 = document.querySelector("#b-19");
let out19 = document.querySelector(".out-19");

b19.onclick = (event) => {
  event.preventDefault();
  out19.innerHTML = text.value + " " + password.value
}

//Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements

let text1 = document.querySelector("#i-193");
let password1 = document.querySelector("#i-194");
let b20 = document.querySelector("#b-20");
let out20 = document.querySelector(".out-20");
let f20 = document.querySelector("#f-20")

b20.onclick = (event) => {
  event.preventDefault();
  out20.innerHTML = text.value + " " + password.value
  console.log(f20.elements);
  
}
