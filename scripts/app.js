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
  console.log(data);
};

function GameResult() {
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
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      }
      break;

    case "Scizor":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      }
      break;

    case "Scrafty":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU TIE`;
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      }
      break;

    case "Mewtwo":
      if (CPUChoice == "Kleavor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      } else if (CPUChoice == "Scyther") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Scizor") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU WIN`;
      } else if (CPUChoice == "Scrafty") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; YOU LOSE`;
      } else if (CPUChoice == "Mewtwo") {
        Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; TIE GAME`;
      }
      break;

    case "Inteleon":
      Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; GUN BEATS EVERYTHING; YOU WIN`;
      break;

    default:
      Result = "Error";
      break;
  }
}

Rock.addEventListener("click", function () {
  let PlayerChoice = "Kleavor";
  CPUChoice = getCPU();
  console.log(PlayerChoice);
  console.log(CPUChoice);
  GameResult();
  console.log(Result);
});
Paper.addEventListener("click", function () {
  let PlayerChoice = "Scyther";
  CPUChoice = getCPU();
  console.log(PlayerChoice);
  console.log(CPUChoice);
  GameResult();
  console.log(Result);
});
Scissor.addEventListener("click", function () {
  let PlayerChoice = "Scizor";
  CPUChoice = getCPU();
  console.log(PlayerChoice);
  console.log(CPUChoice);
  GameResult();
  console.log(Result);
});
Lizard.addEventListener("click", function () {
  let PlayerChoice = "Scrafty";
  CPUChoice = getCPU();
  console.log(PlayerChoice);
  console.log(CPUChoice);
  GameResult();
  console.log(Result);
});
Spock.addEventListener("click", function () {
  let PlayerChoice = "Mewtwo";
  CPUChoice = getCPU();
  console.log(PlayerChoice);
  console.log(CPUChoice);
  GameResult();
  console.log(Result);
});
