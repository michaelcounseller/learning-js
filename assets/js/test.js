const playerName = prompt("What is your name?");
console.log(`Fighters name is ${playerName}`);

let playerHealth = 100; // Not redeclaring in the parameter so the value keeps changing
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Salem", "Kitty", "Pumpkin"];

const enemyAttack = 12;
let enemyHealth = 50;

let battle = function (playerName, enemyNames) {
  while (playerHealth > 0 && enemyHealth > 0) {
    const promptFight = prompt("Do you want to FIGHT or SKIP");
    if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = confirm("Do you really wish to skip?");
      if (confirmSkip) {
        playerMoney--;
        console.log(playerMoney);
        console.log("The player will skip");
        shop();
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
      shop();
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
};

let startGame = function (playerName, enemyNames) {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      alert(`Let the battle begin! Round ${i + 1}`);
      let currentEnemy = enemyNames[i];

      enemyHealth = 50;

      battle(playerName, currentEnemy);
    } else {
      alert("You have died");
      endGame();
      break;
    }
  }

  endGame();
};

let endGame = function () {
  if (playerHealth > 0) {
    alert(
      `You survived the game! Your score is how much money you earned. And you have earned...${playerMoney}!!`
    );
    let restartPrompt = confirm("Would you like to play again?");
    if (restartPrompt) {
      startGame();
    } else {
      alert("Thanks for playing!");
    }
  } else {
    alert("You have died! Game over.");
    let restartPrompt = confirm("Would you like to play again?");

    if (restartPrompt) {
      startGame();
    } else {
      alert("Thanks for playing!");
    }
  }
};

let shop = function () {
  let shopOptions = prompt(
    "Would you like to heal with a POTION or UPGRADE your magical weapoon? Please enter one of the choices: POTION, UPGRADE or LEAVE"
  );

  switch (shopOptions) {
    case "attack":
      if (playerMoney >= 2) {
        playerMoney -= 2;
        playerAttack += 2;
      } else {
        alert("'You can't afford that!")
        shop()
      }

      console.log(`money ${playerMoney}, ${playerAttack}`);
      break;
    case "potion":
      if (playerMoney >= 2) {
        playerMoney -= 2;
        playerHealth += 2;
      } else {
        alert("You can't afford that!")
        shop();
      }

      console.log(`money ${playerMoney}, ${playerHealth}`);
      break;
    case "leave":
      break;
    default:
      shop();
  }
};

startGame(playerName, enemyNames);
