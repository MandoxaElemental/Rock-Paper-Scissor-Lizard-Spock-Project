let PlayerChoice = "";
let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissor = document.getElementById("scissor");
let Lizard = document.getElementById("lizard");
let Spock = document.getElementById("spock");
let EndResult = document.getElementById("result")
let CPUChoice = "";
let Result = "";
let Counter = 0;
let RoundInt = 0;
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
let ModeBackBtn = document.getElementById("modeBack")
let SetMode = "";
let OneVsOne = document.getElementById("oneVsOne")
let OneVsCPU = document.getElementById("oneVsCPU")
let Winner = document.getElementById("winner")

let OneVOneBtn = document.getElementById("1v1")
let OneVCPUBtn = document.getElementById("1vCPU")
let RoundsBackBtn = document.getElementById("roundsBack")
let QMBtn = document.getElementById("QM")
let BoFiveBtn = document.getElementById("BoFive")
let BoSevenBtn = document.getElementById("BoSeven")
let GameplayBackBtn = document.getElementById("gameplayBack")

let RoundCounter = document.getElementById("RoundCounter")
let Player1Score = document.getElementById("Player1Score")
let Player2Score = document.getElementById("Player2Score")

let PlayerOrCPU = document.getElementById("PlayerOrCPU")

// Pages
let Homepage = document.getElementById("homepage");
let MainMenu = document.getElementById("mainMenu");
let Gameplay = document.getElementById("gameplay");
let Mode = document.getElementById("mode")
let Rounds = document.getElementById("rounds")

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
    MainMenu.className = "fadeIn mainMenu"
  });
NewGame.addEventListener("click", function () {
    MainMenu.className = "hidden";
    Mode.className = "fadeIn mode";
    OneVsOne.className = "slideRight";
    OneVsCPU.className = "slideLeft";
  });
HowToPlay.addEventListener("click", function () {
    Popover.className = "slideUp"
  });
ModeBackBtn.addEventListener("click", function () {
    Mode.className = "hidden"
    MainMenu.className = "fadeIn mainMenu"
    OneVsOne.className = "";
    OneVsCPU.className = "";
  });
OneVOneBtn.addEventListener("click", function () {
    SetMode = "Player"
    Mode.className = "hidden"
    Rounds.className = "fadeIn rounds"
    console.log(SetMode)
    OneVsOne.className = "";
    OneVsCPU.className = "";
  });
OneVCPUBtn.addEventListener("click", function () {
    SetMode = "Computer"
    Mode.className = "hidden"
    Rounds.className = "fadeIn rounds"
    console.log(SetMode)
    OneVsOne.className = "";
    OneVsCPU.className = "";
  });
RoundsBackBtn.addEventListener("click", function () {
    Rounds.className = "hidden"
    Mode.className = "fadeIn mode"
    SetMode = ""
    console.log(SetMode)
    OneVsOne.className = "slideRight";
    OneVsCPU.className = "slideLeft";
});
QMBtn.addEventListener("click", function () {
    RoundInt = 1;
    Rounds.className = "hidden"
    Gameplay.className = "fadeIn"
    console.log(RoundInt)
    PlayerVsComputer()
});
BoFiveBtn.addEventListener("click", function () {
    RoundInt = 5;
    Rounds.className = "hidden"
    Gameplay.className = "fadeIn"
    console.log(RoundInt)
    PlayerVsComputer()
});
BoSevenBtn.addEventListener("click", function () {
    RoundInt = 7;
    Rounds.className = "hidden"
    Gameplay.className = "fadeIn"
    console.log(RoundInt)
    PlayerVsComputer()
});
GameplayBackBtn.addEventListener("click", function () {
    Gameplay.className = "hidden"
    MainMenu.className = "fadeIn mainMenu"
    PlayerChoice = ""
    CPUChoice = ""
    Counter = 0;
    RoundCounter.innerText = "Round:" + Counter;
    Player1Score.innerText = "Score - 0"
    PlayerOneScore = 0
    Player2Score.innerText = "Score - 0"
    PlayerTwoScore = 0
    Winner.innerText = ""

  });

const getCPU = async () => {
  const response = await fetch(
    "https://greinaresrpsls-f0gkb5h3ftcbe2e3.westus-01.azurewebsites.net/gameplay/RPSLS"
  );
  const data = await response.text();
  CPUChoice = data;
  GameResult();
};

function PlayerVsComputer(){
    if (SetMode == "Player"){
        document.getElementById('PlayerOrCPU').src="../assets/VSSilver.png";
    } else if (SetMode == "Computer"){
        document.getElementById('PlayerOrCPU').src="../assets/VSThorton.png";
    }
}

function WinCon(){
    if(PlayerOneScore > PlayerTwoScore){
        Winner.innerText = "Player 1 Wins"
    } else{
        Winner.innerText = "Player 2 Wins"
    }
}

function GameOver(){
    if(Counter === RoundInt){
        if(RoundInt == 1){
            WinCon()
        } else if (RoundInt == 5){
            WinCon()
        } else if (RoundInt == 7){
            WinCon()
        }
    }
}

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
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      WinCon()
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
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      WinCon()
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
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      WinCon()
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
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      WinCon()
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
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      WinCon()
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
  GameOver()
});
Paper.addEventListener("click", function () {
  PlayerChoice = "Scyther";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
  GameOver()
});
Scissor.addEventListener("click", function () {
  PlayerChoice = "Scizor";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
  GameOver()
});
Lizard.addEventListener("click", function () {
  PlayerChoice = "Scrafty";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
  GameOver()
});
Spock.addEventListener("click", function () {
  PlayerChoice = "Mewtwo";
  getCPU();
  console.log("Games Played: " + Counter)
  console.log("Player 1 - " + PlayerOneScore)
  console.log("Player 2 - " + PlayerTwoScore)
});