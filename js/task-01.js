const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ` + categories.length);
categories.forEach(categories => {
    console.log(`Category : ` + categories.firstElementChild.textContent);
    console.log(`Elements : ` + categories.getElementsByTagName(`li`).length );
   
    
});

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

// const solution = 
// document.querySelectorAll(`li.item`);

