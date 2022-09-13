const playerName = prompt("What is your name?");
console.log(`Fighters name is ${playerName}`);

let playerInfo = {
  health: 100,
  attack: 10,
  money: 10,

  reset: function () {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },

  upgradeAttack: function () {
    if (this.money >= 5) {
      this.attack += 5;
      this.money = Math.max(0, this.money - 5);
    } else {
      alert("You CAN'T AFFORD that!");
      shop();
    }
  },

  upgradeHealth: function () {
    if (this.money >= 7) {
      this.health += 20;
      this.money = Math.max(0, this.money - 5);
    } else {
      alert("You CAN'T AFFORD that!");
      shop();
    }
  },
};

function Enemy(name, attack, health) {
  this.name = name;
  this.attack = attack;
  this.health = health;
}

let enemy1 = new Enemy("Salem", randomNumber(11, 10), randomNumber(60, 40));
let enemy2 = new Enemy("Kitty", randomNumber(11, 10), randomNumber(60, 40));
let enemy3 = new Enemy("Pumpkin", randomNumber(11, 10), randomNumber(60, 40));

console.log(enemy1);

let enemies = [enemy1, enemy2, enemy2];

let battle = function (playerName, enemies) {
  while (playerInfo.health > 0 && enemies.health > 0) {
    const promptFight = prompt("Do you want to FIGHT or SKIP");
    if (promptFight === "skip" || promptFight === "SKIP") {
      let confirmSkip = confirm("Do you really wish to skip?");
      if (confirmSkip) {
        playerInfo.money = Math.max(0, playerInfo.money - 7);
        console.log(playerInfo.money);
        console.log("The player will skip");
        shop();
        break;
      }
    }

    enemies.health = Math.max(0, enemies.health - playerInfo.attack); // It will return whatever is the highest number, and 0 always being a choice it will never go down to the negatives
    console.log(
      `${playerName} hit ${enemies.name} for ${playerInfo.attack} leaving ${enemies.name} with ${enemies.health}`
    );

    console.log(enemies.health);

    if (enemies.health <= 0) {
      console.log(`${enemies.name} has been defeated`);
      playerInfo.money += 10;
      console.log(playerInfo.money);
      shop();
      break;
    }

    playerInfo.health = Math.max(0, playerInfo.health - enemies.attack); // Same with enemyHealth, the value will never be negative
    console.log(
      `${enemies.name} hit ${playerName} for ${enemies.attack} leaving ${playerName} with ${playerInfo.health}`
    );

    console.log(playerInfo.health);

    if (playerInfo.health <= 0) {
      console.log("You have been defeated");
      break;
    }

    console.log(playerInfo.health, enemies.health);
  }
};

let startGame = function (playerName, enemies) {
  playerInfo.reset();

  for (i = 0; i < enemies.length; i++) {
    if (playerInfo.health > 0) {
      alert(`Let the battle begin! Round ${i + 1}`);
      let currentEnemy = enemies[i];

      enemies[i].health = randomNumber(60, 40);

      console.log(
        `${enemies[i].name} has ${enemies[i].health} health and ${enemies[i].attack} attack`
      );

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
  if (playerInfo.health > 0) {
    alert(
      `You survived the game! Your score is how much money you earned. And you have earned...${playerInfo.money}!!`
    );
    let restartPrompt = confirm("Would you like to play again?");
    if (restartPrompt) {
      startGame(playerName, enemies);
    } else {
      alert("Thanks for playing!");
    }
  } else {
    alert("You have died! Game over.");
    let restartPrompt = confirm("Would you like to play again?");

    if (restartPrompt) {
      startGame(playerName, enemies);
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
      playerInfo.upgradeAttack()
      console.log(`money ${playerInfo.money}, ${playerInfo.attack}`);
      break;
    case "potion":
      playerInfo.upgradeHealth()
      console.log(`money ${playerInfo.money}, ${playerInfo.health}`);
      break;
    case "leave":
      break;
    default:
      shop();
  }
};

function randomNumber(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min); //floor will always round the number down to a whole number while round will either do up or down. And adding '+ 40' at the end will make the default value 40 even when the random number hits 0
  //ex. Math.floor(Math.random() * (60 - 40 + 1) + 40)
  return value;
}

startGame(playerName, enemies);
