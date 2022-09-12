const playerName = prompt("What is your name?");

console.log(`Fighters name is ${playerName}`);

let playerHealth = 100;
let playerAttack = 10;

let enemyNames = ["Salem", "Kitty", "Pumpkin"];

let enemyAttack = 12;
let enemyHealth = 50;

function battle(
  playerName,
  playerAttack,
  enemyNames,
  enemyAttack,
  enemyHealth
) {
  while (enemyHealth > 0) {
    playerHealth -= enemyAttack;
    console.log(
      `${enemyNames} hit ${playerName} for ${enemyAttack} leaving ${playerName} with ${playerHealth}`
    );

    if (playerHealth <= 0) {
      console.log("You have been defeated");
      break;
    }

    console.log(playerHealth);

    enemyHealth -= playerAttack;
    console.log(
      `${playerName} hit ${enemyNames} for ${playerAttack} leaving ${enemyNames} with ${enemyHealth}`
    );
  }
}

for (i = 0; i < enemyNames.length; i++) {


  battle(
    playerName,
    playerAttack,
    enemyNames[i],
    enemyAttack,
    enemyHealth
  );
}
