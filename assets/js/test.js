const playerName = prompt("What is your name?");
console.log(`Fighters name is ${playerName}`);

let playerHealth = 100; // Not redeclaring in the parameter so the value keeps changing
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Salem", "Kitty", "Pumpkin"];

let enemyAttack = randomNumber(11, 10);
let enemyHealth;

let battle = function (playerName, enemyNames) {
  while (playerHealth > 0 && enemyHealth > 0) {
    const promptFight = prompt("Do you want to FIGHT or SKIP");
    if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = confirm("Do you really wish to skip?");
      if (confirmSkip) {
        playerMoney = Math.max(0, playerMoney - 7)
        console.log(playerMoney);
        console.log("The player will skip");
        shop();
        break;
      }
    }

    enemyHealth = Math.max(0, enemyHealth - enemyAttack) // It will return whatever is the highest number, and 0 always being a choice it will never go down to the negatives
    console.log(
      `${playerName} hit ${enemyNames} for ${playerAttack} leaving ${enemyNames} with ${enemyHealth}`
    );

    console.log(enemyHealth);

    if (enemyHealth <= 0) {
      console.log(`${enemyNames} has been defeated`);
      playerMoney += 10
      console.log(playerMoney)
      shop();
      break;
    }

    playerHealth = Math.max(0, playerHealth - enemyAttack) // Same with enemyHealth, the value will never be negative
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

      enemyHealth = randomNumber(); 
      console.log(enemyHealth)

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
      if (playerMoney >= 5) {
        playerMoney = Math.max(0, playerMoney - 5);
        playerAttack += 2;
      } else {
        alert("'You can't afford that!")
        shop()
      }

      console.log(`money ${playerMoney}, ${playerAttack}`);
      break;
    case "potion":
      if (playerMoney >= 5) {
        playerMoney = Math.max(0, playerMoney - 5);
        playerHealth += 2;
      } else {
        alert("You can't afford that!");
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

let randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min); //floor will always round the number down to a whole number while round will either do up or down. And adding '+ 40' at the end will make the default value 40 even when the random number hits 0
    //ex. Math.floor(Math.random() * (60 - 40 + 1) + 40)
  return value
}

startGame(playerName, enemyNames);
