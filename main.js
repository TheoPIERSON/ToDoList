//Quand on clique sur le bouton envoyer, alors le contenu de input est ajouté à la liste
"use strict";
// Create a new list item when clicking on the "Add" button
let myList = document.getElementById("myUl");
let myInput = document.getElementById("myInput");
let mySubmit = document.getElementById("mySubmit");

mySubmit.addEventListener("click", function () {
  if (myInput.value !== "") {
    var li = document.createElement("li");
    myList.appendChild(li);
    li.innerHTML += myInput.value;
    myInput.value = "";
  } else {
    alert("Veuillez remplir le champ de texte");
  }
});
