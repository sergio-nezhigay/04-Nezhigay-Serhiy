const number1 = +prompt("Enter, please, your 1st number...");
const number2 = +prompt("Enter, please, your 2nd number...");
const number3 = +prompt("Enter, please, your 3rd number...");

const sum = number1 + number2 + number3;
const average = sum / 3;

if (!isNaN(sum)) alert(`Math average of your numbers is ${average}`);
else alert(`At least one of your inputs is not a number :(`);
