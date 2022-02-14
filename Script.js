window.alert("Hello from my js file")
var priceTotal = 0
console.log ("Your shopping list is", priceTotal)

//[square brackets are for arrays]//
// 0= Spaguetti, 1= Spaguetti Sauce, 2= F;owers and 3= Chocolate// 1 2 3 
var groceries =  [
"Spaguetti",
"Spaguetti Sauce",
'Flowers',
"Chocolates",  
//ice cream was added later//
"ice Cream",
]
//Reassign values to the list this time with prrices//
groceries = [
   {"item": "Spaguetti", "price":0.94,}
   {"item": "Spaguetti Sauce", "price":2.64,}
   {"item": "Flowers", "price":22.34,}
   {"item": "Cholcolates", "price":7.85,}
   {"item": "Ice Cream", "price" 6.99,}
]
//partner called to add more items to the list//

console.log ("groceries with prices", groceries )
console.log ("time to checkout" )

//go to the list and add up the prices''
// we want a better way than this.... // price total = groceries [o] = groceries  ...//
//use the for loop//

for (let index = 0; index < groceries.length; index++) {
   const element = groceries[index];
   console.log ("buying this item",groceryItem)
   priceTotal = priceTotal + groceryItem

}
console.log ("Please pay", priceTotal)
//Add that grocery to our price total//
