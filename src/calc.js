
export default function calc(operation , num1 , num2 , answer) {
  
    if (operation === "+") {
        if (answer === num1 + num2) {
            return "Correct!";
        } else {
            return "InCorrect!";
        }
    }
    if (operation === "-") {
        if (answer === num1 - num2) {
            return "Correct!";
        } else {
            return "InCorrect!";
        }
    }
    if (operation === "*") {
        if (answer === num1 * num2) {
            return "Correct!";
        } else {
            return "InCorrect!";
        }
    }
    if (operation === "/") {
        if (answer === parseInt(num1 / num2)) {
            return "Correct!";
        } else {
            return "InCorrect!";
        }
    }

}