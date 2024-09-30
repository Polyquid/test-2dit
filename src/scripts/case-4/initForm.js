import { Maskito } from '@maskito/core';

const maskitoOptions = {
  mask: [
    '+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/
  ]
};

// TODO: добавить валидацию данных

const initForm = () => {
  const formElem = document.querySelector('.form');
  formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = [
      `username: ${formData.get('username')}`, `phone: ${formData.get('phoneNumber')}`, `email: ${formData.get('email')}`
    ];
    alert(data.join('\n'));
  });

  const phoneInput = document.querySelector('.form__input[name="phoneNumber"]');
  new Maskito(phoneInput, maskitoOptions);
};

export default initForm;
