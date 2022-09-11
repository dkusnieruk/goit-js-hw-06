let counter = document.querySelector(`#value`);

let counterValue = 0; 

counter.innerHTML = counterValue;

const incrementButton = document.querySelector(`[data-action="increment"]`);
const decrementButton = document.querySelector(`[data-action="decrement"]`);

// console.log(incrementButton);

const incrementAction = () => {
    counterValue++;
    counter.innerHTML=counterValue; 
    // console.log(counterValue); 
};


const decrementAction = () => {
    counterValue--;
    counter.innerHTML=counterValue; 
    // console.log(counterValue); 
};

incrementButton.addEventListener("click", incrementAction);

decrementButton.addEventListener("click", decrementAction);