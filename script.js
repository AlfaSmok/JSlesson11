'use strick';

const btn = document.getElementById('btn');
const inputColor = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const inputRange = document.getElementById('range');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById('range-span');

const colorName = function () {
  square.style.backgroundColor = inputColor.value;
};

const chaneRange = function () {
  circle.style.height = inputRange.value + '%';
  circle.style.width = inputRange.value + '%';
  rangeSpan.textContent = inputRange.value;
};


btn.addEventListener('click', colorName);
eBtn.style.display = 'none';
inputRange.addEventListener('input', chaneRange);



console.log(btn);
console.log(inputColor);
console.dir(circle);
