const elem = {
  startBtn: document.querySelector('.startBtn'),
  stopBtn: document.querySelector('.stopBtn'),
  bg: document.querySelector('body'),
};

// console.log(elem.stopBtn);
// console.dir(elem.bg);

elem.startBtn.addEventListener('click', startRandom);
elem.stopBtn.addEventListener('click', stopAll);
let random = null;

function startRandom(event) {
  event.target.disabled = true;
  //   console.dir(event.target);

  random = setInterval(() => {
    elem.bg.style.backgroundColor = getRandomHexColor();
  }, 1000);
  //   console.log(getRandomHexColor());
  return random;
}

function stopAll(event) {
  clearInterval(random);
  elem.startBtn.disabled = false;
  //   console.log('stopped');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
