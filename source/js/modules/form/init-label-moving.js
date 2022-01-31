const checkInputValues = (input, label) => {
  if (label) {
    if (input.value.length) {
      label.classList.add('is-moved');
    } else {
      label.classList.remove('is-moved');
    }
  }
};

const initLabelMoving = () => {
  const inputs = document.querySelectorAll('.custom-input');
  const textareas = document.querySelectorAll('.custom-textarea');

  if (inputs.length) {
    inputs.forEach((el) => {
      const elInput = el.querySelector('input');
      const elLabel = el.querySelector('.custom-input__label');

      elInput.addEventListener('input', () => {
        checkInputValues(elInput, elLabel);
      });

      checkInputValues(elInput, elLabel);
    });
  }

  if (textareas.length) {
    textareas.forEach((el) => {
      const elTextarea = el.querySelector('textarea');
      const elLabel = el.querySelector('.custom-textarea__label');

      elTextarea.addEventListener('input', () => {
        checkInputValues(elTextarea, elLabel);
      });

      checkInputValues(elTextarea, elLabel);
    });
  }
};

export {initLabelMoving};
