const changeThemeBtn = document.querySelector(
    ".calculator-heading__item__theme"
);

const calculatorKeypad = document.querySelectorAll("button");
const display = document.getElementById("display");

let themeColor = "black";
let string = "";

calculatorKeypad.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            display.innerText = string;
        } else if (e.target.innerHTML === "RESET") {
            string = "0";
            display.innerText = string;
        } else if (e.target.innerHTML === "Del") {
            string = string.slice(0, -1);
            console.log(string);
            display.innerText = string;
        } else {
            string += e.target.innerHTML;
            display.innerText = string;
        }
    });
});

const changeThemeHandler = () => {
    if (themeColor === "black") {
        document.body.style.color = "hsl(60, 10%, 19%)";
        document.body.style.backgroundColor = "hsl(0,0%,90%)";

        calculatorDisplay.style.backgroundColor = "hsl(0, 0%, 93%)";
        calculatorPad.style.backgroundColor = "hsl(0, 5%, 81%)";

        resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
        resetBtn.style.boxShadow = "0px 5px hsl(185, 58%, 25%)";

        delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
        delBtn.style.boxShadow = "0px 5px hsl(185, 58%, 25%)";

        equalBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
        equalBtn.style.boxShadow = "0px 5px hsl(25, 99%, 27%)";

        changeThemeBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
        changeThemeBtn.style.boxShadow = "0px 5px hsl(25, 99%, 27%)";

        themeColor = "white";
    } else {
        document.body.style.color = "hsl(0, 0%, 100%)";
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";

        calculatorDisplay.style.backgroundColor = "hsl(224, 36%, 15%)";
        calculatorPad.style.backgroundColor = "hsl(223, 31%, 20%)";

        resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
        resetBtn.style.boxShadow = "0px 5px hsl(224, 28%, 35%)";

        delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
        delBtn.style.boxShadow = "0px 5px hsl(224, 28%, 35%)";

        equalBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
        equalBtn.style.boxShadow = "0px 5px hsl(6, 70%, 34%)";

        changeThemeBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
        changeThemeBtn.style.boxShadow = "0px 5px hsl(6, 70%, 34%)";

        themeColor = "black";
    }
};

changeThemeBtn.addEventListener("click", changeThemeHandler);
