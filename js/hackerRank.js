/* PROBLEM 1
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
//
//     Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
//
//     Example
//
// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
*/

function plusMinus(arr){
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    let length = arr.length;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positives++
        } else if (arr[i] < 0 ){
            negatives++
        } else {
            zeroes++
        }
    }
    let fractionOfPositives = (positives/length);
    let fractionOfNegatives = (negatives/length);
    let fractionOfZeroes = (zeroes/length);
            console.log(`Fraction of positives: ${fractionOfPositives.toFixed(6)}`);
            console.log(`Fraction of negatives: ${fractionOfNegatives.toFixed(6)}`);
            console.log(`Fraction of zeroes: ${fractionOfZeroes.toFixed(6)}`);

}

console.log(plusMinus([5, 4, 1, 0, 0, -4, -1, -4]));


/*PROBLEM 2
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//
//     Example
//
// The minimum sum is 1 + 3 + 5 +7 and the maximum sum is  3 + 5 + 7 + 9. The function prints*/


let numbersArray = [1, 35, 6, 34, 45, 13, 2, 46, 11, 31, 78, 99];
let shortNumbersArray = [3, 10, 1, 2, 5]



function miniMaxSum(arr){
    let sortedNumbersArray = arr.sort(function (sortedItem1, sortedItem2){
        return sortedItem1 - sortedItem2;

    })
    console.log(sortedNumbersArray);
    let lowestFourTotal = 0;
    let highestFourTotal = 0;
    for (let i = 0; i < sortedNumbersArray.length; i++){
          if (i <=3 && i >= sortedNumbersArray.length -4){
              highestFourTotal += sortedNumbersArray[i];
              lowestFourTotal += sortedNumbersArray[i];
          } else if(i <= 3){
             lowestFourTotal += sortedNumbersArray[i];
          } else if (i >= sortedNumbersArray.length -4){
              highestFourTotal += sortedNumbersArray[i];
          }
    }
    console.log(`${lowestFourTotal} ${highestFourTotal}`);
}

console.log(miniMaxSum(shortNumbersArray));


console.log(miniMaxSum(numbersArray));