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

/*PROBLEM 4:
Finding the Median of an array*/

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

/*Problem 5
* Given an array of integers where all elements occur twice, find the unique element*/

let arrayOfIntegersOneUnique = [1, 1, 3, 5, 6, 3, 6];


//Method 1: Get Unique Values using a For loop, this will give me one of each unique vale, what I want is the only element that is not duplicated in the array.


// function findUniqueValue(arr){
//     //an empty array to store unique values we find in the array
//     let uniqueValues = [];
//     //a counter to be used in the for loop
//     let count = 0;
//     //a variable to be set to true of false if the element is unique or not
//     let start = false;
//
//     for(let i = 0; i < arr.length; i++){
//
//         for(let j = 0; j < uniqueValues.length; j++){
//             if (arr[i] === uniqueValues[j]){
//                 start = true;
//
//             }
//         }
//
//         count++;
//         if (count === 1 && start === false){
//             uniqueValues.push(arr[i]);
//
//         }
//         start = false;
//         count = 0;
//
//     }
//     console.log(uniqueValues);
//
// }
//
// console.log(findUniqueValue(arrayOfIntegersOneUnique));

/*Method 2. Using the filter method
* The filter() method creates a new array filled with elements that pass a test provided by a function
* The filter() method does not execute the function for empty elements
* the filter() method does not change the original array
* We will use the filter() method, and indexOf() mehods to filter out the non-unique values*/

//Example from geeksforgeeeks.org

let newArray = [1, 2, 2, 4, 5, 6, 6, 7, 8, 8, 8];
console.log("Before filtering non unique values: " + newArray);

let unique = newArray.filter((value, index, self)=>{
    return self.indexOf(value) === self.lastIndexOf(value);
})

console.log("After filtering non unique values: " + unique);



function findUniqueValue(arr){
    let uniqueValue = arr.filter((value, index, self)=> {
        return self.indexOf(value) === self.lastIndexOf(value)
    });
   return uniqueValue;
}





console.log(findUniqueValue(arrayOfIntegersOneUnique));

/*PROBLEM 6*/

/*Given a square calculate the absolute difference between the sums of its diagonals
* ex.
* 123
* 456
* 989
*
* diagonal 1: 1 + 5 + 9 =15
* diagonal 2: 3 + 5 + 9 = 17
* absolute difference [15 - 17] = 2
*
* parameter
* int arr[n][m]
*
* return
* int: the absolute diagonal difference
*
* */

/*NOTES ON TWO-DIMENSIONAL ARRAYS*/

/*need to figure out how to create a two-dimensional array
   *
   * A 2D array is a colletion of items taht share a common name
   * name and they are organized a s a matrix in the form or rows and columns.
   * the 2d array is an array of arrays, so we create an array of one-dimensianoal array objects.
   *
   * example
   *
   * 1)Create an array
   * let normalArray = new Array(2);
   *
   * document.write("Creating 2D array <br>");
   *
   * 2)Loop to create 2D array using normal arrays
   * for (let i = 0; i < normalArray.length: i++){
   *    normalArray[i] = new Array(2);
   * }
   *
   *
   * let h = 0;
   *
   * 3)Loop to initialized 2d array elements
   *
   * for(let i = 0; i < 2; i++) {
   *    for (let j = 0; j < 2; j++) {
   *        normalArray[i][j] = h++;
   *    }
   * }
   *
   *
   * 4)Loop to display the elements of 2D array.
   *
   * for(let i = 0; i < 2; i++){
   *    for(let j = 0; j < 2; j++){
   *        document.write(normalArray[i][j] + " ");
   *    }
   *    document.write("<br>");
   * }
   * */

//Attempt 1;
// function diagonalDifference(arr){
//     /*Loop to create 2D array using 1D array*/
//    for(let i = 0; i < arr.length; i++){
//        arr[i] = [];
//    }
//
//    let h = 0;
//
//
//    //Loop to initialize 2D array elements
//     for(let i = 0; i < 3; i++){
//         for (let j = 0; j < 3; j++){
//             arr[i][j] = h++
//         }
//     }
//
//     //Loop to display the elements of 2D array
//
//     for (let i = 0; i < 3; i++){
//         for (let j = 0; j < 3; j++){
//             console.log(arr[i]);
//         }
//         // console.log("\n");
//     }
//
//
// }


//My Custom solution because 2D arrays are confusing

function diagonalDifference(arr){
    //slicing out every 3 numbers and putting them in their own array
    let row1 = arr.slice(0, 3);
    let row2 = arr.slice(3, 6);
    let row3 = arr.slice(6, 10);

    //Forming the grid by using the join method, which creates a string joined on an empty space
    //Lines created with + "\n"


    let grid = row1.join(" ")+ "\n" + row2.join(" ") +  "\n" + row3.join(" ");

    console.log(typeof(grid));
    console.log(grid.length);

    //looping through the original array and adding the values of the 1st[0], 5th[4] and 9th[8] for diagonal 1
    //and will need to do the same with the 3rd[2], 5th[4], and 7th[6] for diagonal two;
    //Setting Variable for left to right diagonal
    let diagonalOne = 0;
    //Setting Variable for right to left diagonal
    let diagonalTwo = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            diagonalOne += arr[i];
        } else if (i === 2){
            diagonalTwo += arr[i];
        } else if (i === 4){
            diagonalOne += arr[i];
            diagonalTwo += arr[i];
        } else if (i === 6){
            diagonalTwo += arr[i];
        } else if (i === 8){
            diagonalOne += arr[i];
        }

    }

    let diagonalDifference = diagonalTwo - diagonalOne;
    console.log("The Number Matrix: " + "\n" + grid);
    console.log("The sum of Diagonal 1 is: " + diagonalOne);
    console.log("The sum of Diagonal 2 is: " + diagonalTwo);
    console.log("The Diagonal differences is: " + diagonalDifference)
}

//Testing hte diagonalDifference output


let matrixMe = [1, 3, 5, 1, 4, 8, 3, 5, 6];
console.log(diagonalDifference(matrixMe))