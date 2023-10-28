function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
};

const createSnow = (min, max, saturation) => {
  const style = document.createElement('style');

  style.textContent = `
    body {
      position: relative;
    }
    .snow {
      position: fixed;
      width: 30px;
      height: 30px;
      top: 0;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 99999;
      animation-name: fall;
      animation-timing-function: linear;
      pointer-events: none;
    }

    @keyframes fall {
      100% {
        transform: translateY(110vh)
      }
    }
  `;

  document.head.append(style);

  let start = 1;
  const count = 4;

  const createSnowItem = () => {
    const snowItem = document.createElement('div');

    snowItem.classList.add('snow');

    // const time = Math.round(((Math.random() * 10) + 2) * n * 1000);
    const time = Math.round(getRandomInt(min, max) * 1000);

    snowItem.style.cssText = `
      left: ${Math.random() * document.documentElement.clientWidth}px;
      background-image: url('./snow/snowflake${start}.svg');
      animation-duration: ${time}ms;
    `;

    if (start === count) {
      start = 1;
    } else {
      start++;
    }

    document.body.append(snowItem);
    setTimeout(() => {
      snowItem.remove()
    }, time); 
  }

  if (saturation > 500) {
    saturation = 500;
  }

  setInterval(createSnowItem, 550 - saturation);
};

createSnow(5, 15, 500);