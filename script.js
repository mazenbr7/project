
const moves = document.getElementById ('moves-count');
const timevalue = document.getElementById ("time");
const   gameArea = document.getElementById ("start");
const stopButton = document.getElementById ("stop");
const gamecontainer = document.getElementById ("game-container");
const result = document.getElementById ("result");
const controls = document.getElementById ("controls-container");
let cards;
let interval;
let firstcard = false;
let secondcard = false;

//items array
const items = [{name:"bee", image: "bee.png"}]