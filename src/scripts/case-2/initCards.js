import getData from './getData.js';

const bannerMap = {
  'best seller': {
    class: 'banner_best-seller',
    alt: 'Хит продаж',
    src: '/icons/case-2/star.svg',
    text: 'ХИТ ПРОДАЖ'
  },
  promo: {
    class: 'banner_promo',
    alt: 'Акция',
    src: '/icons/case-2/promo.svg',
    text: 'АКЦИЯ'
  },
  novelty: {
    class: 'banner_novelty',
    alt: 'Новинка',
    src: '/icons/case-2/novelty.svg',
    text: 'НОВИНКА'
  }
};

const initCards = () => {
  const data = getData();
  const cardWrapper = document.querySelector('.card__wrapper');
  data.forEach((cardData) => {
    const cardElem = document.createElement('div');
    cardElem.classList.add('card');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card__info');

    const cardImageWrapper = document.createElement('div');
    cardImageWrapper.classList.add('card__img-wrapper');

    if (cardData.banner) {
      const banner = document.createElement('div');
      banner.classList.add('banner', bannerMap[cardData.banner].class);

      const icon = document.createElement('img');
      icon.classList.add('banner__icon');
      icon.setAttribute('alt', bannerMap[cardData.banner].alt);
      icon.setAttribute('src', bannerMap[cardData.banner].src);

      const bannerText = document.createElement('p');
      bannerText.classList.add('banner__text');
      bannerText.textContent = bannerMap[cardData.banner].text;

      banner.appendChild(icon);
      banner.appendChild(bannerText);
      cardImageWrapper.appendChild(banner);
    }

    if (cardData.isAvailable) {
      const banner = document.createElement('div');
      banner.classList.add('banner-available');

      const icon = document.createElement('img');
      icon.classList.add('banner-available__icon');
      icon.setAttribute('alt', 'В наличии');
      icon.setAttribute('src', '/icons/case-2/done.svg');

      const bannerText = document.createElement('p');
      bannerText.classList.add('banner-available__text');
      bannerText.textContent = 'В наличии';

      banner.appendChild(icon);
      banner.appendChild(bannerText);
      cardImageWrapper.appendChild(banner);
    }

    const cardImage = document.createElement('img');
    cardImage.classList.add('card__img');
    cardImage.setAttribute('src', cardData.img);
    cardImage.setAttribute('alt', '3д модель кресла');
    cardImageWrapper.appendChild(cardImage);

    const cardCategory = document.createElement('p');
    cardCategory.classList.add('card__category');
    cardCategory.textContent = cardData.category;

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = cardData.title;

    const cardArticul = document.createElement('p');
    cardArticul.classList.add('card__articul');
    cardArticul.textContent = 'Артикул: ';
    const cardArticulName = document.createElement('span');
    cardArticulName.classList.add('card__articul-value');
    cardArticulName.textContent = cardData.articul;
    cardArticul.appendChild(cardArticulName);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card__price');
    cardPrice.textContent = 'от: ';
    const cardPriceValue = document.createElement('span');
    cardPriceValue.classList.add('card__price-value');
    cardPriceValue.textContent = cardData.price;
    cardPrice.appendChild(cardPriceValue);
    cardPrice.append(' Р');

    cardElem.appendChild(cardImageWrapper);
    cardInfo.appendChild(cardCategory);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardArticul);
    cardInfo.appendChild(cardPrice);
    cardElem.appendChild(cardInfo);

    cardWrapper.appendChild(cardElem);
  });
};

export default initCards;
