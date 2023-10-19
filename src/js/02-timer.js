import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const elem = {
  startDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('.startBtn'),
  day: document.querySelector('.day'),
  hours: document.querySelector('.hours'),
  min: document.querySelector('.min'),
  sec: document.querySelector('.sec'),
};

const dateNow = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates);
    elem.startBtn.disabled = true;

    if (dateNow.getTime() >= selectedDates[0].getTime()) {
      Notiflix.Notify.failure(`Please choose a date in the future`);
    } else {
      elem.startBtn.disabled = false;
    }
  },
};

const fp = flatpickr(elem.startDate, options);

elem.startBtn.addEventListener('click', getDate);

function getDate() {
  elem.startBtn.disabled = true;

  const dateStart = fp.selectedDates[0];

  if (dateNow.getTime() >= dateStart.getTime()) {
    Notiflix.Notify.failure(`Please choose a date in the future`);
  } else {
    setInterval(() => {
      const dateNow = new Date();
      const timeToGo = convertMs(dateStart.getTime() - dateNow.getTime());

      //   console.log(timeToGo);

      elem.day.textContent = timeToGo.days;
      elem.hours.textContent = timeToGo.hours;
      elem.min.textContent = timeToGo.minutes;
      elem.sec.textContent = timeToGo.seconds;
    }, 1000);
  }
}

function addLeadingZero(value) {
  const mySec = value.toString();
  return mySec.padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
