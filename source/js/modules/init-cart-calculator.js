const headerCartCounter = document.querySelector('[data-counter="cart"]');
const cartForm = document.querySelector('.cart__form');

const updateProductPrices = () => {
  const products = document.querySelectorAll('.produtct-card');

  products.forEach((product) => {
    const price = product.querySelector('.produtct-card__price output');
    const quantityInput = product.querySelector('.produtct-card__counter input');

    price.textContent = Number(product.dataset.price * quantityInput.value);
  });
};

const updateHeaderCartCounter = () => {
  const quantityInputs = cartForm.querySelectorAll('.produtct-card__counter input');

  const counterValue = [...quantityInputs].reduce((sum, current) => {
    return sum + Number(current.value);
  }, 0);

  if (counterValue) {
    headerCartCounter.textContent = counterValue;
    headerCartCounter.style.opacity = null;
  } else {
    headerCartCounter.style.opacity = '0';
  }

};

const updateCart = () => {
  const productPrices = document.querySelectorAll('.produtct-card__price output');
  const totalPriceBox = cartForm.querySelector('.cart__total-price');
  const totalPriceValue = totalPriceBox.querySelector('output');

  updateProductPrices();
  updateHeaderCartCounter();

  if (productPrices.length && totalPriceValue) {
    const totalPrice = [...productPrices].reduce((sum, current) => {
      return sum + Number(current.textContent);
    }, 0);

    if (totalPrice) {
      totalPriceValue.textContent = totalPrice;
      totalPriceBox.style.opacity = null;
    } else {
      totalPriceBox.style.opacity = '0';
    }
  }
};

const initCartCalculator = () => {
  if (!headerCartCounter || !cartForm) {
    return;
  }

  const products = cartForm.querySelector('.cart__products');

  updateCart();

  products.addEventListener('change', (evt) => {
    if (evt.target.closest('.produtct-card__counter input')) {
      updateCart();
    }
  });
};

export {initCartCalculator, updateCart};
