                                            // Coding Challenge

                                    // If Else and Logical Operators Statements

// Q1.
// BMI Updated
// Use the BMI example from Challenge #1, and the code you already wrote, andimprove it.
// Your Tasks
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI ishigher than Mark's!" 2.
// 2. Use a template literal to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement.





let johnHeight=1.615;
let johnMass=51;
let MarkHeight= 1.524;
let MarkMass=60;

let markBMI= MarkMass/ (MarkHeight ** 2);
let johnBMI= johnMass/ (johnHeight ** 2);

if (markBMI>johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
    
} else {
    
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// Q2. Part1
// Write a program that takes in a user's age as input and outputs whether the user is old enough to vote (i.e., 18 years old or older).


let yourAge=prompt("Enter your age :  ");

if (yourAge>=18) {
    console.log("You are old enough to vote.");

    
} else {
    console.log("Sorry, You are not old enough to vote.");
    
}


// Part2
// Write a program that takes in a user's grade as input (e.g. "A", "B", "C", "D", or"F") and outputs a message based on their grade. For example, if the user enters "A", the program could output "Great job!"


let grade=prompt("Enter your grade to see output: ");

if (grade=="A") {
    console.log("EXCELLENT");

    
} 
else if(grade=="B"){
    console.log("Very Good");

    
}
else if(grade=="C"){
    console.log("Good");

    
}
else if(grade=="D"){
    console.log("Satisfactory");

    
}
else if(grade=="E"){
    console.log("Average");

    
}
else{
    console.log("Below Average");
}


// Part3
// Write a program that takes in a user's age as input and outputs whether the user is a baby (0-2 years old), a toddler (3-5 years old), a child (6-12 years old),a teenager (13-18 years old), or an adult (19 years old or older). 


let age =prompt("Enter your age:");
if(age>=0 && age<=2){
    console.log("Baby");

}
else if(age>=3  && age<=5 ){
    console.log("Toddler");
}
else if(age>=6   && age<=12 ){
    console.log("Child");
}
else if(age>=13   && age<=18 ){
    console.log("Teenager");
}
else{
    console.log("Adult");
}



// Part4
// Write a program that takes in a user's number as input and outputs whether the number is positive, negative, or zero.


let num=prompt("Enter any number");
if(num<0){
    console.log("The number is Negative.");
}
else if(num>0){
    console.log("The number is Positive.");
}
else{
    console.log("The number is ZERO.")
}









