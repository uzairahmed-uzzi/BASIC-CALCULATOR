function getNum(num) {
    var display = document.getElementById("display");
    display.value += num;

}

function clearResult() {
    var display = document.getElementById("display");
    display.value = "";
}

function getResult() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value = err.message;
    }
}