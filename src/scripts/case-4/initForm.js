import { Maskito } from '@maskito/core';

const maskitoOptions = {
  mask: [
    '+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/
  ]
};

const validation = (formData) => {
  const username = formData.get('username');
  const phone = formData.get('phoneNumber');
  const email = formData.get('email');

  return username.length > 0 &&
    phone.length === 16 &&
    email.includes('@');
};

const initForm = () => {
  const formElem = document.querySelector('.form');
  formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (validation(formData)) {
      const data = [
        `username: ${formData.get('username')}`, `phone: ${formData.get('phoneNumber')}`, `email: ${formData.get('email')}`
      ];
      fetch('url', {
        method: 'POST',
        body: data.join('\n')
      })
        .then((res) => res.json())
        .then(() => alert('Запрос выполнен'))
        .catch(() => alert('Ошибка выполнения запроса'));
    } else {
      alert('Данные не валидны');
    }
  });

  const phoneInput = document.querySelector('.form__input[name="phoneNumber"]');
  new Maskito(phoneInput, maskitoOptions);
};

export default initForm;
