var button = document.getElementById('addItems');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
};

function appendListElement() {
    var li = document.createElement('li');  // creates an element of type li
    li.appendChild(document.createTextNode(input.value));  // assigns input's value as the 
                                                           // textnode for li
    ul.appendChild(li);  // appends li to ul
    input.value = '';
};

function appendAfterClick() {
    if (inputLength() > 0) {
        appendListElement();
    }
};

// allows you to press enter to add things to the list
function appendWithEnterPress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        appendListElement();
    }
}

// We aren't calling the functions that are passed as arguments because we are only adding the event 
// listeners. These are called callback functions
button.addEventListener("click", appendAfterClick);
input.addEventListener("keydown", appendWithEnterPress);