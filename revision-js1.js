let trainees = 15;
let mentors= 8;
let total= trainees+mentors;
console.log(total);

let traineesPercentage=Math.round((100*trainees)/total);
console.log(traineesPercentage);

let mentorsPercentage=Math.round((100*mentors)/total);
console.log(mentorsPercentage);


function formatPenceToPounds(pence){
    return "£" + (pence/100)
};
 
const result=formatPenceToPounds(5556);
console.log(result);

/*In groups, study the code above and then answer the following questions:

function printMessage(x) {
  console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
  return "Hello, nice to meet you " + name;
}

printMessage("Mitch");

printMessage("August");

getMessage("Laetitia");

How many times is the function printMessage called ? 2 time
How many times is the function getMessage called ? 1 time
What is the parameter name for the function printMessage ? x
What is the parameter name for the function getMessage ?name
Discuss briefly which parameter name is better out of the two functions and why ? the second one because it describes better 
the value that the paramenter is going to have

What is the return value of the function printMessage whenever it is called ? it doesn't have a return value , only  the getMessage function has 
Someone then creates 2 further variables messageForAli and curiousMessage
*/

function printMessage(x) {
    console.log("Hello, nice to meet you " + x);
  }
  
  function getMessage(name) {
    return "Hello, nice to meet you " + name;
  }
  
  printMessage("Mitch");
  
  printMessage("August");
  
  getMessage("Laetitia");

  const messageForAli = getMessage("Ali");
  console.log(messageForAli);

 const curiousMessage = getMessage(42);
 console.log(curiousMessage);