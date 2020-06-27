
// ------> write number

function getNmber(num) {
    var schreen = document.getElementById("schreen")
    if (schreen.value === 0){
        schreen.value = " ";
    }
    schreen.value += num;
}

// -------> Clear text butn working

function ClearResult() {
    var schreen = document.getElementById("schreen")
    schreen.value = "";
}

// -------> Working of = button

function getResult() {
    var schreen = document.getElementById("schreen")
    schreen.value = eval(schreen.value)
}

// --------> working of delete button

function DelNumber() {
    var schreen = document.getElementById("schreen")
    schreen.value = schreen.value.substr(0, schreen.value.length - 1)
}

// function setSchreen(){
//     var schreen = document.getElementById("schreen")
//     schreen.value = "0"
// }
// setSchreen()