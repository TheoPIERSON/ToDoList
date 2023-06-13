//Quand on clique sur le bouton envoyer, alors le contenu de input est ajouté à la liste
"use strict";
// Create a new list item when clicking on the "Add" button
let myList = document.getElementById("myUl");
let myInput = document.getElementById("myInput");
let mySubmit = document.getElementById("mySubmit");

mySubmit.addEventListener("click", function () {
  if (myInput.value !== "") {
    let li = document.createElement("li");
    myList.appendChild(li);
    li.innerHTML += myInput.value;
    myInput.value = "";
  } else {
    alert("Veuillez remplir le champ de texte");
  }
});
myInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    mySubmit.click();
  }
});
