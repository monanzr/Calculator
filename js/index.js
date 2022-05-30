const numberKeys = document.querySelectorAll(".numberKey");
const calInput = document.querySelector(".calInput");
const resultKey = document.querySelector(".resultKey");
const cleanKey = document.querySelector(".cleanKey");
const operatorKey = document.querySelectorAll(".operatorKey");
const percentageKey = document.querySelector(".percentageKey");
const signKey = document.querySelector(".signKey");

numberKeys.forEach((element) => {
    element.addEventListener("click", () => {
        calInput.value += element.textContent;
    });
});

operatorKey.forEach((operator) => {
    operator.addEventListener("click", () => {
        calInput.value += operator.textContent;
    });
});

percentageKey.addEventListener("click", () => {
    calInput.value = calInput.value / 100;
})

signKey.addEventListener("click", () => {
    calInput.value = (calInput.value >= 0) ? `-${calInput.value}` : Math.abs(calInput.value);
})

cleanKey.addEventListener("click", () => {
    calInput.value = "";
});

resultKey.addEventListener("click", () => {
    calInput.value = eval(calInput.value);

});