"use strict";

var formValidity = true;

function verifySignUpInfo() {
    var inputs = document.querySelectorAll("#signUpFieldSet input");
    var fieldSetValidity = true;
    var pass1 = document.getElementById("password");
    var pass2 = document.getElementById("passwordConfirm");
    var errorSpace = document.getElementById("errorText");
    try {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                fieldSetValidity = false;
                inputs[i].style.background = "rgb(255, 233, 233)";
            }
            else {
                inputs[i].style.background = "white";
            }
        }
        if (fieldSetValidity === false) {
            throw "Please Complete Your Account Information"
        }
        if (pass1.value !== pass2.value) {
            pass1.style.background = "rgb(255, 233, 233)";
            pass2.style.background = "rgb(255, 233, 233)"
            throw "Please confirm your password."
        }82
        errorSpace.style.display = "none";
    }
    catch (msg) {
        formValidity = false;
        errorSpace.style.display = "block";
        errorSpace.style.background = "rgb(255, 233, 233)"
        errorSpace.innerHTML = msg;
    }
}

function verify(evt) {
    formValidity = true;
    verifySignUpInfo();
    if (formValidity === false) {
        if (evt.preventDefault) {
            evt.preventDefault()
        } else {
            evt.returnValue = false;
        }
    }
};


function createEventListeners() {
    var pass1 = document.getElementById("password");
    var pass2 = document.getElementById("passwordConfirm");
    if (window.addEventListener) {
        window.addEventListener("submit", verify, false);
    } else if (window.attachEvent) {
        window.attachEvent("onsubmit", verify);
    };
};

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachedEvent("onload", createEventListeners);
};