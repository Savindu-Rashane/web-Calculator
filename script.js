const display =document.getElementById('display');

function appendToDisplay(input){
    display.value +=input;
}
function clearDisplay(){
    display.value =" ";
}
function calculate(){
    display.value = eval(display.value);
}
let isOpenParenthesis = true;
function toggleParenthesis() {
    const display = document.getElementById('display');
    if (isOpenParenthesis) {
        display.value += '(';
    } else {
        display.value += ')';
    }
    isOpenParenthesis = !isOpenParenthesis;
}
function toggleSign() {
    const display = document.getElementById('display');
    if (display.value) {
        const match = display.value.match(/(\-?\d+(\.\d+)?)$/);
        if (match) {
            const number = match[0];
            const toggledNumber = number.startsWith('-') ? number.substring(1) : '-' + number;
            display.value = display.value.replace(/(\-?\d+(\.\d+)?)$/, toggledNumber);
        }
    }
}