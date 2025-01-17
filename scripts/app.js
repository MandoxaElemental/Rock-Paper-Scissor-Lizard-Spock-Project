let PlayerChoice = "";
let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissor = document.getElementById("scissor");
let Lizard = document.getElementById("lizard");
let Spock = document.getElementById("spock");
let CPUChoice = "";
let Result = "";
let Counter = 0
let PlayerOneScore = 0
let PlayerTwoScore = 0

const getCPU = async () => {
  const response = await fetch(
    "https://greinaresrpsls-f0gkb5h3ftcbe2e3.westus-01.azurewebsites.net/gameplay/RPSLS"
  );
  const data = await response.text();
  CPUChoice = data;
  GameResult();
};

function GameResult() {
  console.log(PlayerChoice);
  console.log(CPUChoice);
  switch (PlayerChoice) {
    case "Kleavor":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      }
      break;

    case "Scyther":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      }
      break;

    case "Scizor":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      }
      break;

    case "Scrafty":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU TIE`;
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      }
      break;

    case "Mewtwo":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      }
      break;

    case "Inteleon":
      Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; GUN BEATS EVERYTHING; YOU WIN`;
      break;

    default:
      Result = "ERROR: This is not Working";
      break;
  }

  console.log(Result)
}

Rock.addEventListener("click", function () {
  PlayerChoice = "Kleavor";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
});
Paper.addEventListener("click", function () {
  PlayerChoice = "Scyther";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
});
Scissor.addEventListener("click", function () {
  PlayerChoice = "Scizor";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
});
Lizard.addEventListener("click", function () {
  PlayerChoice = "Scrafty";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
});
Spock.addEventListener("click", function () {
  PlayerChoice = "Mewtwo";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
});
