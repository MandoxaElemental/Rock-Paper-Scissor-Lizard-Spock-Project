let PlayerChoice = "";
let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissor = document.getElementById("scissor");
let Lizard = document.getElementById("lizard");
let Spock = document.getElementById("spock");
let EndResult = document.getElementById("result")
let CPUChoice = "";
let Result = "";
let Counter = 0
let PlayerOneScore = 0
let PlayerTwoScore = 0
let Start = document.getElementById("Start")
let homeImg1 = document.getElementById("homeImg1")
let homeImg2 = document.getElementById("homeImg2")
let homeImg3 = document.getElementById("homeImg3")
let homeImg4 = document.getElementById("homeImg4")
let homeImg5 = document.getElementById("homeImg5")
let menuImg1 = document.getElementById("menuImg1")
let menuImg2 = document.getElementById("menuImg2")
let menuImg3 = document.getElementById("menuImg3")
let menuImg4 = document.getElementById("menuImg4")
let menuImg5 = document.getElementById("menuImg5")
let HowToPlay = document.getElementById("howToPlay")
let NewGame = document.getElementById("newGame")
let Popover = document.getElementById("howToPlayPopover")

// Pages
let Homepage = document.getElementById("homepage");
let MainMenu = document.getElementById("mainMenu");
let Gameplay = document.getElementById("gameplay");

Homepage.className = "fadeIn homepage"
homeImg1.className = "pulse homeImg"
homeImg2.className = "pulse homeImg"
homeImg3.className = "pulse homeImg"
homeImg4.className = "pulse homeImg"
homeImg5.className = "pulse homeImg"
menuImg1.className = "pulse homeImg"
menuImg2.className = "pulse homeImg"
menuImg3.className = "pulse homeImg"
menuImg4.className = "pulse homeImg"
menuImg5.className = "pulse homeImg"

Start.addEventListener("click", function () {
    Homepage.className = "hidden"
    MainMenu.className = "slideDown mainMenu"
  });
HowToPlay.addEventListener("click", function () {
    Popover.className = "slideUp"
  });

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
      EndResult.innerText = Result;
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
      EndResult.innerText = Result;
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
      EndResult.innerText = Result;
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
      EndResult.innerText = Result;
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
      EndResult.innerText = Result;
      break;

    case "Inteleon":
      Result = `You have picked ${PlayerChoice}; your Opponent Picked ${CPUChoice}; GUN BEATS EVERYTHING; YOU WIN`;
      EndResult.innerText = Result;
      break;

    default:
      Result = "ERROR: This is not Working";
      EndResult.innerText = Result;
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
