/*
//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
let A = prompt("enter A:");
let B = prompt("enter B:");
function GetReminder(A, B) {
    let reminder = A % B;
    console.log(`reminder = ${reminder}`);
}
function GetResult(A, B) {
    let result = parseInt(A / B);
    console.log(`result = ${result}`);
}

GetResult(A, B);
GetReminder(A, B);
*/

/*
//2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
let a = prompt("enter the first number:", "enter a")
let b = prompt("enter the second number:", "enter b")
let c = a;
Swap(a,b)
function Swap(a, b){
    a = b;
    b = c;
    console.log(a, b);
}
*/

/*
//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=prompt("enter the first number:","enter c")
solution();
function solution(){
    let x=(c-b)/a;
    console.log(x);
}
*/


/*
//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
PrintResult(a,b)
function PrintResult (a,b){
    if (a>b) {
        console.log(parseFloat(a)+parseFloat(b));
    }
    if (a==b) {
        console.log(a*b);
    }
    if (a<b) {
        console.log(a-b);
    }
    
}
*/

/*
//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
let a = prompt("enter the first number:", "enter a")
let b = prompt("enter the second number:", "enter b")
let c = prompt("enter the first number:", "enter c")
CalcEquation()
function CalcEquation() {
    let discriminant = b ** 2 - 4 * a * c;
    let root1;
    let root2;
    if (discriminant < 0) {
        console.log("no real roots")
    }
    else if (discriminant == 0) {
        root1 = -b / (2 * a)
        console.log("The root is", root1)
    }
    else if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        console.log("First root is", root1)
        console.log("second root is", root2)
    }
}
*/

//6. The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
/*
let number=prompt("enter  number:");
let right=number%10;
let left=parseInt(number/10);
let leftWithLetters="";

function literalRepresentation () {
    
    if (number<20) {
        if (number==11) {
         console.log("Eleven");
     }
     else if (number==12) {
          console.log("Twelve");
     }
     else if (number==13) {
          console.log("Thirteen");
     }
     else if (number==14) {
          console.log("Fourteen");
     }
     else if (number==15) {
          console.log("Fiveteen");
     }
     else if (number==16) {
          console.log("SixTeen");
     }
     else if (number==17) {
          console.log("Seventeen");
     }
     else if (number==18) {
          console.log("Eighteen");
     }
     else   {
          console.log("nineteen");
     }
     }
     else{
     switch (left) {
         case 2:
             leftWithLetters="twenty";
             break;
               case 3:
             leftWithLetters="thirty";
             break;
              case 4:
             leftWithLetters="forty";
             break;
              case 5:
             leftWithLetters="fivety";
             break;
              case 6:
             leftWithLetters="sixty";
             break;
              case 7:
             leftWithLetters="seventy";
             break;
              case 8:
             leftWithLetters="eighty";
             break;
              case 9:
             leftWithLetters="ninety";
             break;
      
      
     }
     switch (right) {
            case 0:
            console.log(leftWithLetters);
             break;
         case 1:
            console.log(leftWithLetters+ " one");
             break;
      
        case 2:
            console.log(leftWithLetters+ " two");
             break;
              case 3:
            console.log(leftWithLetters+ " three");
             break;
              case 4:
            console.log(leftWithLetters+ " four");
             break;
              case 5:
            console.log(leftWithLetters+ " five");
             break;
              case 6:
            console.log(leftWithLetters+ " six");
             break;
              case 7:
            console.log(leftWithLetters+ " seven");
             break;
              case 8:
            console.log(leftWithLetters+ " eight");
             break;
              case 9:
            console.log(leftWithLetters+ " nine");
             break;
     }
     }
     
}
literalRepresentation();
*/

/*
//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)
  let x=prompt("enter X:");
  let y=prompt("enter Y:");
   let r=prompt("enter Radius:");
   let d=Math.sqrt((x**2)+(y**2));
   function isInside() {
    if (d<r) {
        console.log("the point is inside the circle");
    }
    else if (d===r) {
        console.log("the point is on the circle");
    }
    else{
        console.log("the point is outside the circle");
    }
    
   }
   isInside();
*/
 





/*
// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
let A = prompt("enter A:")
DivisibleNumbers(Number)
function DivisibleNumbers(A) {
    for (let i = 1; i < 1000; i++) {
        if (i % A == 0) {
            console.log(i)
        }
    }
}
*/

/*
//2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
let A = prompt("enter A:")
function FindNumber(p) {
for(let i=0; i<p; i++){
    if(i**2<p){
        console.log(i)
    }
}

}
FindNumber(A);
*/


/*
//3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
let A = +prompt("enter A:")
LargestDivisor(A)
function LargestDivisor(A) {
    let i = 0;
    for (let i = 1; i < A; i++) {
        if (A % i == 0) {
            largestdivisor = i;
        }
    }
    console.log(largestdivisor);
}
*/

/*
//4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
const A =prompt("Enter A: ");
const B =prompt("Enter B: ");
FindSum(A,B)
function FindSum(A,B) {
if (B<A) {
  let sum=0;
  for (let i = B; i < A; i++) {
   if (i%7==0) {
       sum=sum+i;
   }

  }
console.log(sum);
}
else{
    console.log("something went wrong");
}
    
}
*/



/*
//5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
let number = prompt("Please enter number");
console.log(NthFibonacciNumber(number));
function NthFibonacciNumber(number) {
    if (number <= 1) {
        return number;
    }
    return NthFibonacciNumber(number - 1) + NthFibonacciNumber(number - 2);
}
*/

/*
//6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
let a = prompt('Please enter the value of a');
let b = prompt('Please enter the value of b');
GetCommonDivisor(a, b)
function GetCommonDivisor(a, b) {
    let remainder;
    while ((a % b) > 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    } if (a % b == 0) {
        console.log(b)
    }
    else {
        console.log('they have no greatest common divisor.')
    }
}
*/

/*
//7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
let number = +prompt('Please enter the number');
FindMirrorImg(number)
function FindMirrorImg(number) {
    let remainder;
    let mirror = 0;
    while (number > 0) {
        remainder = number % 10;
        mirror = mirror * 10 + remainder;
        number = parseInt(number / 10)
    }
    console.log(mirror);
}
*/