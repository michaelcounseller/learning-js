// console.log(playerName, playerAttack, playerHealth);

const playerName = prompt("What is your name magical one?");
const enemyNames = ["Salem", "Kitty", "Pumpkin"];

let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyAttack = 12;

function start(playerName, enemyNames) {
  let promptStart = prompt("Would you like to FIGHT or RUN?");

  switch (promptStart) {
    case "FIGHT":
    case "fight":
      alert(`${playerName} has chosen to fight`);
      battle(playerName, enemyNames);
      break;
    case "RUN":
    case "run":
      const confirmSkip = confirm("You sure you want to run?");
      switch (confirmSkip) {
        case true:
          alert("Player has left the battle");
          break;
        default:
          start(playerName, enemyNames);
          break;
      }
    default:
      const incorrectAns = confirm("You must choose FIGHT OR RUN. Try again?");
      switch (incorrectAns) {
        case true:
          start(playerName, enemyNames);
          break;
        default:
          alert("GOODBYE");
          break;
      }
  }
}

start(playerName, enemyNames);

function battle(playerName, enemyNames, enemyHealth) {
  while (enemyHealth > 0) {
    start(playerName);
    playerHealth -= enemyAttack;
    console.log(`${enemyNames} attacked ${playerName} for ${enemyAttack}..`);
    if (playerHealth <= 0) {
      alert(`${playerName} has been defeated`);
      return;
    } else {
      alert(`${playerName} still has ${playerHealth} left`);
    }

    console.log(playerHealth);

    enemyHealth -= playerAttack;
    console.log(`${playerName} attacked ${enemyNames} for ${playerAttack}..`);

    if (enemyHealth <= 0) {
      alert(`${enemyNames} has been defeated`);
    } else {
      alert(`${enemyNames} still has ${enemyHealth} left`);
    }

    console.log(playerHealth, enemyHealth);
  }
}

for (i = 0; i < enemyNames.length; i++) {
  let enemyHealth = 50;

  battle(playerName, enemyNames[i], enemyHealth);
}
