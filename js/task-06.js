const solutionInput = document.querySelector(`input`);

const desiredLength = solutionInput.attributes[2].value;
 


solutionInput.addEventListener( `blur`, (event) =>{
if (event.currentTarget.value.length === +desiredLength)
{
    event.currentTarget.setAttribute( `class`, `valid`);
   // event.target.classList.add(`validation-input.valid`);

}
else 
{
    event.currentTarget.setAttribute( `class`, `invalid`);
   // event.target.classList.add(`validation-input.invalid`);
}
});





// console.log(solutionInput.attributes[1].value);

// console.log(solutionInput.attributes[2].value);

// console.log(desiredLength);

