// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for decrement button click
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= -10) {
    displayValue.innerText = value - 1;
  } else {
    alert("-10 values are not allowed");
  }
});

// for increment button click
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

// for reset button click & change background color 
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
  const btn = document.getElementById("resetBtn");
const randomColor = () => {
    let val = "0123456789ABCDEF"
    let cons = "#";

    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;



};

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();

}

btn.addEventListener("click", changeRandomColor);
});