const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  navigation.classList.toggle('navigation--active');

});