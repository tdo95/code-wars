/*

Sum of pairs

https://www.codewars.com/kata/54d81488b981293527000c8f/javascript

INSTRUCTIONS
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.


*/

//SOLUTION
function sumPairs(ints, s) {
  
    let uniques = Array.from(new Set(ints));
    let pairs = [];
    
    for (let i = 0; i < uniques.length; i++) {
      let x = uniques[i];
      if (x + x === s && ints.indexOf(x) !== ints.lastIndexOf(x)) {
        pairs.push([x, x]);
      } 
      for (let j = i + 1; j < uniques.length; j++) {
        let y = uniques[j];
        if (x + y === s) pairs.push([x, y])
      }
    }
    
    let closest = pairs[0];
    pairs.forEach(item => {
      if(ints.lastIndexOf(item[1]) < ints.lastIndexOf(closest[1])) closest = item;
      
    })
    
    return closest;
  
  }