/*
Holiday VIII - Duty Free

https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/javascript

INSTRUCTIONS
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.
*/

//SOLUTION

//how many bottle should we buy to cover price of our holiday
//input -> bottlePrice [int], discount (percentage) [int], holidayCost [int]
//output -> AmountofBottle [int], rounded down

function calculateAmountOfBottles(bottlePrice, discount, holidayCost) {
    // //determine the amount being saved per bottle
    // const amountSavedPerBottle = bottlePrice * (discount / 100)
    
    // //determine how many bottles add up to holiday price
    // return holidayCost / amountSavedPerBottle
    return Math.floor(holidayCost / (bottlePrice * (discount / 100)))
  }
  
  console.log(calculateAmountOfBottles(0, 0, 1000)) //0
  console.log(calculateAmountOfBottles(10, 10, 0)) //0
  console.log(calculateAmountOfBottles(10, 20, 1000)) //500