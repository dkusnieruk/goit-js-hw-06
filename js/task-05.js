const textInput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");
const anonymous = "Anonymous";

textInput.addEventListener("input", (event) => {
    if (event.target.value === "" ) {
        textOutput.textContent = anonymous;
    } else 
    {textOutput.textContent = event.currentTarget.value;}
  });

 