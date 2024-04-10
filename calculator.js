//rounds numbers to 10 thousandth, called on all opperation functions
const round = (val) => {return Math.round(val*10000)/10000;}; 

///////
//Opperation functions
function add(num1,num2){
    let ans = round(num1+num2)
    return ans};

function subtract(num1,num2){
    let ans = round(num1-num2);
    return ans};

function multiply(num1,num2){
    let prod = num1 * num2;
    let finalProd = round(prod);
    return finalProd};

function divide(num1, num2){
    if(num2!==0){
    let ans = num1 / num2;
    let finalAns = round(ans);
    return finalAns;}
    else{console.log('cannot divide by zero man!!!')}}
//opperation functions
/////
    
//switches through opperators until it matches the user request then calls the according opperation function with the right numbers
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

//display section of the calculator for displaying user input and the answer
let display = document.querySelector('.display');

//buttons for numbers 0-9
let numberBttns = document.querySelector('.numbers');

//number button classes
const digitClass = ['#zero', '#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine'];

//stores the display text content as a seperate variable
var displayContent = '';

//sets an event listener for all number buttons making them appear on screen after pressed 
const bttns = digitClass.map(cla => {
    let bttn = document.querySelector(cla);
    bttn.addEventListener('click', () => {
        let bttnContent = bttn.textContent;
        display.textContent += bttnContent;
        displayContent += bttnContent;
        return displayContent;
    })
})
//decimal and negative buttons
const decimal = document.querySelector('#decimal');
const negative = document.querySelector('#negative');

//adds a decimal option to equations
decimal.addEventListener('click', () => {
    let bttnContent = decimal.textContent;
    display.textContent += bttnContent;
    displayContent += bttnContent;
    return displayContent
});

negative.addEventListener('click', () => {
    let dispLength = displayContent.length;
        for(let i=0;i<dispLength;i++){
            if(displayContent[i]===('+'||'-'||'*'||'/')){
                let start = i+1;
                let num = displayContent.slice(start);
                let numBetter = parseFloat(num)
                displayContent+=(numBetter*-1); 
                display.textContent+=`${numBetter*-1}`
            }}});

//list of opperators available
const opperators = ['plus', 'minus', 'times', 'divided'];

//adds the opperation symbols to screen when clicked
const oppBttns = opperators.map(opp => {
    let bttn = document.querySelector(`#${opp}`);
    bttn.addEventListener('click', () => {
        let bttnContent = bttn.textContent;
        display.textContent += ` ${bttnContent} `;
        displayContent += bttnContent;
        return displayContent;
    })
})

//seperates the display content into the numbers/opperations the opperate function can eventually handle. Returns an array 
//of two numbers and a string of the operator used
let sepOpps = opp => {
    oppLen = opp.length;
    for(let i =0;i<oppLen;i++){
        if(opp[i] === '+'){        
            let num1 = opp.slice(0,i);
            let num12 = parseFloat(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseFloat(num2);
            return [num12, '+', num22]};
        if(opp[i] === '-'){
            let num1 = opp.slice(0,i);
            let num12 = parseFloat(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseFloat(num2);
            return [num12, '-', num22]};
        if(opp[i]==='*'){
            let num1 = opp.slice(0,i);
            let num12 = parseFloat(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseFloat(num2);
            return [num12, '*', num22]};
        if(opp[i]==='/'){
            let num1 = opp.slice(0,i);
            let num12 = parseFloat(num1);
            let num2 = opp.slice(i+1);
            let num22 = parseFloat(num2);
            return [num12, '/', num22]};
    }};

//equals button
const equals = document.querySelector('#equals');

//when the equals button is clicked if its a valid expression seperates the sepOpps array into individual variables, then calls opperate
//with those variables. 
equals.addEventListener('click', ()=> {try{
    let seperated = sepOpps(displayContent);
    let num1 = seperated[0];
    let opp = seperated[1];
    let num2 = seperated[2];
    console.log(opperate(num1,opp,num2));
    let ans = opperate(num1,opp,num2);
    display.textContent = '';
    display.textContent = ans;
    displayContent = ans;}
    catch{display.textContent='';
    displayContent='';}
});

