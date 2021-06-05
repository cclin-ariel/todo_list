//choose elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const inpute = document.getElementById('inpute');

//classes name

const CHECK = "far fa-check-circle";
const UNCHECK = "far fa-circle";
const LINETHROUGH = "lineThrough";

//show todays date

const today = new Date();
const options = { weekday: "long", month: "short", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-JP", options);

//set the variable

let LIST = []; 
var id = 0;


//addToDo function

var addToDo = (todo, id, done, trash) => {

    if (trash){ return};

var DONE = done ? CHECK : UNCHECK;
var LINE = done ? LINETHROUGH : "";

const position = "beforeend";
const item = `
                <li class="item">
                    <i class="${DONE}" job="comlete" id="${id}"></i>
                    <p class="text ${LINE}">${todo}</p>
                    <i class="far fa-trash-alt flex-end" job="delete" id="${id}"></i>
                </li>`;
list.insertAdjacentHTML(position, item);
};

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
            id++;
        };
        input.value = "";
    }
});

//funcion completeToDo 
