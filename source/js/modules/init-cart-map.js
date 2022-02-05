const initCartMap = () => {
  const cartAddress = document.querySelector('#id-cart-address')
  if (!document.querySelector('#cart-map') || !cartAddress) {
    return;
  }

  const init = () => {
    let addressCoords = [60.033185, 30.428607];
    const mapZoom = 16;
    let placemark;

    const updateMap = (address) => {
      ymaps.geocode(address, {
        results: 1,
      }).then((res) => {
        cartMap.geoObjects.add(res.geoObjects.get(0));
        cartMap.geoObjects.remove(placemark);

        placemark = res.geoObjects.get(0);

        cartMap.panTo(placemark.geometry.getCoordinates(), mapZoom, {
          duration: 1000,
        });
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(`Сервер ответил: "${err.message}"`);
      });
    };

    const cartMap = new ymaps.Map('cart-map', {
      center: addressCoords,
      zoom: mapZoom,
    });

    placemark = new ymaps.Placemark(addressCoords);

    cartMap.geoObjects.add(placemark);

    cartAddress.addEventListener('blur', () => {
      updateMap(cartAddress.value);
    });
  };

  ymaps.ready(init);
};

export {initCartMap};
