document.querySelector(".light__mood").addEventListener("click", function() {
    document.querySelector("html").classList.add("light__theme");
});
document.querySelector(".dark__mood").addEventListener("click", function() {
    document.querySelector("html").classList.remove("light__theme");
});

const numberKeys = document.querySelectorAll(".numberKey");
const calInput = document.querySelector(".calInput");
const numInput = document.querySelector(".numInput");
const resultKey = document.querySelector(".resultKey");
const cleanKey = document.querySelector(".cleanKey");
const operatorKey = document.querySelectorAll(".operatorKey");
const percentageKey = document.querySelector(".percentageKey");
const signKey = document.querySelector(".signKey");

numberKeys.forEach((element) => {
    element.addEventListener("click", () => {
        numInput.value += element.textContent;
        calInput.value += element.textContent;
    });
});

operatorKey.forEach((operator) => {
    operator.addEventListener("click", () => {
        calInput.value += operator.textContent;
        numInput.value = "";
    });
});

percentageKey.addEventListener("click", () => {
    calInput.value = calInput.value / 100;
    numInput.value = numInput.value / 100;
    calInput.value = "";
})

signKey.addEventListener("click", () => {
    numInput.value = (numInput.value >= 0) ? `-${numInput.value}` : Math.abs(numInput.value);
    calInput.value = (calInput.value >= 0) ? `-${calInput.value}` : Math.abs(calInput.value);
})

cleanKey.addEventListener("click", () => {
    calInput.value = "";
    numInput.value = "";
});

resultKey.addEventListener("click", () => {
    numInput.value = eval(calInput.value);
});

// clock

function clock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let divider = "AM";

    if (hours > 12) {
        hours -= 12;
        divider = "PM";
    }

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("clock__hour").textContent = hours;
    document.getElementById("clock__minute").textContent = minutes;
    document.getElementById("clock__second").textContent = seconds;
    document.getElementById("clock__divider").textContent = divider;

    setTimeout(clock, 1000);
}

clock();