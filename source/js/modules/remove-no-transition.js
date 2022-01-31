const removeNoTransition = () => {
  const items = document.querySelectorAll('.no-transition');

  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    item.classList.remove('no-transition');
  });
};

export {removeNoTransition};
