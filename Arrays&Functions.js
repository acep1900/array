const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}


/*In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.

Underneath the function call, log concept to the console to check if this reassignment mutated the array.*/

changeArr(concept);
console.log(concept);

/*Let’s double check what happens if we mutate an array using a built-in method inside a function.

Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.*/

const removeElement = newArr =>{
  newArr.pop();
};

/*Call removeElement() with an argument of concept.*/

removeElement(concept)
/*After calling removeElement(concept), check the value of concept by logging it to console.

Notice that in both cases, the change to the array was maintained outside of the function!*/
console.log(concept);