const container = document.querySelector(".container");
const button = document.querySelector("button");

createGrid();

function createGrid(number = 16) {
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

function askNumber() {
  const gridNumber = prompt("Enter a number between 1 - 100");
  gridNumber > 100 && askNumber(); //Entered number must be less than 101
  createGrid(gridNumber);
}

button.addEventListener("click", askNumber);
container.addEventListener("mouseover", addHover);

function addHover(e) {
  let alpha = +e.target.style.backgroundColor
    .split(",")
    .pop()
    .slice(0, -1)
    .trim();

  color = `rgba(${random()},${random()},${random()}, ${alpha + 0.1})`;
  e.target.style.backgroundColor = color;
}

// container.addEventListener('mouseout', (e)=>{
//  e.target.style.backgroundColor = ''
// })

function random() {
  return Math.trunc(Math.random() * 255);
}
