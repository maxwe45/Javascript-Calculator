function add(num1,num2){
    return num1+num2;
};

function subtract(num1,num2){
    return num1-num2;
};

const round = (val) => {
    return Math.round(val*100)/100;
};

function multiply(num1,num2){
    let prod = num1 * num2;
    let finalProd = round(prod);
    return finalProd;
};

function divide(num1, num2){
    if(num2!==0){
    let ans = num1 / num2;
    let finalAns = round(ans);
    return finalAns;}
    else{console.log('cannot divide by zero man!!!')}
    
}

let numberOne;
let opperator;
let numberTwo;

const opperate = (num1,opp,num2) => {
    switch(opp){
        case opp='+':
            return add(num1,num2);
        case opp='-':
            return subtract(num1,num2);
        case opp='*':
            return multiply(num1,num2);
        case opp='/':
            return divide(num1,num2);
    }
}

let numberBttns = document.querySelector('.numbers');
let display = document.querySelector('.display');

const digitClass = ['#zero', '#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine'];

var displayContent = '';
const bttns = digitClass.map(cla => {
    let bttn = document.querySelector(cla);
    bttn.addEventListener('click', () => {
        let bttnContent = bttn.textContent;
        display.textContent += bttnContent;
        displayContent += bttnContent;
        return displayContent;
    })
})

const opperators = ['plus', 'minus', 'times', 'divided'];

const oppBttns = opperators.map(opp => {
    let bttn = document.querySelector(`#${opp}`);
    bttn.addEventListener('click', () => {
        let bttnContent = bttn.textContent;
        display.textContent += ` ${bttnContent} `;
        displayContent += bttnContent;
        return displayContent;
    })
})

let oppTest = ['+', '-', '*', '/'];

let sepOpps = opp => {
    oppLen = opp.length;
    for(let i =0;i<oppLen;i++){
        if(opp[i] === '+'){        
            let num1 = opp.slice(0,i);
            let num12 = parseInt(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseInt(num2);
            return [num12, '+', num22]};
        if(opp[i] === '-'){
            let num1 = opp.slice(0,i);
            let num12 = parseInt(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseInt(num2);
            return [num12, '-', num22]};
        if(opp[i]==='*'){
            let num1 = opp.slice(0,i);
            let num12 = parseInt(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseInt(num2);
            return [num12, '*', num22]};
        if(opp[i]==='/'){
            let num1 = opp.slice(0,i);
            let num12 = parseInt(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseInt(num2);
            return [num12, '/', num22]};
    }
};

const equals = document.querySelector('#equals');


equals.addEventListener('click', ()=> {
    let seperated = sepOpps(displayContent);
    console.log(opperate(seperated));
    let ans = opperate(seperated);
    display.textContent = '';
    display.textContent = `${ans}`;
})

