var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var mainLi = document.createElement("li");
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");

	li.appendChild(document.createTextNode(input.value + ' '));
	li.classList.add("inline-child");

	deleteButton.appendChild(document.createTextNode("X"));
	deleteButton.classList.add("inline-child");

	enableStrikethroughToggle(li);
	enableDelete(deleteButton);

	mainLi.appendChild(li);
	mainLi.appendChild(deleteButton);

	ul.appendChild(mainLi);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function enableStrikethroughToggle(element) {
	element.addEventListener("click", toggleDone);
}

function deleteItem(element) {
	element.target.parentElement.remove();
}

function enableDelete(element) {
	element.addEventListener("click", deleteItem);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);