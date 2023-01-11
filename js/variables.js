let name = "Codeup";

//Declare a variable called test with a string Value of "Hello, Codeup"

let test = "Hello, ";

//Using Console.log to print out Hello, Codeup

console.log(test + name);

let number = 23;

/*Variable Names shouel start with a letter, $, or _
It cannot contain any reserved words
Stive to choose descriptive names for our variables, that is, names that accurately describe the variables contents
* */

//Declaring a variable without any value

let noValue;

console.log(typeof noValue);//Returns undefined

function isUndefined(){
    let noValue;
    let addToValue = 1;
    for(let i = 0; i < addToValue; i++){
        console.log(noValue);
        if(noValue === undefined){
            return true;
        } else{
            return false;
        }
    }


}

console.log(isUndefined());

let myString = " javascript is cool! ";
console.log(myString);
console.log(myString.length);//19
console.log(myString.indexOf('s'));//4(index starts at 0 from char 'j'
console.log(myString.replace('j', 'y'));//prints out "yavascript is cool"
console.log(myString.substring(14, 18));//prints out "cool"
console.log(myString.toUpperCase());//prints out "JAVASCRIPT IS COOL!"
console.log(myString.toLowerCase());//prints out "javascript is cool!"
console.log(myString.trim());//Removes the whitespace

let a = 1;
let b = a++; //should print out 2;
let c = ++a; //should print out 3;

console.log(a);//prints out 3
console.log(b);//prints out 1
console.log(c);//prints out 3

let d = "hello";

let e = false;
console.log(e);//prints out false
function doesFalseEqual0(){
    if(e == 0){
        return true;
    }
}
console.log("finding out if false equals 0 : " + doesFalseEqual0());
d++;
e++;

console.log(d);//prints out NaN;
console.log(e);//prints out 1 after increment;

let perplexed; //perplexed is undefined (no value is assigned);
console.log("the variable perplexed plus 2 returns : " + (perplexed + 2));//returns NaN because perplexed is undefined;

let price = 2.7;
console.log(price.toFixed(2));//prints out 2.70;
console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN(true));
console.log(isNaN(false));
//to illustrate why the isNaN() function is needed;
console.log("value of NaN == NaN : " + (NaN == NaN));

console.log("value of not true : " + !true);
console.log("value of not false : " + !false);
console.log("value of not not true : " + !!true);//should be true
console.log("value of not not false : " + !!false);//should be false
console.log("value of not not 0 : " + !!0);//returns false
console.log("value of not not -0 : " + !!-0)//false
console.log("value of not not 1 : " + !!1);//true
console.log(1 +(-0));
console.log(1/0);//returns infinity;

/*3 Movies Rented
* The Little Mermaid: 3 days
* Brother Bear: 5 days
* Hercules: 1 day
* Movie Rental cost: $3 per day
* How much will you pay for all them movies and days;
* */



function MovieRentalAdder(amountOfMovies, numberOfDays){
    return amountOfMovies + (numberOfDays * 3)
}

console.log("You will pay $" + MovieRentalAdder(3, 9) + " for the movie rentals");

/**/


