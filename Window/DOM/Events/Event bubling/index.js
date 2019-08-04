//3 фазы, погружение -> всплытие на целевом элементе -> всплытие
//при погружении со слушетелями на каждом элементе от родителя до целевого ребенка
//будут происходить события от родителя до целевого ребенка

const outputEl = document.querySelector("section");
const els = document.querySelectorAll("div");

for (let i = 0; i < els.length; i++) {
  let el = els[i];
  el.style.border = '1px solid red';
  el.style.width = '100px';
  el.style.padding = '20px';
  el.value = (i + 1);
  // Используем погружение
  el.addEventListener('click', capture, true)

  // Используем всплытие
  el.addEventListener('click', bubble, false)
}

function output(msg) {
  outputEl.innerHTML += `${msg} <br />`
}

function bubble() {
  output('bubble:' + this.value);
}

function capture() {
  output('capture:' + this.value);
}