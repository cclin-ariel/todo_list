//choose elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const inpute = document.getElementById('inpute');

//classes name

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINETHROUGH = "lineThrough";

//clear the localStorage
ß
clear.addEventListener("click", () =>{
    localStorage.clear();
    location.reload();
});

//show todays date

const today = new Date();
const options = { weekday: "long", month: "short", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-JP", options);

//set the variables

let LIST, id;

//get the items from the localStorage

let data = localStorage.getItem("TODO");

//check if localStorage is not empty

if(data){
    LIST = JSON.parse(data);
    id = LIST.length; //for the next new todo while adding
    loadList(LIST); 
} else {
    //if data is empty
    LIST = [];
    id = 0;
};

function loadList(array){
    array.forEach(function(item){
        // console.log(item);
        addToDo(item.name, item.id, item.done, item.trash);
    });
};

//addToDo function

var addToDo = (todo, id, done, trash) => {

    if (trash) { return };

    var DONE = done ? CHECK : UNCHECK;
    var LINE = done ? LINETHROUGH : "";

    const position = "beforeend";
    const item = `
                <li class="item">
                    <i class="far ${DONE}" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${todo}</p>
                    <i class="far fa-trash-alt flex-end" job="delete" id="${id}"></i>
                </li>`;
    list.insertAdjacentHTML(position, item);
};

// function addToDo(todo, id, done, trash) {
//     if (trash) { return };

//     var DONE = done ? CHECK : UNCHECK;
//     var LINE = done ? LINETHROUGH : "";

//     const position = "beforeend";
//     const item = `
//                 <li class="item">
//                     <i class="far ${DONE}" job="complete" id="${id}"></i>
//                     <p class="text ${LINE}">${todo}</p>
//                     <i class="far fa-trash-alt flex-end" job="delete" id="${id}"></i>
//                 </li>`;
//     list.insertAdjacentHTML(position, item);
// }

//add a item to the list by using the enter key

document.addEventListener("keyup", event => {
    if (event.keyCode == 13) {
        const todo = input.value;
        //if todo isn't empty
        if (todo) {
            addToDo(todo, id, false, false);
            LIST.push({
                name: todo,
                id: id,
                done: false,
                trash: false,
            });
            //set the itmes to the localStorage

            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        };
        input.value = "";
    }
});

//funcion completeToDo 

var completeToDo = element => {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINETHROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
};

//function removetodo

const removeToDo = element => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
};

//target the items created dynamically

list.addEventListener("click", evnet => {
    const element = evnet.target;
    console.log(element);
    const elementJob = element.attributes.job.value;//complete(done) or delete(remove)

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }
    //set the itmes to the localStorage

    localStorage.setItem("TODO", JSON.stringify(LIST));
})