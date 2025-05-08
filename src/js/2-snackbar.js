import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { delay, state } = form.elements;
  const delayValue = parseInt(delay.value);
  const stateValue = state.value;

  function makePromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (stateValue === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  makePromise(delayValue, stateValue)
    .then(delay => {
      iziToast.success({
        title: 'Fulfilled',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Rejected',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });

  form.reset();
});
