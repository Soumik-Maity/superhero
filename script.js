/* Iteration 4: Make the Canvas App Functional */
const faceplateEl = document.getElementById("face-plate");
const helmetEl = document.getElementById("helmet");
const eyesEl = document.getElementById("eyes");
const backgroundEl = document.getElementById("background");

const clr1El = document.getElementById("inpclr1");
const clr2El = document.getElementById("inpclr2");
const clr3El = document.getElementById("inpclr3");
const clr4El = document.getElementById("inpclr4");

clr1El.oninput = () => {
  faceplateEl.style.fill = clr1El.value;
};
clr2El.oninput = () => {
  helmetEl.style.fill = clr2El.value;
};
clr3El.oninput = () => {
  eyesEl.style.fill = clr3El.value;
};
clr4El.oninput = () => {
  backgroundEl.style.fill = clr4El.value;
};
