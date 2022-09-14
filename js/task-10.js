function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getButton = document.querySelectorAll(`button`);

const getInput = document.querySelector(`input`);

const getBoxes = document.querySelector(`#boxes`);



function createDiv() {
  for (let i=0; i < getInput.value; i++){
const solutionDiv= new Array(); 
solutionDiv[i]=document.createElement(`div`);
solutionDiv[i].id= `block`;
solutionDiv[i].style.width = (30 +i*10) + `px`;
solutionDiv[i].style.height= (30+ i*10) + `px`;
solutionDiv[i].style.border= `1px solid black`;
solutionDiv[i].style.backgroundColor = getRandomHexColor();
getBoxes.appendChild(solutionDiv[i]);

}};

getButton[0].addEventListener(`click`, createDiv);

function destroyDiv(){
  const solutionBlock =document.getElementById(`#block`);
  getBoxes.remove(solutionBlock);
};

getButton[1].addEventListener(`click`, destroyDiv);