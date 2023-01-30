// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
//
//     Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
//
//     Example
//
// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

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

