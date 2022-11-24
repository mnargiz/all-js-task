/*
//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
let a=prompt("enter the first number:","a")
let b=prompt("enter the second number:","b")
let result=a/b
let remainder=a%b
console.log(result, remainder)
*/


/*
//2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=a;
a=b;
b=c;
console.log(a,b);
*/


/*
//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=prompt("enter the first number:","enter c")
if (a!=0 && b!=0 && c!=0){
    let x=(c-b)/a;
    console.log(x);
    }
*/


/*
//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
if (a>b) {
    let result=(parseFloat(a)+parseFloat(b));
    console.log(result);
}
if (a==b) {
    let result=a*b
    console.log(result);
}
if (a<b) {
    let result=a-b;
    console.log(result);
}

*/

/*
//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
let a=prompt("enter the first number:","enter a")
let b=prompt("enter the second number:","enter b")
let c=prompt("enter the first number:","enter c")
let discriminant=b**2-4*a*c;
let root1;
let root2;
if(discriminant<0){
    console.log("no real roots")
}
else if(discriminant==0){
    root1=-b/(2*a)
    console.log("The root is", root1)
}
else if(discriminant>0){
    root1=(-b+Math.sqrt(discriminant))/(2*a)
    root2=(-b-Math.sqrt(discriminant))/(2*a)
    console.log("First root is", root1)
    console.log("second root is", root2)
}
*/





//6. The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".

/*
let number=prompt("enter  number:");
let right=number%10;
let left=parseInt(number/10);
 
let leftWithLetters="";
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
*/



//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)

//   let x=prompt("enter X:");
//   let y=prompt("enter Y:");
//    let r=prompt("enter Radius:");
//    let d=Math.sqrt((x**2)+(y**2));
//    if (d<r) {
//        console.log("the point is inside the circle");
//    }
//    else if (d===r) {
//        console.log("the point is on the circle");
//    }
//    else{
//        console.log("the point is outside the circle");
//    }
