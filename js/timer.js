const declOfNum = (n, titles) => { 
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
  0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

const timer = () => {
  const timer = document.createElement('div');
  const timerText = document.createElement('p');
  const timerCount = document.createElement('span');

  timer.classList.add('timer');
  timerText.classList.add('timer__text');
  timerCount.classList.add('timer__count');

  timerText.textContent = 'До конца акции осталось: ';
  timerCount.textContent = '3 дня 20 часов 15 минут 17 секунд';

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {
    const deadline = new Date(2023, 11, 31, 23, 59, 59) //год, месяц (начитается с 0 - "январь"), дата, час, мин, сек
    const now = new Date();
    const timeRemaining = (deadline - now) / 1000; // сколько всего осталось секунд, все перевели в секудны

    const seconds = Math.floor(timeRemaining % 60); // остаток от деления на 60 - это сколько секунд осталось, целая часть пойдет в минуты
    const minutes = Math.floor(timeRemaining / 60 % 60); // получаем минуты
    const hours = Math.floor(timeRemaining / 60 / 60 % 24) // получаем часы
    const days = Math.floor(timeRemaining / 60 / 60 / 24 % 30) // получаем дни

    const s = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    const m = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    const h = declOfNum(hours, ['час', 'часа', 'часов']);
    const d = declOfNum(days, ['день', 'дня', 'дней']);

    timerCount.textContent = `${d} ${h} ${m} ${s}`;

    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
    }
  }

  startTimer();
}

timer();