const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ` + categories.length);

// const firstName =
// document.querySelectorAll(`h2`);
// console.log(`Category :` + firstName[0].textContent);
// const numberElements = 
// document.querySelectorAll(`ul`);
// console.log (`Elements :` + numberElements[1].children.length );



// const secondtName =
// console.log(`Category :` + firstName[1].textContent);
// console.log (`Elements :` + numberElements[2].children.length );

// const thirdName =
// console.log(`Category :` + firstName[2].textContent);
// console.log (`Elements :` + numberElements[3].children.length );

const solution = 
document.querySelectorAll(`li.item`);

solution.forEach(solution => {
    console.log(`Category : ` + solution.firstElementChild.textContent);
    console.log(`Elements : ` + solution.getElementsByTagName(`li`).length );
   
    
});