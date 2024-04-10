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

