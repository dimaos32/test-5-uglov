import {iosVhFix} from './utils/ios-vh-fix';

import {initMobileMenu} from './modules/init-mobile-menu';
import {initSearchForm} from './modules/init-search-form';
import {initLabelMoving} from './modules/form/init-label-moving';
import {initCartCalculator} from './modules/init-cart-calculator';

import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initAutoResizeTextarea} from './modules/form/auto-resize-textarea';
import {removeNoTransition} from './modules/remove-no-transition';
import {initCartProductCounter} from './modules/init-cart-product-counter';
import {initCartMap} from './modules/init-cart-map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initMobileMenu();
  initSearchForm();
  initLabelMoving();
  initCartCalculator();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initCustomSelect();
    initFormValidate();
    initAutoResizeTextarea();
    removeNoTransition();
    initCartProductCounter();
    initCartMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
