const displayArea = document.querySelector('#display-area');
const buttonsContainer = document.querySelector('.buttons-container');
const buttonClear = buttonsContainer.querySelector('#button-clear');

const button7 = buttonsContainer.querySelector('#button-7');
const button8 = buttonsContainer.querySelector('#button-8');
const button9 = buttonsContainer.querySelector('#button-9');
const buttonDivide = buttonsContainer.querySelector('#button-divide');

const button4 = buttonsContainer.querySelector('#button-4');
const button5 = buttonsContainer.querySelector('#button-5');
const button6 = buttonsContainer.querySelector('#button-6');
const buttonMultiply = buttonsContainer.querySelector('#button-multiply');

const button1 = buttonsContainer.querySelector('#button-1');
const button2 = buttonsContainer.querySelector('#button-2');
const button3 = buttonsContainer.querySelector('#button-3');
const buttonMinus = buttonsContainer.querySelector('#button-minus');

const button0 = buttonsContainer.querySelector('#button-0');
const buttonDecimal = buttonsContainer.querySelector('#button-decimal');
const buttonPlus = buttonsContainer.querySelector('#button-plus');
const buttonEqual = buttonsContainer.querySelector('#button-equal');

function sumOf(x, y) {
    return x + y;
}

function minusOf(x, y) {
    return x - y;
}

function divideOf(x, y) {
    return y == 0 ? "Cannot divide by zero" : x/y;
}

function multiOf(x, y) {
    return x * y;
}

aTempNum = '';
bTempNum = '';


button1.addEventListener('click', function() {
    aTempNum += '1';
    displayArea.innerText = aTempNum;
    
});

button2.addEventListener('click', function() {
    aTempNum += 2;
    displayArea.innerText = aTempNum;
});

buttonPlus.addEventListener('click', function() {
    aTempNum += '+';
    displayArea.innerText = '+';
});

buttonEqual.addEventListener('click', function() {
    
    displayArea.innerText = evil(aTempNum);
})

function evil(aTempNum) {
    return new Function('return ' + aTempNum)();
  }