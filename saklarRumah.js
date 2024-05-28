let saklar1 = document.getElementById("saklar1");
let saklar11 = document.getElementById("saklar11");
let saklar12 = document.getElementById("saklar12");
let saklar13 = document.getElementById("saklar13");
let saklar2 = document.getElementById("saklar2");
let saklar3 = document.getElementById("saklar3");
let saklar31 = document.getElementById("saklar31");
let saklar32 = document.getElementById("saklar32");
let saklar4 = document.getElementById("saklar4");
let saklar41 = document.getElementById("saklar41");
let saklar42 = document.getElementById("saklar42");
let saklar43 = document.getElementById("saklar43");
let saklar44 = document.getElementById("saklar44");
let lampu11 = document.getElementById("lampu11");
let lampu12 = document.getElementById("lampu12");
let lampu13 = document.getElementById("lampu13");
let lampu21 = document.getElementById("lampu21");
let lampu31 = document.getElementById("lampu31");
let lampu32 = document.getElementById("lampu32");
let lampu41 = document.getElementById("lampu41");
let lampu42 = document.getElementById("lampu42");
let lampu43 = document.getElementById("lampu43");
let lampu44 = document.getElementById("lampu44");

// ruang keluarga
function saklarKeluarga() {
    if (saklar11.checked) {
        lampu11.src = "assets/images/on.gif";
    } else {
        lampu11.src = "assets/images/off.gif";
    }
    if (saklar12.checked) {
        lampu12.src = "assets/images/on.gif";
    } else {
        lampu12.src = "assets/images/off.gif";
    }
    if (saklar13.checked) {
        lampu13.src = "assets/images/on.gif";
    } else {
        lampu13.src = "assets/images/off.gif";
    }
}
function saklarGroup1() {
    if (saklar1.checked) {
        lampu11.src = "assets/images/on.gif";
        lampu12.src = "assets/images/on.gif";
        lampu13.src = "assets/images/on.gif";
    } else {
        lampu11.src = "assets/images/off.gif";
        lampu12.src = "assets/images/off.gif";
        lampu13.src = "assets/images/off.gif";
    }
}
// ruangan makan
function saklarMakan() {
    if (saklar2.checked) {
        lampu21.src = "assets/images/on.gif"
    }
    else {
        lampu21.src = "assets/images/off.gif"
    }
}
// ruang tidur
function saklarTidur() {
    if (saklar31.checked) {
        lampu31.src = "assets/images/on.gif"
    }
    else {
        lampu31.src = "assets/images/off.gif"
    }
    if (saklar32.checked) {
        lampu32.src = "assets/images/on.gif"
    }
    else {
        lampu32.src = "assets/images/off.gif"
    }
}
function saklarGroupTidur() {
    if (saklar3.checked) {
        lampu31.src = "assets/images/on.gif"
        lampu32.src = "assets/images/on.gif"
    }
    else {
        lampu31.src = "assets/images/off.gif"
        lampu32.src = "assets/images/off.gif"
    }
}
// ruang tamu
function saklarTamu() {
    if (saklar41.checked) {
        lampu41.src = "assets/images/on.gif"
    }
    else {
        lampu41.src = "assets/images/off.gif"
    }
    if (saklar42.checked) {
        lampu42.src = "assets/images/on.gif"
    }
    else {
        lampu42.src = "assets/images/off.gif"
    }
    if (saklar43.checked) {
        lampu43.src = "assets/images/on.gif"
    }
    else {
        lampu43.src = "assets/images/off.gif"
    }
    if (saklar44.checked) {
        lampu44.src = "assets/images/on.gif"
    }
    else {
        lampu44.src = "assets/images/off.gif"
    }
}
function saklarGroupTamu() {
    if (saklar4.checked) {
        lampu41.src = "assets/images/on.gif"
        lampu42.src = "assets/images/on.gif"
        lampu43.src = "assets/images/on.gif"
        lampu44.src = "assets/images/on.gif"
    }
    else {
        lampu41.src = "assets/images/off.gif"
        lampu42.src = "assets/images/off.gif"
        lampu43.src = "assets/images/off.gif"
        lampu44.src = "assets/images/off.gif"
    }
}