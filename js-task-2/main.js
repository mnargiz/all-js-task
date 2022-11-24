/*
//1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
let A=prompt("enter A:")
for(let i=1; i<1000; i++){
    if(i%A==0){
        console.log(i)
    }
}
*/


// //2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// let A=prompt("enter A:")
// for(let i=0; i<A; i++){
//     if(i**2<A){
//         console.log(i)
//     }
// }


/*
//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
let A=+prompt("enter A:")
let i=0;
for(let i=1; i<A; i++){
    if(A%i==0){
       largestdivisor=i;
    }
}
console.log(largestdivisor);
*/



//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
/*
const a = parseInt(prompt("Enter the value of a"));
const b = parseInt(prompt("Enter the value of b"));
 
let sum = 0;
 
if (a < b) {
    for (let index = a + 1; index < b; index++) {
        if (index % 7 == 0) {
            sum += index
        }
    }
} else if (b < a) {
    for (let index = b + 1; index < a; index++) {
        if (index % 7 == 0) {
            sum += index
        }
    }
}
console.log(sum)
*/



/*
//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to

const N = prompt("Please enter the value of N");
let n1=0, n2=1, F;
for (let index = 1; index <=N; index++) {
    console.log('The Fibonacci number with the sequence number '+ index + ' is', n1)
    F= (n1+n2);
    n1=n2
    n2=F
}
*/


/*
//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. 

//I wrote this, but to be honest, I didn't understand the logic

let a = prompt('Please enter the value of a');
let b = prompt('Please enter the value of b');
let remainder;
while ((a % b) > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
} if (a % b == 0) {
    console.log(b)
}
else{
    console.log('they have no greatest common divisor.')
}
*/

/*
//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case

let number = +prompt('Please enter the number');
let remainder;
let mirror = 0;
while (number > 0) {
    remainder = number % 10;
    mirror = mirror * 10 + remainder;
    number = parseInt(number / 10)
}
console.log(mirror);
*/
