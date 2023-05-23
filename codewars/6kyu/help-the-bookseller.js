/*
Help the bookseller !

https://www.codewars.com/kata/54dc6f5a224c26032800005c/javascript

INSTRUCTIONS

A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

Notes:
In the result codes and their values are in the same order as in M.
See "Samples Tests" for the return.

*/

//SOLUTION

//sum books of each catagory in a list
//input => list of catagories[arr], list of book copies [arr]
//output => descripton of num of books[str]

function sumBooksInCatagory(copies, catagories) {
    //either array is empty return empty string
    if (!copies.length || !catagories.length) return ""
    //Get total books in each catagory
    const totalPerCatagory = copies.reduce((total, copy) => {
      const [code, numOfBooks] = copy.split(' ')
      if (total[code[0]]) total[code[0]] += +numOfBooks
      else total[code[0]] = +numOfBooks
      return total
    }, {})
    
    //Present totals as a formatted string
    return catagories.map(catagory => `(${catagory} : ${totalPerCatagory[catagory] ? totalPerCatagory[catagory] : 0})` 
    ).join(' - ')
    
  }
  
  console.log(sumBooksInCatagory(['BDHY 20'], ['A', 'C'])) //(A : 0) - (C : 0)
  console.log(sumBooksInCatagory(['BDHY 20', 'CHUIS 50', 'CHSKJH 90'], ['A', 'C'])) //(A : 0) - (C : 140)
  console.log(sumBooksInCatagory([], ['A', 'C'])) //''