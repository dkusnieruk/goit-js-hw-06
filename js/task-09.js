function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getButton = document.querySelector(`button`);
const getText = document.querySelector(`span`);


getButton.addEventListener(`click`, () => {
document.body.style.backgroundColor = getRandomHexColor();
getText.innerHTML = getRandomHexColor();
});

// console.log(getRandomHexColor());