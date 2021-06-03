//choose elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById('date');
const LIST = document.getElementById('list');
const inpute = document.getElementById('inpute');

//set the date

const today = new Date();
const options = {weekday: "long", month: "short", day: "numeric"};
dateElement.innerHTML = today.toLocaleDateString("en-JP", options);