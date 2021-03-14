const numberBtn = document.querySelectorAll(".number");

const operateBtn = document.querySelectorAll(".operate")

const resultCurrent = document.querySelector(".current");

const equalBtn = document.querySelector("#equal");

const resultContent = document.querySelector(".result--content")



const clearBtn = document.querySelector("#clear");
const dotBtn = document.querySelector("#dot");

const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayOperate = ["/", "*", "+", "-"];


let inputNumber;
let inputOperate;

let check;
let currentNumber;
let currentOperate;

let arrSries = [];



/*---------------------------------------*/
/*-----------FOR______KEYBOARD-----------*/
/*---------------------------------------*/


window.addEventListener("keydown", event => {

    if (event.key === "Enter" || event.key === "=") {

        equalButtonCallBack();

    } else if (event.key === ".") {

        callBackDot();

    } else if (event.key === "+") {

        getOperate("add")

    }  else if (event.key === "-") {
        
        getOperate("subtract")

    } else if (event.key === "*") {
        
        getOperate("multiply")

    } else if (event.key === "/") {
        
        getOperate("divide")

    } else if (event.key === "Backspace" || event.key === "Delete") {

        callBackClear();

    } else if (event.key === "0") {

        getValue("zero")

    } else if (event.key === "1") {

        getValue("one")
        
    } else if (event.key === "2") {

        getValue("two")

    } else if (event.key === "3") {

        getValue("three")

    } else if (event.key === "4") {

        getValue("four")

    } else if (event.key === "5") {

        getValue("five")

    } else if (event.key === "6") {

        getValue("six")

    } else if (event.key === "7") {

        getValue("seven")

    } else if (event.key === "8") {

        getValue("eight")

    } else if (event.key === "9") {

        getValue("nine")
    }

});

/*---------------------------------------*/
/*-----------FOR__GET__RESULT------------*/
/*---------------------------------------*/

equalBtn.addEventListener("click", equalButtonCallBack)

function equalButtonCallBack () {

    resultContent.style.cssText = "font-size: 40px";

}

function resizeFinalResult () {

    resultContent.style.cssText = "font-size: inherit";

}

function getFinalResult () {
    const correctedParameter = getCorrectParameter()
    const operation = calculateFunc(correctedParameter)
    resultContent.textContent = operation;

}


function getCorrectParameter() {
    let result = "";
    let resultArr = [];

    for (let i = 0; i < arrSries.length; i++) {
        if (arrayOperate.includes(arrSries[i])) {
            resultArr.push(result)
            resultArr.push(arrSries[i])
            result = "";       
            
        } else {
            result += arrSries[i];           
        }
        
    }

    if (result) {
        resultArr.push(result);
        result = "";
    }

    return resultArr;
}

function calculateFunc(arr) {

    for (let j = 0; j < arr.length; j++) {
        
        if (arr[j] === "/") {

            let x = arr[j-1] / arr[j+1];
            arr.splice( j-1, 3, x)
                
            j = 0;

        } else if (arr[j] === "*" ) {

            let x = arr[j-1] * arr[j+1];
            arr.splice( j-1, 3, x)
            j = 0;

        }
    }


    for (let k = 0; k < arr.length; k++) {
        if ( !arrayOperate.includes(arr[k])) {

            arr[k] = (arr[k] * 10);

        }

    }

    for (let i = 0; i < arr.length; i++) {
        


        if (arr[i] === "-" ) {

            let x = arr[i-1] - arr[i+1];
            arr.splice( i-1, 3, x)
            i = 0;   

        } else if (arr[i] === "+" ) {

            let x = +(arr[i-1]) + +(arr[i+1]);
            arr.splice( i-1, 3, x)
            i = 0;

        }

    }

    let final = (arr[0]) / 10;
    let str = final.toString();

    if (str.indexOf(".") >= 0) {

        let afterDot = str.slice( str.indexOf(".") + 1, str.length );
        let beforeDot = str.slice( 0, str.indexOf("."));


        if (afterDot.length >= 4) {

            afterDot = afterDot.slice( 0, 4);
            
        } else if (afterDot.length < 4) {
            afterDot = afterDot.slice( 0, afterDot.length);

        }

        final = beforeDot.concat(".", afterDot);

    }

    return final;

}


/*---------------------------------------*/
/*-----------FOR__ALL__OPERATE-----------*/
/*---------------------------------------*/


/*-----------FOR CLEAR BUTTON-----------*/
clearBtn.addEventListener("click", callBackClear)

function callBackClear () {

    arrSries = [];
    check = arrSries.join("");
    resultCurrent.textContent = check;
    resultContent.textContent = "0"
    resizeFinalResult();
    
}

/*-----------FOR DOT BUTTON-----------*/

dotBtn.addEventListener("click", callBackDot)

function callBackDot () {

    let arrCheck = [];
    for (let i = 0; i < arrSries.length; i++) {
        if (!arrayOperate.includes(arrSries[i])) {
            arrCheck.push(arrSries[i])
            
        } else {
            arrCheck = [];
        }
    }

    function checkDot (item) {
        return item === ".";
    }

    let resultCheckDot = arrCheck.find(checkDot);

    if (resultCheckDot !== ".") {

        
        arrSries.push(".");
        check = arrSries.join("");
        resultCurrent.textContent = check;

         
    } 
    resizeFinalResult();

}


/*-----------FOR OTTHER BUTTON-----------*/

operateBtn.forEach((operate) => {

    operate.addEventListener("click", getOperate)

})

function getOperate(x) {

    let alternative = this.id;
    x = alternative || x;

    inputOperate = x;

    getCurrentOperate();

    if (arrSries.length === 0) {

        arrSries.push(0);
        arrSries.push(currentOperate);

    } else if ( +(arrSries[arrSries.length - 1]) != arrSries[arrSries.length - 1]) {

        arrSries[arrSries.length - 1] = currentOperate;

    } else if ( +(arrSries[arrSries.length - 1]) == arrSries[arrSries.length - 1]) {

        arrSries.push(currentOperate);

    }

    check = arrSries.join("");
    resultCurrent.textContent = check;
    resizeFinalResult();


}

/*---------FUNCTIONS FOR OPERATE---------*/

function getCurrentOperate () {

    switch (inputOperate) {

        case ("add"):
            currentOperate = arrayOperate[2];
        break;

        case ("subtract"):
            currentOperate = arrayOperate[3];
        break;

        case ("divide"):
            currentOperate = arrayOperate[0];
        break;


        case ("multiply"):
            currentOperate = arrayOperate[1];
        break;

    }
}

/*---------------------------------------*/
/*--------------FOR___NUMBER-------------*/
/*---------------------------------------*/

numberBtn.forEach((number) => {
    resultCurrent.textContent = "";
    number.addEventListener("click", getValue)

})

function getValue(x) {

    let alternative = this.id;
    x = alternative || x;

    inputNumber = x;
    getCurrent();
    check = arrSries.join("");
    resultCurrent.textContent = check;
    getFinalResult ();
}

function getCurrent() {
    switch (inputNumber) {

        case ("zero"):
            currentNumber = arrayNumber[0];
        break;

        case ("one"):
            currentNumber = arrayNumber[1];
        break;

        case ("two"):
            currentNumber = arrayNumber[2];
        break;

        case ("three"):
            currentNumber = arrayNumber[3];
        break;

        case ("four"):
            currentNumber = arrayNumber[4];
        break;

        case ("five"):
            currentNumber = arrayNumber[5];
        break;

        case ("six"):
            currentNumber = arrayNumber[6];
        break;

        case ("seven"):
            currentNumber = arrayNumber[7];
        break;

        case ("eight"):
            currentNumber = arrayNumber[8];
        break;

        case ("nine"):
            currentNumber = arrayNumber[9];
        break;
    }
    arrSries.push(currentNumber)

    resizeFinalResult();

    return arrSries;
}
