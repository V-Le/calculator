//https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator
const inputArea = document.querySelector('#inputted-area');
const calcArea = document.querySelector('#calc-area');

const buttonsContainer = document.querySelector('.buttons-container');
const buttons = Array.from(buttonsContainer.querySelectorAll('.button'));

function sumOf(x, y) {
    return x + y;
};

function minusOf(x, y) {
    return x - y;
};

function divideOf(x, y) {
    return y == 0 ? "Cannot divide by zero" : x/y;
};

function multiOf(x, y) {
    return x * y;
};

function calcEquals(calcString) {
    return calcString == '' ? 0 : new Function('return ' + calcString)();
};

var tempOne = '';
var tempTwo = '';
var tempOperator = '';
let finalAnswer = ' ';

buttons.map(function(button) {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "AC":
                inputArea.innerText = '';
                calcArea.innerText = '';
                tempOne = '';
                tempTwo = '';
                break;

            case ".":
                if (inputArea.textContent.includes('.')) {
                    return;
                } else {
                    inputArea.innerText += e.target.innerText;
                    break;
                }
                

            case "+":
                if (inputArea.innerText == finalAnswer) {
                    calcArea.innerText = `${finalAnswer} + `;
                    inputArea.innerText = '';
                    break;
                } else {
                    calcArea.innerText += ` ${inputArea.innerText} + `;
                    inputArea.innerText = '';
                    break;
                }

            case "-":
            if (inputArea.innerText == finalAnswer) {
                calcArea.innerText = `${finalAnswer} - `;
                inputArea.innerText = '';
                break;
            } else {
                calcArea.innerText += ` ${inputArea.innerText} - `;
                inputArea.innerText = '';
                break;
            }

            case "*":
                if (inputArea.innerText == finalAnswer) {
                    calcArea.innerText = `${finalAnswer} * `;
                    inputArea.innerText = '';
                    break;
                } else {
                    calcArea.innerText += ` ${inputArea.innerText} * `;
                    inputArea.innerText = '';
                    break;
                }   

            case "/":
                if (inputArea.innerText == finalAnswer) {
                    calcArea.innerText = `${finalAnswer} / `;
                    inputArea.innerText = '';
                    break;
                } else {
                    calcArea.innerText += ` ${inputArea.innerText} / `;
                    inputArea.innerText = '';
                    break;
                }

            case "=":
                tempTwo = calcArea.innerText + inputArea.innerText;
                calcArea.innerText += ` ${inputArea.innerText} `;
                finalAnswer = calcEquals(tempTwo);
                if (finalAnswer == Infinity) {
                    alert('Can\'t divide by 0');
                inputArea.innerText = '';
                calcArea.innerText = '';
                break;
                } else {
                    inputArea.innerText = finalAnswer;
                    break;
                }
                

            default:
                if (inputArea.innerText == finalAnswer) {
                    calcArea.innerText = '';
                    inputArea.innerText = '';
                    inputArea.innerText += e.target.innerText;
                    break;
                } else {
                inputArea.innerText += e.target.innerText;
                
                }
        }



    });
})