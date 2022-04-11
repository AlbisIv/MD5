// Task #-4
// car[1].name // Volvo

// Task #-3
// car.sum() // return 3000000EUR

// Task #-2
// car.model.color // returns red

// Task #-1
// fruit[0][1]; // returns 'Apple'

// Task #0
// human.name('Jānis') // returns Jānis

// Tasks #1
// math.sum()()(1,3).sum // return 13

// Task #2
// human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'

// Task #3
// returns powered x with y and sum powered by Z
// math(x, y)()()()()()()()()(z) //


// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it

// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key






// Pirmais uzd.
const sum = (a: number, b: number) => a+b;

console.log(sum(1,2));
console.log(sum(1,10));
console.log(sum(99,1));
console.log("---------------------------------------------------")


// Otrais uzd.

const typeOf = (a: any) => (typeof a);

console.log(typeOf(1));
console.log(typeOf(false));
console.log(typeOf({}));
console.log(typeOf(null));
console.log(typeOf("string"));
console.log(typeOf(["string"]));
console.log("---------------------------------------------------")

// Trešais uzd.

const areEqual = (a: any, b: any) => a===b;

console.log(areEqual(2,3))
console.log(areEqual(3,3))
console.log(areEqual(1,'1'))
console.log(areEqual('10', '10'))
console.log("---------------------------------------------------")

// Ceturtais uzd.
const nthElement = (a: string, n: any) => a.charAt(n-1);

console.log(nthElement('abcd',1))
console.log(nthElement('zyxbwpl',5))
console.log(nthElement('gfedcba',3))
console.log("---------------------------------------------------")

// Piektais uzd.

const removeFirstThree = (a: string) => a.substring(3, a.length);

console.log(removeFirstThree('abcdefg'));
console.log(removeFirstThree('1234'));
console.log(removeFirstThree('fgedcba'));
console.log("---------------------------------------------------")


// Sestais uzd.

const getLastThree = (a: string) => a.substring(a.length-3);
console.log(getLastThree('abcdefg'));
console.log(getLastThree('1234'));
console.log(getLastThree('fgedcba'));
console.log("---------------------------------------------------")


// Septītais uzd.

const getFirstThree = (a: string) => a.substring(0,3);

console.log(getFirstThree('abcdefg'))
console.log(getFirstThree('1234'))
console.log(getFirstThree('fgedcba'))
console.log("---------------------------------------------------")


// Astotais uzd.
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
const getFirstHalf = (a: string) => a.substring(0, a.length/2);

console.log(getFirstHalf("abcdefgh"))
console.log(getFirstHalf("1234"))
console.log(getFirstHalf("gedcba"))
console.log("---------------------------------------------------")


// Devītais uzd.
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const removeLastThree = (a: string) => a.substring(0, a.length-3)
console.log(removeLastThree("abcdefg"))
console.log(removeLastThree("1234"))
console.log(removeLastThree("fgedcba"))
console.log("---------------------------------------------------")

// Desmitais uzd.
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const bPercentFromA = (a:number, b:number) => ((a*b) / 100)
console.log(bPercentFromA(100,50))
console.log(bPercentFromA(10,1))
console.log(bPercentFromA(500,25))
console.log("---------------------------------------------------")


// 11.uzd.
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const calculations = (a:number, b: number,c:number,d:number, e: number,f:number) => (((a+b-c)*d)/e)**f
console.log(calculations(6,5,4,3,2,1))
console.log(calculations(6,2,1,4,2,3))
console.log(calculations(2,3,6,4,2,3))
console.log("---------------------------------------------------")

// 12.uzd
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const isEven = (a: number):boolean => (a % 2 === 0)
console.log(isEven(10))
console.log(isEven(-4))
console.log(isEven(5))
console.log(isEven(-111))
console.log("---------------------------------------------------")

// 13.uzd
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
const asInb = (a: string, b: string): number => {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (a === b.charAt(i)) {
            count++
        }
        
    }
    return count
}
console.log(asInb('m', 'how many times does the character occur in this sentence?'))
console.log(asInb('h', 'how many times does the character occur in this sentence?'))
console.log(asInb('?', 'how many times does the character occur in this sentence?'))
console.log(asInb('z', 'how many times does the character occur in this sentence?'))
console.log("---------------------------------------------------")


// 14.uzd
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWholeNumber = (a: number) => Number.isInteger(a);
console.log(isWholeNumber(4))
console.log(isWholeNumber(1.123))
console.log(isWholeNumber(1048))
console.log(isWholeNumber(10.48))
console.log("---------------------------------------------------")


// 15.uzd
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const divideOrMultiply = (a:number, b: number) => {
    if (a < b){
        return a/b
    } else {
        return a*b
    }
}

console.log(divideOrMultiply(10, 100))
console.log(divideOrMultiply(90, 45))
console.log(divideOrMultiply(8, 20))
console.log(divideOrMultiply(2, 0.5))
console.log("---------------------------------------------------")

// 16.uzd
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatStrings = (a: string, b: string): string => {
    if (a.includes(b)){
        return b.concat(a)
    } else {
        return a.concat(b)
    }
}
console.log(concatStrings('cheese', 'cake'))
console.log(concatStrings('lips', 's'))
console.log(concatStrings('Java', 'script'))
console.log(concatStrings(' think, therefore I am', 'I'))
console.log("---------------------------------------------------")


// 17.uzd
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
const round2nd = (a:number) => Math.round(a * 100) / 100;
console.log(round2nd(2.12397))
console.log(round2nd(3.136))
console.log(round2nd(1.12397))
console.log(round2nd(26.1379))
console.log("---------------------------------------------------")

// 18.uzd
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
const numToArray = (a: number) => a.toString().split("").map(Number)

console.log(numToArray(10))
console.log(numToArray(931))
console.log(numToArray(193278))
console.log("---------------------------------------------------")


// 19.uzd
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
const unscrambleAndJoin = (a:string, b: string) => a.concat(b.split("").reverse().join("")).replace(/[^A-Z]/gi,"")

console.log(unscrambleAndJoin('java', 'tpi%rcs'))
console.log(unscrambleAndJoin('c%ountry', 'edis'))
console.log(unscrambleAndJoin('down', 'nw%ot'))
console.log("---------------------------------------------------")

// 20.uzd !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
// const primeOrNextPrime = (a:number) => {

//     if (a===1)
//     {
//       return false;
//     }
//     else if(a === 2)
//     {
//       return true;
//     }else
//     {
//       for(var x = 2; x < a; x++)
//       {
//         if(a % x === 0)
//         {
//           return false;
//         }
//       }
//       return true;  
//     }
//   }


// 21.uzd
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y


const divisibleOrNextDivisible = (x: number, y:number): number =>{
  let isDivisible = false;
  for (let i = x; isDivisible===false; i++) {
    if(i%y === 0){
      return i;
    }
    
  }
}
console.log(divisibleOrNextDivisible(1,23))
console.log(divisibleOrNextDivisible(23,23))
console.log(divisibleOrNextDivisible(7,3))
console.log(divisibleOrNextDivisible(-5,7))
console.log("---------------------------------------------------")


// 22.uzd
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertbInaReverse = (a: string, b: string) => {
  let resultArr = a.split('');
  let counter = 0;
  for (let index = resultArr.length; index >= 0; index--) {
    if (counter === 3){
      resultArr.splice(index,0,b);
      counter = 0;
    }
    counter += 1;
    
  }
  return resultArr.join("")
}

console.log(insertbInaReverse('1234567','.'));
console.log(insertbInaReverse('abcde','$'));
console.log(insertbInaReverse('zxyzxyzxyzxyzxyz','w'));
console.log("---------------------------------------------------")


// 23.uzd
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const stringASCIIIncrement = (a:string) => {
  let resultArr = a.split('')
  for (let index = 0; index < resultArr.length; index++) { //Iziet cauri visam array, katram burtam no stringa
    resultArr[index] = String.fromCharCode(resultArr[index].charCodeAt(0)+1) //Tekošajam array elementam nolasa ASCII kodu un piešķir tam +1,
    
  }
  return resultArr.join('')
}

console.log(stringASCIIIncrement('bnchmf'))
console.log(stringASCIIIncrement('bgddrd'))
console.log(stringASCIIIncrement('sdrshmf'))
console.log("---------------------------------------------------")


// 24.uzd
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
const nthOfArray = (a: any[], n: number):any => {
  return a[n-1]
}

console.log(nthOfArray([1,2,3,4,5],3))
console.log(nthOfArray([10,9,8,7,6],5))
console.log(nthOfArray([7,2,1,6,3],1))
console.log("---------------------------------------------------")



// 25.uzd
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
const removeFirstThreeFromArray = (a: any[]) => {
  a.splice(0,3)
  return a
}
console.log(removeFirstThreeFromArray([1,2,3,4]))
console.log(removeFirstThreeFromArray([5,4,3,2,1,0]))
console.log(removeFirstThreeFromArray([99,1,1]))
console.log("---------------------------------------------------")

// 26.uzd
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
const extractLastThreeFromArray = (a: any[]) => a.splice(a.length-3,3)
console.log(extractLastThreeFromArray([1,2,3,4]))
console.log(extractLastThreeFromArray([5,4,3,2,1,0]))
console.log(extractLastThreeFromArray([99,1,1]))
console.log("---------------------------------------------------")

// 27.uzd
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
const extractFirstThreeFromArray = (a: any[]) => a.splice(0,3)
console.log(extractFirstThreeFromArray([1,2,3,4]))
console.log(extractFirstThreeFromArray([5,4,3,2,1,0]))
console.log(extractFirstThreeFromArray([99,1,1]))
console.log("---------------------------------------------------")

// 28.uzd
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
const extractLastnFromArray = (a: any[], n: number) => a.splice(a.length-n,n)
console.log(extractLastnFromArray([1, 2, 3, 4, 5], 2))
console.log(extractLastnFromArray([1, 2, 3], 6))
console.log(extractLastnFromArray([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log("---------------------------------------------------")


//29.uzd
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
const cleanaFromb = (a: any[], b: any) => {
  for (let index = 0; index < a.length; index++) {
    if (a[index] === b){
      a.splice(index, 1);
    }
  }
  return a
}
console.log(cleanaFromb([1,2,3], 2))
console.log(cleanaFromb([1,2,'2'], '2'))
console.log(cleanaFromb([false,'2',1], false))
console.log(cleanaFromb([1,2,'2',1], 1))
console.log("---------------------------------------------------")



// 30.uzd
// Write a function that takes an array (a) as argument
// Return the number of elements in a
const lengthOfa = (a: any[]) => a.length


console.log(lengthOfa([1,2,2,4]))
console.log(lengthOfa([9,9,9]))
console.log(lengthOfa([4,3,2,1,0]))
console.log("---------------------------------------------------")


// 31.uzd
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
const negativesIna = (a: number[]) => {
  let count = 0;
  for (let index = 0; index < a.length; index++) {
    if(a[index]<0){
      count++
    }
    
  }
  return count;
}
console.log(negativesIna([1,-2,2,-4]))
console.log(negativesIna([0,9,1]))
console.log(negativesIna([4,-3,2,1,0]))
console.log("---------------------------------------------------")

// 32.uzd
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
const descendingSorta = (a: number[]) => a.sort().reverse()

console.log(descendingSorta([1,3,2]))
console.log(descendingSorta([4,2,3,1]))
console.log("---------------------------------------------------")


// 33.uzd
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
const sortaAlphabetically = (a: string[]) => a.sort()

console.log(sortaAlphabetically(['b', 'c', 'd', 'a']))
console.log(sortaAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w']))
console.log("---------------------------------------------------")


// 34.uzd
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
const averageaValue = (a:number[]) => {
  let sum = 0;
  for (let index = 0; index < a.length; index++) {
    sum += a[index]
  }
  return sum / a.length
}

console.log(averageaValue([10,100,40]))
console.log(averageaValue([10,100,1000]))
console.log(averageaValue([-50,0,50,200]))
console.log("---------------------------------------------------")

// 35.uzd
// Write a function that takes an array of strings as argument
// Return the longest string
const longestStrIna = (a:string[]) => {
  let currentBest = ""
  for (let index = 0; index < a.length; index++) {
    if (a[index].length>currentBest.length) {
      currentBest = a[index]}
    
  }
  return currentBest;
}
console.log(longestStrIna(['help', 'me']))
console.log(longestStrIna(['I', 'need', 'candy']))
console.log("---------------------------------------------------")

// 36.uzd
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
const checkAllElementsEquals = (a: any[]):boolean => {
  let isTrue = true;
  for (let index = 0; index < a.length; index++) {
    
    if(!(a[0]=== a[index])){
      isTrue = false;
    }
    
  }
  return isTrue;
}

console.log(checkAllElementsEquals([true, true, true, true]))
console.log(checkAllElementsEquals(['test', 'test', 'test']))
console.log(checkAllElementsEquals([1,1,1,2]))
console.log(checkAllElementsEquals(['10',10,10,10]))
console.log("---------------------------------------------------")

// 37.uzd
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// const manyArrays (...args: Array[]) => {

// 