const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

/*Use the .shift() method to remove the first item from the array groceryList.

Log the new groceryList to the console.*/
groceryList.shift();
console.log(groceryList);

/*Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list.

After calling .unshift() on groceryList, log groceryList to the console.

You may wish to delete the console.log() statement from the previous step.*/

groceryList.unshift('popcorn');
console.log(groceryList);
/*ou’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.

Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.

Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.*/
/*After calling .slice() on groceryList, log the grocery list to the console one more time.

Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! 
You can confirm this in the link in the previous step.*/

console.log(groceryList.slice(1,4));

console.log(groceryList);


/*Let’s find the index of a particular element in groceryList using .indexOf().

Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.)

Read about .indexOf() in Docs.*/

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);