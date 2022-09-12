const playerName = prompt("What is your name?");

console.log(`Fighters name is ${playerName}`);

let playerHealth = 100; // Not redeclaring in the parameter so the value keeps changing
const playerAttack = 10;
let playerMoney = 10

let enemyNames = ["Salem", "Kitty", "Pumpkin"];

const enemyAttack = 12;
let enemyHealth = 50;


function battle(
  playerAttack,
  playerName,
  enemyAttack,
  enemyHealth,
  enemyNames
) {
  while (playerHealth > 0 && enemyHealth > 0) {
    const promptFight = prompt("Do you want to FIGHT or SKIP");
    if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = confirm("Do you really wish to skip?");
      if (confirmSkip) {
        playerMoney--
        console.log(playerMoney)
        console.log("The player will skip");
        break;
      }
    }

    enemyHealth -= playerAttack;
    console.log(
      `${playerName} hit ${enemyNames} for ${playerAttack} leaving ${enemyNames} with ${enemyHealth}`
    );

    console.log(enemyHealth);

    if (enemyHealth <= 0) {
      console.log(`${enemyNames} has been defeated`);
      break;
    }

    playerHealth -= enemyAttack;
    console.log(
      `${enemyNames} hit ${playerName} for ${enemyAttack} leaving ${playerName} with ${playerHealth}`
    );

    console.log(playerHealth);

    if (playerHealth <= 0) {
      console.log("You have been defeated");
      break;
    }

    console.log(playerHealth, enemyHealth);
  }
}

for (i = 0; i < enemyNames.length; i++) {
  debugger
  
  console.log(enemyNames[i])
  console.log(i)
  let currentEnemy = enemyNames[i]
  console.log(currentEnemy)
  console.log(enemyNames[i])
  console.log(i)
  battle(playerAttack, playerName, enemyAttack, enemyHealth, currentEnemy);
}
