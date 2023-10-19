import Notiflix from 'notiflix';

const elem = {
  amount: document.querySelector('input[name="amount"]'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  btn: document.querySelector('.btn'),
};

let amount;
let delay;

elem.btn.addEventListener('click', submit);

function submit(event) {
  event.preventDefault();
  elem.btn.disabled = true;
  const btnDelay =
    Number(elem.step.value) * Number(elem.amount.value) +
    Number(elem.delay.value);
  amount = elem.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    delay = Number(elem.delay.value) + Number(elem.step.value * (i - 1));
    createPromise(i, delay);
  }

  setTimeout(() => {
    elem.btn.disabled = false;
  }, btnDelay + 500);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    setTimeout(() => {
      Promise.resolve({ position: position, delay: delay }).then(value =>
        Notiflix.Notify.success(`Fullfiled promis ${position} in ${delay}ms`)
      );
    }, delay);
  } else {
    setTimeout(() => {
      Promise.reject({ position: position, delay: delay }).catch(value =>
        Notiflix.Notify.failure(`Rejected promis ${position} in ${delay}ms`)
      );
    }, delay);
  }
}
