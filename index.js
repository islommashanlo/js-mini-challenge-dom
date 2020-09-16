/***** Deliverable 1 *****/
const header = document.getElementById("header");
console.log("Here's your header:", header);
/***** Deliverable 2 *****/

header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS.length)

PLAYERS;
let p;
for (p in PLAYERS) {
let playerClass = document.createElement("div");
let playerName = document.createElement("h3");
let playerImage = document.createElement("img");
let playerContainer = document.getElementsByClassName("player-container");
playerClass.setAttribute("class", "player");
playerClass.setAttribute("data-number", `${PLAYERS[p].number}`);
playerClass.appendChild(playerName);
playerName.innerHTML = `${PLAYERS[p].name} (<em>${PLAYERS[p].nickname}</em>)`;
playerImage.setAttribute("src", `${PLAYERS[p].photo}`);
playerImage.setAttribute("alt", `${PLAYERS[p].name}`);
playerClass.appendChild(playerImage);
playerContainer[0].appendChild(playerClass);
};

let removeUnwanted = document.querySelector('div[data-number="7"]');
removeUnwanted.remove();

// for (p = 0; p < PLAYERS.length; p += p) {
// }

/***** Deliverable 4 *****/ 