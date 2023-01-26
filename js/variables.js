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

/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/

// function payCalculator(hourlyRate, hoursWorked){
//     return hourlyRate * hoursWorked
// }

// let googlePay = payCalculator(400, 6);
//
// let amazonPay = payCalculator(380, 4);
//
// let facebookPay = payCalculator(350, 10);

// let weeklyPay = googlePay + amazonPay + facebookPay;

// console.log(weeklyPay);

//Object-Oriented method to solve the above problem:

const Work = {
    googlePay: 400,
    amazonPay: 380,
    facebookPay: 350,
    payCalculator(googleHours, amazonHours, facebookHours){
    return ((Work.googlePay * googleHours) + (Work.amazonPay * amazonHours) + ( Work.facebookPay * facebookHours));
}

}

console.log("You made a total of: " + "$" + Work.payCalculator(6, 4, 10));

/*A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule*/

const Class1 = {
    courseName: "Bio101",
    filled: false,
    amountOfStudents: 15,
    startTime: "8:00AM",

}

const Class2 = {
    courseName: "Intro to Awesomeness",
    filled: true,
    amountOfStudents: 20,
    startTime: "9:00AM",

}

const Class3 = {
    courseName: "Rock appreciation, And Theory",
    filled: false,
    amountOfStudents: 21,
    startTime: "10:00AM",

}

const Class4 = {
    courseName: "Rock History",
    filled: false,
    amountOfStudents: 28,
    startTime: "10:00AM",
}

const Class5 = {
    courseName: "Jazz History ",
    filled: false,
    amountOfStudents: 28,
    startTime: "10:00AM",
}

const Class6 = {
    courseName: "Jazz Hands, and How they work ",
    filled: false,
    amountOfStudents: 28,
    startTime: "8:00AM",
}

const Class7 = {
    courseName: "The Metal: Learn it!",
    filled: false,
    amountOfStudents: 28,
    startTime: "11:00AM",
}

//The below object filters out all courses that are not filled and do not have the same start times as an enrolled course.

const currentSchedule = {
    availableCourses: [
        Class1,
        Class2,
        Class3,
        Class4,
        Class5,
        Class6,
        Class7,
    ],
    enrolledCourses: [],
    eligibleToEnroll(availableCourses, enrolledCourses){
        let tenAMCourses = [];
        let eightAMCourses = [];
        let elevenAMCourses = [];
        enrolledCourses = this.enrolledCourses;
        availableCourses.forEach(course =>{
            if(course.filled !== true){
                this.enrolledCourses.push(course);
            }
        })//end of first forEach
        //Array with only the First 10AM Courses
        tenAMCourses = enrolledCourses.filter(course =>{
            return course.startTime === "10:00AM";
        })[0];
        //Array with only the First 8AM Courses
        eightAMCourses = enrolledCourses.filter(course =>{
            return course.startTime === "8:00AM";
        })[0];
        //Array with only 11AM Courses
        elevenAMCourses = enrolledCourses.filter(course =>{
            return course.startTime === "11:00AM";
        })
        let firstClasses = [];
        firstClasses = [].concat(eightAMCourses, tenAMCourses,  elevenAMCourses)
        return firstClasses;
    }//end of eligible to enroll function

}


console.log(currentSchedule.eligibleToEnroll(currentSchedule.availableCourses, currentSchedule.enrolledCourses));








//Refactoring the Above object to be a little more streamlined

// const scheduleSetter = {
//     availableCourses: [Class1, Class2, Class3, Class4, Class5, Class6, Class7],
//     enrolledCourses: function(){
//         let enrolledCourses = this.availableCourses.filter((course) => !course.filled);
//         console.log(enrolledCourses);//enrolled course returns all Classes that are not filled from available courses
//         let nonConflictingCourses = {};
//         for (let course of enrolledCourses){
//            if (!nonConflictingCourses[course.startTime]){
//                 nonConflictingCourses[course.startTime] = course;
//             } else {
//                 enrolledCourses = enrolledCourses.filter((course) => course !== course);
//             }
//         }
//         return enrolledCourses.filter(course => course.startTime >= "8:00AM" && course.startTime <= "11:00AM");
//     }
//
//
// };

// console.log(scheduleSetter.enrolledCourses());



//Help from Chat GPT
//
// let Class8 = {courseName: "Math", filled: false, amountOfStudents: 20, startTime: "8:00AM"};
// let Class9 = {courseName: "Science", filled: false, amountOfStudents: 15, startTime: "9:00AM"};
// let Class10 = {courseName: "English", filled: true, amountOfStudents: 25, startTime: "8:00AM"};
// let Class11 = {courseName: "History", filled: false, amountOfStudents: 18, startTime: "10:00AM"};
// let Class12 = {courseName: "Art", filled: false, amountOfStudents: 15, startTime: "9:00AM"};
// let Class13 = {courseName: "Physical Education", filled: true, amountOfStudents: 30, startTime: "10:00AM"};
// let Class14 = {courseName: "Music", filled: false, amountOfStudents: 20, startTime: "11:00AM"};
//
// const scheduleSetter = {
//     availableCourses: [Class8, Class9, Class10, Class11, Class12, Class13, Class14],
//     enrolledCourses() {
//         let enrolledCourses = this.availableCourses.filter((course) => !course.filled);
//         let timeMap = {};
//         for (let course of enrolledCourses) {
//             if (!timeMap[course.startTime]) {
//                 timeMap[course.startTime] = course;
//             } else {
//                 enrolledCourses = enrolledCourses.filter((c) => c !== course);
//             }
//         }
//         return enrolledCourses.filter(c => c.startTime >= "8:00AM" && c.startTime <= "11:00AM")
//     }
// };
// console.log(scheduleSetter.enrolledCourses());




/*Question: 3-4 (Working With Data Types, Operators, and Variables) A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.*/

const Customer1 = {
    username: "shoppett",
    premium: true,
    productsBought: 32
};

const Customer2 = {
    username: "MrShoppingMan",
    premium: false,
    productsBought: 3
}

const Customer3 = {
    username: "ILoveFreeFlashLights!",
    premium: false,
    productsBought: 1
}

const Customer4 = {
    username: "YellowIsMellow",
    premium: false,
    productsBought: 1
}

const productOffer1 = {
    offer: "Free Flashlight",
    expired: false
}

const productOffer2 = {
    offer: "$10,000 Gift Card",
    expired: true
}

function offerProduct(customer, productOffer){
    let amountToBuy = (3 - customer.productsBought);
        if (customer.premium === true || customer.productsBought >= 2){
            return `Congratulations ${customer.username}, You receive a ${productOffer.offer}!`
        } else if (productOffer.expired === true){
            return `Sorry ${customer.username}, your ${productOffer.offer} offer has expired!`;
        } else {
            return `${customer.username} If you buy ${amountToBuy} more items you can receive a ${productOffer.offer}!`
        }

}

console.log(offerProduct(Customer1, productOffer1));
console.log(offerProduct(Customer2, productOffer1));
console.log(offerProduct(Customer3, productOffer1));
console.log(offerProduct(Customer4, productOffer2));


/*Question 4: (Working With Data Types, Operators, and Variables)
* the password must be at least 5 characters
* the password must not include the username
* the username must be no more than 20 characters
* neither the username or password can start or end with whitespace
* */

function passwordChecker(username, password){
    switch(true){
        case password.includes(username):
            return "Please Input a password that does not contain your username"
        case password.length <= 4:
            return "Please input a password that is longer than 4 characters"
        case username.length >=21:
            return "Please input a username that is no longer than 20 characters"
        case username.startsWith(" ") || username.endsWith(" ") || password.startsWith(" ") || password.endsWith(" "):
            return "Please input a Username and Password that does not start or end with a whitespace"
        default:
            return "Thank you for inputting your username and password!"
    }
}


console.log(passwordChecker("thevaliantjosh", "badmamajoshuajamma"));//accepted
console.log(passwordChecker("thevaliantjosh@gmail.com", "password"));//username longer than 20 characters
console.log(passwordChecker("thevaliantjosh", "passwordthevaliantjosh!!"));//password contains username
console.log(passwordChecker(" thevaliantjosh ", " password "));//user or pass starts and ends with whitespace
console.log(passwordChecker("thevaliantjosh ", "password"));//user or pass starts and ends with whitespace
console.log(passwordChecker("thevaliantjosh", " password"));//user or pass starts and ends with whitespace
console.log(passwordChecker("thevaliantjosh ", "password "));//user or pass starts and ends with whitespace
console.log(passwordChecker(" thevaliantjosh ", " password "));//user or pass starts and ends with whitespace
console.log(passwordChecker("thevaliantjosh", "password"));//Good password
