const breakpoint = window.matchMedia('(min-width: 1024px)');

const initMobileMenu = () => {
  const mainNav = document.querySelector('.main-nav');
  const menuToggle = document.querySelector('.header__menu-toggle');

  if (!mainNav || !menuToggle) {
    return;
  }
  const mainNavOverlay = mainNav.querySelector('.main-nav__overlay');

  const onEscPress = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();

      closeMenu();
    }
  };

  const openMenu = () => {
    mainNav.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.ariaPressed = true;

    window.scrollLock.disableScrolling();

    document.addEventListener('keydown', onEscPress);
  };

  const closeMenu = () => {
    mainNav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.ariaPressed = false;

    window.scrollLock.enableScrolling();

    document.removeEventListener('keydown', onEscPress);
  };

  const onMainNavToggleClick = () => {
    if (mainNav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const onMainNavOverlayClick = () => {
    if (mainNav.classList.contains('is-open')) {
      closeMenu();
    }
  };

  const breakpointChecker = () => {
    mainNav.classList.add('no-transition');

    setTimeout(() => {
      mainNav.classList.remove('no-transition');
    }, 10);

    if (breakpoint.matches && mainNav.classList.contains('is-open')) {
      closeMenu();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  menuToggle.addEventListener('click', onMainNavToggleClick);
  mainNavOverlay.addEventListener('click', onMainNavOverlayClick);
};

export {initMobileMenu};
