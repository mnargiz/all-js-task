// 1. Find the minimum element of this array

// let array = [24, 90, 2001, 789, 8, -9];
// console.log(Math.min(...array));



// 2. Find the maximum element of this array

// let array = [24, 90, 2001, 789, 8, -9];
// console.log(Math.max(...array));



// 3. Find the index of the minimum element of this array

// let array = [24, 90, 2001, 789, 8, -9];
// console.log(array.indexOf(Math.min(...array)));




//4. Find the index of the maximum element of this array

// let array = [24, 90, 2001, 789, 8, -9];
// console.log(array.indexOf(Math.max(...array)));




//5. Calculate the sum of array's elements with odd indices

// let array = [24, 90, 2001, 789, 8, -9];
// let n = array.length;
// OddSum(array, n);
// function OddSum(arr, n) {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) {
//             even += array[i];
//         }
//         else {
//             odd += array[i];
//         }

//     }
//     console.log(odd);
// }



//6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array

// let array = [24, 90, 2001, 789, 8, -9];
// let reversed = array.reverse();
// console.log(reversed);




//7. Count the number of odd elements in the array

// let array = [24, 90, 2001, 789, 8, -9];
// const odds = array.filter(number => {
//     return number % 2 == 1 || number % 2 == -1;
// });

// console.log(odds);




//8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
//I can't write




//9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.

// let array = [24, 90, 2001, 789, 8, -9];
// function selectionSort(array) {

//     for (let i = 0; i < array.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[min]) {
//                 min = j;
//             }
//         }
//         if (min != i) {
//             let end = array[i];
//             array[i] = array[min];
//             array[min] = end;
//         }
//     }
//     return array;
// }
// selectionSort(array);
// console.log(array);




//10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.

// let array = [24, 90, 2001, 789, 8, -9];
// function selectionSort(array) {

//     for (let i = 0; i < array.length; i++) {
//         let max = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] > array[max]) {
//                 max = j;
//             }
//         }
//         if (max != i) {
//             let end = array[i];
//             array[i] = array[max];
//             array[max] = end;
//         }
//     }
//     return array;
// }
// selectionSort(array);
// console.log(array);