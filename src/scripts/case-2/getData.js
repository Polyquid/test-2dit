const getData = () => {
  const basicItemExample = {
    title: 'Театральное кресло Прайм',
    category: 'Кресла театральные',
    articul: '789-2341',
    img: '../../img/case-2/itemExample.jpg',
    isAvailable: false,
    banner: '',
    price: '6 762'
  };

  const bestSellerItemExample = {
    title: 'Театральное кресло Прайм',
    category: 'Кресла театральные',
    articul: '789-2341',
    img: '/img/case-2/itemExample.jpg',
    isAvailable: true,
    banner: 'best seller',
    price: '6 762'
  };

  const promoItemExample = {
    title: 'Театральное кресло Прайм',
    category: 'Кресла театральные',
    articul: '789-2341',
    img: '/img/case-2/itemExampleDark.jpg',
    isAvailable: true,
    banner: 'promo',
    price: '6 762'
  };

  const noveltyItemExample = {
    title: 'Театральное кресло Прайм',
    category: 'Кресла театральные',
    articul: '789-2341',
    img: '/img/case-2/itemExample.jpg',
    isAvailable: true,
    banner: 'novelty',
    price: '6 762'
  };

  const dataExample = [bestSellerItemExample, promoItemExample, noveltyItemExample];
  dataExample[16] = {};
  return dataExample.fill(basicItemExample, 3);
};

export default getData;
