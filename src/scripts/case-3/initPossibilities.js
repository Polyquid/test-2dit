import getData from './getData.js';

const initPossibilities = () => {
  const data = getData();
  const possibilitiesWrapper = document.querySelector('.possibilities__wrapper');

  data.forEach(({ title, description, imgPath }, index) => {
    const possibilitiesElem = document.createElement('div');
    possibilitiesElem.classList.add('possibilities');
    possibilitiesElem.style.backgroundImage = `url(${imgPath})`;

    const possibilitiesOrder = document.createElement('span');
    possibilitiesOrder.classList.add('possibilities__order');
    possibilitiesOrder.textContent = `.0${index + 1}`;

    const possibilitiesTitle = document.createElement('h3');
    possibilitiesTitle.classList.add('possibilities__title');
    possibilitiesTitle.appendChild(possibilitiesOrder);
    possibilitiesTitle.append(title.toUpperCase());

    const possibilitiesDescription = document.createElement('p');
    possibilitiesDescription.classList.add('possibilities__description');
    possibilitiesDescription.textContent = description;

    possibilitiesElem.appendChild(possibilitiesTitle);
    possibilitiesElem.appendChild(possibilitiesDescription);
    possibilitiesWrapper.appendChild(possibilitiesElem);
  });
};

export default initPossibilities;
