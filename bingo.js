const generateCellNum = () => {
  for (let i = 1; i <= 76; i++) {
    const tabellone = document.getElementById("tabellone");
    const nCell = document.createElement("div");
    nCell.classList.add("cell");
    const nCont = document.createElement("h3");
    nCont.innerText = i;

    nCell.appendChild(nCont);
    const num = estrazione;
    console.log(num)
    if (num === i) {
        nCell.classList.add("uscito");

    }
    tabellone.appendChild(nCell);
  }
};

const estrazione = (e) => {
  e.preventDefault();
  const n = Math.floor(Math.random() * 76 + 1);
  console.log(n);

};
window.onload = () => {
  generateCellNum();
  const button = document.querySelector("form");
  button.onsubmit = estrazione;
};
