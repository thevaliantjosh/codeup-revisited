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

// console.log(plusMinus([5, 4, 1, 0, 0, -4, -1, -4]));


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
//
//
// console.log(miniMaxSum(numbersArray));

/*PROBLEM 3
* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

* s = '12:01:00PM
Return: '12:01:00'.

* s = '12:01:00AM'
Return: '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour*/

function timeConversion(time){
    let twelve = parseInt("12");
    let hours = parseInt(time.slice(0, 2))
    let minutes = time.slice(3, 5);
    let seconds = time.slice(6, 8);
    let afterMidnight = time.substring(8, 10) === "AM";
    let afterNoon = time.substring(8, 10) === "PM";
    if (parseInt(time) === twelve && afterMidnight){
        let midnight = hours - twelve;
        return (`${midnight}0:${minutes}:${seconds}`);
    } else if (parseInt(time) === twelve && afterNoon ) {
        return `${hours}:${minutes}:${seconds}`
    } else if (afterMidnight){
        return `0${hours}:${minutes}:${seconds}`
    } else {
       return (`${(hours + twelve)}:${minutes}:${seconds}`);
    }
}
//
// console.log(timeConversion("01:00:00AM"));//good
// console.log(timeConversion("12:00:00AM"));//good
// console.log(timeConversion("02:35:45AM"));//good
// console.log(timeConversion("12:35:45PM"));//good

console.log(timeConversion("06:40:03AM"));

/*Finding the Median of an array*/

function medianOfArray(arr){
    //creating a variable that sorts the passed in array in ascending order
    let sortedArray = arr.sort(function(sortedItem1, sortedItem2){
        return sortedItem1 - sortedItem2;
    });
    console.log(sortedArray);//this returns the array sorted;
    //need to find the median by taking the number of items in the array adding 1 then dividing by 2 to get the index

    let indexOfMedian = ((sortedArray.length + 1) / 2);
    console.log("The Index to find the median of the Array is " + indexOfMedian);

    return sortedArray.at(indexOfMedian -1);
}


let newNumbersArray = [4, 19, 3, 32, 11];
let newNumbersArray2 = [5, 3, 1, 82, 56, 99, 32];
console.log("The median is: " + medianOfArray( newNumbersArray));
console.log("The median is: " + medianOfArray(newNumbersArray2));
