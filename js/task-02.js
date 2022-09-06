const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listByID = 
document.querySelector(`#ingredients`);

const firstElement = 
document.createElement('li');
firstElement.textContent =(ingredients[0]);
firstElement.classList.add(`item`);

const secondElement = 
document.createElement('li');
secondElement.textContent =(ingredients[1]);
secondElement.classList.add(`item`);

const thirdElement = 
document.createElement('li');
thirdElement.textContent =(ingredients[2]);
thirdElement.classList.add(`item`);

const fourthElement = 
document.createElement('li');
fourthElement.textContent =(ingredients[3]);
fourthElement.classList.add(`item`);

const fifthElement = 
document.createElement('li');
fifthElement.textContent =(ingredients[4]);
firstElement.classList.add(`item`);

const sixthElement = 
document.createElement('li');
sixthElement.textContent =(ingredients[5]);
sixthElement.classList.add(`item`);


listByID.append(firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement);