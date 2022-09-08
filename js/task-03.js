const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const solution = document.querySelector(`.gallery`);


images.forEach( el => {
let photo = document.createElement(`li`);
photo.style.margin = `20px`;
photo.style.listStyle = `none`;
let picture  = document.createElement(`img`);
picture.style.width=`100%`;
picture.style.height=`100%`;
picture.src = el.url;
picture.alt = el.alt;

solution.append(photo);
photo.appendChild(picture);
});