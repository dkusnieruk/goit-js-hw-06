function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getButton = document.querySelectorAll(`button`)
const createBox = document.querySelector(`#boxes`);

createBox.addEventListener(`click`, (event)=>{
  createBox.createElement(`div`);
})


console.log(createBox);
