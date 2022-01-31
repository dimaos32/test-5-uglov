import {updateCart} from './init-cart-calculator';

const initCartProductCounter = () => {
  const counters = document.querySelectorAll('.cart-product-counter');

  if (!counters.length) {
    return;
  }

  counters.forEach((counter) => {
    const input = counter.querySelector('input');
    const decrementBtn = counter.querySelector('.cart-product-counter__quantity-btn--decrement');
    const incrementBtn = counter.querySelector('.cart-product-counter__quantity-btn--increment');

    input.addEventListener('change', () => {
      if (Number(input.value) < Number(input.min)) {
        input.value = input.min;
      }

      if (Number(input.value) > Number(input.max)) {
        input.value = input.max;
      }

      if (Number(input.value) === Number(input.min)) {
        decrementBtn.disabled = true;
      }

      if (Number(input.value) !== Number(input.max)) {
        incrementBtn.disabled = false;
      }

      if (Number(input.value) === Number(input.max)) {
        incrementBtn.disabled = true;
      }

      if (Number(input.value) !== Number(input.min)) {
        decrementBtn.disabled = false;
      }
    });

    decrementBtn.addEventListener('click', () => {
      decrementBtn.blur();

      if (Number(input.value) > Number(input.min)) {
        input.value = Number(input.value) - Number(input.step);

        if (Number(input.value) < Number(input.min)) {
          input.value = input.min;
        }

        if (Number(input.value) === Number(input.min)) {
          decrementBtn.disabled = true;
        }

        if (Number(input.value) !== Number(input.max)) {
          incrementBtn.disabled = false;
        }
      }

      updateCart();
    });

    incrementBtn.addEventListener('click', () => {
      incrementBtn.blur();

      if (Number(input.value) < Number(input.max)) {
        input.value = Number(input.value) + Number(input.step);

        if (Number(input.value) > Number(input.max)) {
          input.value = input.max;
        }

        if (Number(input.value) === Number(input.max)) {
          incrementBtn.disabled = true;
        }

        if (Number(input.value) !== Number(input.min)) {
          decrementBtn.disabled = false;
        }
      }

      updateCart();
    });
  });
};

export {initCartProductCounter};
