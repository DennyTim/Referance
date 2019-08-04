const mainList = document.querySelector("ul");
const inputElem = document.querySelector("input");
const clicker = document.querySelector("button");

clicker.addEventListener("click", function () {
  if (inputElem.value.length > 3) {
    let li = document.createElement("li");
    let tempText = document.createTextNode(inputElem.value);
    li.appendChild(tempText);
    mainList.appendChild(li);
  }
})