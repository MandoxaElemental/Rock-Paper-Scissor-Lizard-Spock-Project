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
let Round1 = document.getElementById("round1")
let Round2 = document.getElementById("round2")
let Round3 = document.getElementById("round3")

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
let PlayerOneTurn = true;

let PokedexBtn = document.getElementById("pokedexBtn")
let PokedexBackBtn = document.getElementById("pokedexBack")

// Pages
let Homepage = document.getElementById("homepage");
let MainMenu = document.getElementById("mainMenu");
let Gameplay = document.getElementById("gameplay");
let Mode = document.getElementById("mode")
let Rounds = document.getElementById("rounds")
let Pokedex = document.getElementById("pokedex")



// Pokedex
let KleavorDex = document.getElementById("KleavorDex")
let ScytherDex = document.getElementById("ScytherDex")
let ScizorDex = document.getElementById("ScizorDex")
let ScraftyDex = document.getElementById("ScraftyDex")
let MewtwoDex = document.getElementById("MewtwoDex")
let InteleonDex = document.getElementById("InteleonDex")
let KleavorInfo = document.getElementById("KleavorInfo")
let ScytherInfo = document.getElementById("ScytherInfo")
let ScizorInfo = document.getElementById("ScizorInfo")
let ScraftyInfo = document.getElementById("ScraftyInfo")
let MewtwoInfo = document.getElementById("MewtwoInfo")
let InteleonInfo = document.getElementById("InteleonInfo")

//audio
let KleavorAudio = document.getElementById("kleavorAudio")
let ScytherAudio = document.getElementById("scytherAudio")
let ScizorAudio = document.getElementById("scizorAudio")
let ScraftyAudio = document.getElementById("scraftyAudio")
let MewtwoAudio = document.getElementById("mewtwoAudio")
let InteleonAudio = document.getElementById("inteleonAudio")
let FluteAudio = document.getElementById("fluteAudio")
let SelectAudio = document.getElementById("selectAudio")

KleavorDex.addEventListener("click", function () {
    KleavorInfo.className = "slideUp dex-info"
    KleavorAudio.play();
  });
ScytherDex.addEventListener("click", function () {
    ScytherInfo.className = "slideUp dex-info"
    ScytherAudio.play();
  });
ScizorDex.addEventListener("click", function () {
    ScizorInfo.className = "slideUp dex-info"
    ScizorAudio.play();
  });
ScraftyDex.addEventListener("click", function () {
    ScraftyInfo.className = "slideUp dex-info"
    ScraftyAudio.play();
  });
MewtwoDex.addEventListener("click", function () {
    MewtwoInfo.className = "slideUp dex-info"
    MewtwoAudio.play();
  });
InteleonDex.addEventListener("click", function () {
    InteleonInfo.className = "slideUp dex-info"
    InteleonAudio.play();
  });


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
    FluteAudio.play()
  });
NewGame.addEventListener("click", function () {
    MainMenu.className = "hidden";
    Mode.className = "fadeIn mode";
    OneVsOne.className = "slideRight";
    OneVsCPU.className = "slideLeft";
    SelectAudio.play();
  });

PokedexBtn.addEventListener("click", function () {
    MainMenu.className = "hidden";
    Pokedex.className = "pokedex fadeIn";
    SelectAudio.play();
  });
PokedexBackBtn.addEventListener("click", function () {
    Pokedex.className = "hidden"
    MainMenu.className = "fadeIn mainMenu"
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
    SelectAudio.play();
    SetMode = "Player"
    Mode.className = "hidden"
    Rounds.className = "fadeIn rounds"
    Round1.className = "slideRight"
    Round2.className = "slideDown"
    Round3.className = "slideLeft"
    OneVsOne.className = "";
    OneVsCPU.className = "";
  });
OneVCPUBtn.addEventListener("click", function () {
    SelectAudio.play();
    SetMode = "Computer"
    Mode.className = "hidden"
    Rounds.className = "fadeIn rounds"
    Round1.className = "slideRight"
    Round2.className = "slideDown"
    Round3.className = "slideLeft"
    OneVsOne.className = "";
    OneVsCPU.className = "";
  });
RoundsBackBtn.addEventListener("click", function () {
    Rounds.className = "hidden"
    Mode.className = "fadeIn mode"
    SetMode = ""
    OneVsOne.className = "slideRight";
    OneVsCPU.className = "slideLeft";
    Round1.className = ""
    Round2.className = ""
    Round3.className = ""
});
QMBtn.addEventListener("click", function () {
    RoundInt = 1;
    Rounds.className = "hidden"
    Gameplay.className = "fadeIn"
    SelectAudio.play();
    PlayerVsComputer()
});
BoFiveBtn.addEventListener("click", function () {
    RoundInt = 5;
    Rounds.className = "hidden"
    Gameplay.className = "fadeIn"
    SelectAudio.play();
    PlayerVsComputer()
});
BoSevenBtn.addEventListener("click", function () {
    RoundInt = 7;
    Rounds.className = "hidden"
    Gameplay.className = "fadeIn"
    SelectAudio.play();
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
    EndResult.innerText = ""
    Winner.innerText = ""
    Winner.className = "white"
    FluteAudio.play();
    EnableFunction()
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
        Winner.innerText = "It is Your Turn Player 1"
        Winner.className = "red"
        VsPlayer()
    } else if (SetMode == "Computer"){
        document.getElementById('PlayerOrCPU').src="../assets/VSThorton.png";
        VsComputer()
    }
}
PlayerVsComputer()

function WinCon(){
    if(PlayerOneScore > PlayerTwoScore){
        Winner.innerText = "Player 1 Wins"
    } else{
        Winner.innerText = "Player 2 Wins"
    }
    Winner.className = "white pulse"
}

function DisableFunction(){
    Rock.disabled = true
    Paper.disabled = true
    Scissor.disabled = true
    Lizard.disabled = true
    Spock.disabled = true
}

function EnableFunction(){
    Rock.disabled = false
    Paper.disabled = false
    Scissor.disabled = false
    Lizard.disabled = false
    Spock.disabled = false
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
        DisableFunction()
    }
}

function GameResult() {
  switch (PlayerChoice) {
    case "Kleavor":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
        }
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            ScytherAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            ScytherAudio.play()
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            KleavorAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            KleavorAudio.play();
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            KleavorAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            KleavorAudio.play();
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            MewtwoAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            MewtwoAudio.play();
        }
        PlayerTwoScore++
        Counter++
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      GameOver()
      break;

    case "Scyther":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            ScytherAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            ScytherAudio.play()
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
        }
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            ScizorAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            ScizorAudio.play()
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            ScraftyAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            ScraftyAudio.play()
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            ScytherAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            ScytherAudio.play()
        }
        PlayerOneScore++
        Counter++
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      GameOver()
      break;

    case "Scizor":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            KleavorAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            KleavorAudio.play();
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            ScizorAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            ScizorAudio.play()
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
        }
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            ScizorAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            ScizorAudio.play()
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            MewtwoAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            MewtwoAudio.play();
        }
        PlayerTwoScore++
        Counter++
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      GameOver()
      break;

    case "Scrafty":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            KleavorAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            KleavorAudio.play();
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            ScraftyAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            ScraftyAudio.play()
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            ScizorAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            ScizorAudio.play()
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
        }
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            ScraftyAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            ScraftyAudio.play()

        }
        PlayerOneScore++
        Counter++
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      GameOver()
      break;

    case "Mewtwo":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            MewtwoAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            MewtwoAudio.play();
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            ScytherAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            ScytherAudio.play()
        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU WIN THIS ROUND`;
            MewtwoAudio.play();
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 1 WINS THIS ROUND`;
            MewtwoAudio.play();
        }
        PlayerOneScore++
        Counter++
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; YOU LOSE THIS ROUND`;
            ScraftyAudio.play()
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; PLAYER 2 WINS THIS ROUND`;
            ScraftyAudio.play()

        }
        PlayerTwoScore++
        Counter++
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer"){
            Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
        } else if (SetMode == "Player"){
            Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
        }
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore
      Player2Score.innerText = "Score - " + PlayerTwoScore
      GameOver()
      break;

    case "Inteleon":
      Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; GUN BEATS EVERYTHING; YOU WIN`;
      EndResult.innerText = Result;
      break;

    default:
      Result = "ERROR: This is not Working";
      EndResult.innerText = Result;
      break;
  }
}
    Rock.addEventListener("click", function () {
        if (SetMode == "Player"){
            if(PlayerOneTurn === true){
                PlayerChoice = "Kleavor";
                PlayerOneTurn = false;
                Winner.innerText = "It is Your Turn Player 2"
                Winner.className = "blue"
            } else if (PlayerOneTurn == false){
                CPUChoice = "Kleavor";
                PlayerOneTurn = true;
                Winner.innerText = "It is Your Turn Player 1"
                Winner.className = "red"
                GameResult()
            }
        } else if (SetMode == "Computer"){        
            PlayerChoice = "Kleavor";
            getCPU();
            GameOver()
        }
      });
      Paper.addEventListener("click", function () {
        if (SetMode == "Player"){
            if(PlayerOneTurn === true){
                PlayerChoice = "Scyther";
                PlayerOneTurn = false;
                Winner.innerText = "It is Your Turn Player 2"
                Winner.className = "blue"
            } else if (PlayerOneTurn == false){
                CPUChoice = "Scyther";
                PlayerOneTurn = true;
                Winner.innerText = "It is Your Turn Player 1"
                Winner.className = "red"
                GameResult()
            }
        } else if (SetMode == "Computer"){        
            PlayerChoice = "Scyther";
            getCPU();
            GameOver()
        }
      });
      Scissor.addEventListener("click", function () {
        if (SetMode == "Player"){
            if(PlayerOneTurn === true){
                PlayerChoice = "Scizor";
                PlayerOneTurn = false;
                Winner.innerText = "It is Your Turn Player 2"
                Winner.className = "blue"
            } else if (PlayerOneTurn == false){
                CPUChoice = "Scizor";
                PlayerOneTurn = true;
                Winner.innerText = "It is Your Turn Player 1"
                Winner.className = "red"
                GameResult()
            }
        } else if (SetMode == "Computer"){        
            PlayerChoice = "Scizor";
            getCPU();
            GameOver()
        }
      });
      Lizard.addEventListener("click", function () {
        if (SetMode == "Player"){
            if(PlayerOneTurn === true){
                PlayerChoice = "Scrafty";
                PlayerOneTurn = false;
                Winner.innerText = "It is Your Turn Player 2"
                Winner.className = "blue"
            } else if (PlayerOneTurn == false){
                CPUChoice = "Scrafty";
                PlayerOneTurn = true;
                Winner.innerText = "It is Your Turn Player 1"
                Winner.className = "red"
                GameResult()
            }
        } else if (SetMode == "Computer"){        
            PlayerChoice = "Scrafty";
            getCPU();
            GameOver()
        }
      });
      Spock.addEventListener("click", function () {
        if (SetMode == "Player"){
            if(PlayerOneTurn === true){
                PlayerChoice = "Mewtwo";
                PlayerOneTurn = false;
                Winner.innerText = "It is Your Turn Player 2"
                Winner.className = "blue"
            } else if (PlayerOneTurn == false){
                CPUChoice = "Mewtwo";
                PlayerOneTurn = true;
                Winner.innerText = "It is Your Turn Player 1"
                Winner.className = "red"
                GameResult()
            }
        } else if (SetMode == "Computer"){        
            PlayerChoice = "Mewtwo";
            getCPU();
            GameOver()
        }
      });