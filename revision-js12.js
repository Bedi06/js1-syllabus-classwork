const mentorCount = 5;
const traineeCount = 20;
checkIsTrue(mentorCount < traineeCount);

const capacity = 15;
const people = 10;
checkIsTrue(capacity > people);

const organisation = "Code your Future!";
checkIsTrue(typeof organisation === "string");
checkIsTrue(organisation.startsWith("Code"));
checkIsTrue(organisation.includes(" your "));
checkIsTrue(organisation.endsWith("Future!"));

const mystery = false;
checkIsTrue(typeof mystery === "boolean");
checkIsTrue(!mystery);

// Don't change anything below this point
var FILL_ME_IN;
function checkIsTrue(value1) {
  if (value1) {
    // "\x1b[32m%s\x1b[0m" will change console output to green
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Yes, this expression evaluates to true! ✅"
    );
  } else {
    // "\x1b[31m%s\x1b[0m" will change console output to red
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Sorry, this expression evaluates to false! ❌"
    );
  }
}

/* EXERCISE 3
Create a function called isEven that should
take a number as an input
return a boolean indicating if the number is even or odd
Remember to avoid using console.log inside the function itself

E.g. isEven(100) should return true E.g. isEven(53) should return false

Call your function with a number of different inputs to check your function is working as expected. 😄

Bonus: Can you ensure your function doesn't use an if statement for this exercise 😎*/

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10));

/* EXERCISE
Create a function that gives you a message depending on your mood! It should:

take one input
return "Good job, you're doing great!" if you pass in "happy"
return "Every cloud has a silver lining" if you pass in "sad"
return "Beep beep boop" if you pass in a number
return "I'm sorry, I'm still learning about feelings!" if you pass in anything else*/

function motivation(mood) {
  if (mood === "happy") {
    return "Good job, you're doing great!";
  } else if (mood === "sad") {
    return "Every cloud has a silver lining";
  } else if ((mood = Number)) {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}

console.log(motivation(12));
