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

solution.setAttribute(`style`, `display:flex; flex-direction:column; list-style:none; `)

images.map(function(element){
    return solution.insertAdjacentHTML(`afterbegin`, 
    `<li>
    <img src =${element.url} alt=${element.alt} class='klasa'>
    <img>
    </li>`);
})

// images.forEach( el => {
// let photo = document.createElement(`li`);
// photo.style.margin = `20px`;
// photo.style.listStyle = `none`;
// let picture  = document.createElement(`img`);
// picture.style.width=`50%`;
// picture.style.height=`50%`;
// picture.src = el.url;
// picture.alt = el.alt;

// solution.append(photo);
// //photo.appendChild(picture);
// photo.insertAdjacentElement(`afterbegin`, picture);
// });

// const markup = images
//   .map((zdjecie) => `<li><img class='klasa' src= ${zdjecie.url} alt= ${zdjecie.alt}></img></li>`)
//   .join('');
  

// solution.insertAdjacentHTML('afterbegin', markup);

const stylist = document.querySelectorAll(`.klasa`);
stylist.forEach( el => {
  el.style.width=`50%`;
  el.style.height=`50%`;
  el.style.margin=`20px`;

  
});
// for ( el=0, el< klasy.length, el++) {
//  el.setAttribute(`style`, `width=50%; height=50%;`)
// };
