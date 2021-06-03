//choose elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById('date');
const LIST = document.getElementById('list');
const inpute = document.getElementById('inpute');

//classes name

const CHECK = "far fa-check-circle";
const UNCHECK = "fas fa-sync-alt";
const LINETHROUGH = "lineThrough";

//show todays date

const today = new Date();
const options = { weekday: "long", month: "short", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-JP", options);

//addToDo function


var addToDo = (todo) => {
    const position = "beforeend";
    const item = `
                <li class="item">
                    <i class="far fa-circle" job="complete" id="0"></i>
                    <p class="text">${todo}</p>
                    <i class="far fa-trash-alt flex-end" job="delete" id="0"></i>
                </li>`;
    list.insertAdjacentHTML(position, item);
};

addToDo("drink coffe");