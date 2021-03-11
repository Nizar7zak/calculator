const numberBtn = document.querySelectorAll(".number");

const operateBtn = document.querySelectorAll(".operate")

const resultCurrent = document.querySelector(".current");


const clearBtn = document.querySelector("#clear");
const dotBtn = document.querySelector("#dot");

const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


let inputNumber;
let inputOperate;

let check;
let currentNumber;
let currentOperate;

let arrSries = [];
let result;








/*---------------------------------------*/
/*-----------FOR__ALL__OPERATE-----------*/
/*---------------------------------------*/



/*-----------FOR CLEAR BUTTON-----------*/
clearBtn.addEventListener("click", () => {

    arrSries = [0];
    check = arrSries.join("");
    resultCurrent.textContent = check;

})

/*-----------FOR DOT BUTTON-----------*/

dotBtn.addEventListener("click", () => {

    function checkDot (item) {
        return item === ".";
    }

    let resultCheckDot = arrSries.find(checkDot);

    if (resultCheckDot !== ".") {

        arrSries.push(".")
        check = arrSries.join("");
        resultCurrent.textContent = check;   
         
    } 
})

/*-----------FOR OTTHER BUTTON-----------*/

operateBtn.forEach((operate) => {

    operate.addEventListener("click", getOperate)


})

function getOperate() {

    inputOperate = this.id;

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

}

/*---------FUNCTIONS FOR OPERATE---------*/

function getClear() {

    resultCurrent.textContent = "";

}

function getCurrentOperate () {

    switch (inputOperate) {

        case ("add"):
            currentOperate = "+";
        break;

        case ("subtract"):
            currentOperate = "-";
        break;

        case ("divide"):
            currentOperate = "/";
        break;


        case ("multiply"):
            currentOperate = "*";
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

function getValue() {

    inputNumber = this.id;
    getCurrent();
    check = arrSries.join("");
    resultCurrent.textContent = check;
    
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
    return arrSries;
}
