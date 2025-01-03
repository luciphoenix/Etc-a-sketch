const container = document.querySelector(".container");
const button = document.querySelector("button");

function askNumber() {
  const gridNumber = prompt("Enter a number between 1 - 100");
  createGrid(gridNumber);
}

button.addEventListener("click", askNumber);

function createGrid(number) {
  clearContainer();
  for (let i = 0; i < number ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${800 / number}px`;
    div.style.height = `${800 / number}px`;
    container.appendChild(div);
  }
}

function clearContainer() {
  container.replaceChildren();
}
