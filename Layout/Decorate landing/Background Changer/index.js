const btn = document.querySelector('.bg');
btn.addEventListener('click', function () {
  let myColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = myColor;
});

function random(num) {
  return Math.floor(Math.random() * (num + 1))
}