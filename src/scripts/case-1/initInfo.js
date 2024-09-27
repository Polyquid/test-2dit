import getData from './getData.js';

const initInfo = () => {
  const { title, description } = getData();
  const infoElem = document.querySelector('.info__text');

  const titleElem = document.createElement('h2');
  titleElem.classList.add('info__title');
  titleElem.textContent = title;
  infoElem.appendChild(titleElem);

  description.forEach((text) => {
    const descriptionElem = document.createElement('p');
    descriptionElem.classList.add('info__description');
    descriptionElem.textContent = text;
    infoElem.appendChild(descriptionElem);
  });
};

export default initInfo;
