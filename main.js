
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('entrada-todolist');
//Arriba obtenemos todos los ID desde su html y lo llevamos a variables

//añadimos accion al boton
addToDoButton.addEventListener('click', function(){
    //crea el elemento <p>
    var paragraph = document.createElement('p');
    //añade el elemento <p> al html
    paragraph.classList.add('paragraph-styling');
    //añadira el texto que escribamos en el input al <p> que creamos anterior mente
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    //limpiamos el campo del input
    inputField.value = "";


    //FUNCIONES
    //cuando se haga un click se hara:
    paragraph.addEventListener('click', function(){
        //Se marcara en el elemento como si estuviera tachado
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        //Se removera el elemento de la to-do list
        toDoContainer.removeChild(paragraph);
    })
})