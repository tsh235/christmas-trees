const buttonsOrder = document.querySelectorAll('.product__button--order');
const overlayOrder = document.querySelector('.overlay--order');

buttonsOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay--active');

    const order = overlayOrder.querySelector('.modal__order');
    order.value = buttonOrder.dataset.order;
  });
});

overlayOrder.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay--active');
  }
});