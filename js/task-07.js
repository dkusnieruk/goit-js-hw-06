const inputValue = document.querySelector(`input`);

const textValue = document.querySelector(`#text`);

inputValue.addEventListener(`input`, (element) => {
textValue.style.fontSize= element.target.value + `px`;
});

console.log(textValue);