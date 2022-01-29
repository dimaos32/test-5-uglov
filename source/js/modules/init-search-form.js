const initSearchForm = () => {
  const search = document.querySelector('.search-form');

  if (!search) {
    return;
  }

  const searchBtn = search.querySelector('.search-form__btn');
  const searchinput = search.querySelector('.search-form__input input');

  const onSearchBtnClick = () => {
    searchinput.focus();

  };

  const onSearchBtnFocus = () => {
    searchinput.focus();
  };

  const onSearchinputBlur = () => {
    searchinput.value = '';
  };

  searchBtn.addEventListener('click', onSearchBtnClick);
  searchBtn.addEventListener('focus', onSearchBtnFocus);
  searchinput.addEventListener('blur', onSearchinputBlur);
};

export {initSearchForm};
