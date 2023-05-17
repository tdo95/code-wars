//Grasshopper - Check for factor

//https://www.codewars.com/kata/55cbc3586671f6aa070000fb/solutions/javascript

/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

// factor [int] , base [int]
// return boolean

function determineFactor(base, factor) {
    // //determine if factor modulus base has remainder
    // const remainder = base % factor;
    // console.log(remainder)
    // //if it does have a remainder, return false, else true
    // if (remainder === 0) return true;
    // else return false;
  
    return base % factor === 0;
  }
  
  console.log(determineFactor(5,3)) //false
  console.log(determineFactor(5,1)) //true
  console.log(determineFactor(3,0)) //false