const inputValue = document.querySelector(`input`);

const textValue = document.querySelector(`#text`);

inputValue.addEventListener(`input`, (element) => {
textValue.style.fontSize= element.currentTarget.value + `px`;
});

