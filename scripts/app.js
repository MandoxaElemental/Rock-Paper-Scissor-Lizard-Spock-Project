let PlayerChoice = "";
let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissor = document.getElementById("scissor");
let Lizard = document.getElementById("lizard");
let Spock = document.getElementById("spock");
let Gun = document.getElementById("gun");
let InteleonBtn = document.getElementById("inteleonBtn")
let EndResult = document.getElementById("result");
let CPUChoice = "";
let Result = "";
let Counter = 0;
let RoundInt = 0;
let PlayerOneScore = 0;
let PlayerTwoScore = 0;
let Start = document.getElementById("Start");
let homeImg1 = document.getElementById("homeImg1");
let homeImg2 = document.getElementById("homeImg2");
let homeImg3 = document.getElementById("homeImg3");
let homeImg4 = document.getElementById("homeImg4");
let homeImg5 = document.getElementById("homeImg5");
let menuImg1 = document.getElementById("menuImg1");
let menuImg2 = document.getElementById("menuImg2");
let menuImg3 = document.getElementById("menuImg3");
let menuImg4 = document.getElementById("menuImg4");
let menuImg5 = document.getElementById("menuImg5");
let HowToPlay = document.getElementById("howToPlay");
let NewGame = document.getElementById("newGame");
let Popover = document.getElementById("howToPlayPopover");
let ModeBackBtn = document.getElementById("modeBack");
let SetMode = "";
let OneVsOne = document.getElementById("oneVsOne");
let OneVsCPU = document.getElementById("oneVsCPU");
let Winner = document.getElementById("winner");
let Round1 = document.getElementById("round1");
let Round2 = document.getElementById("round2");
let Round3 = document.getElementById("round3");

let OneVOneBtn = document.getElementById("1v1");
let OneVCPUBtn = document.getElementById("1vCPU");
let RoundsBackBtn = document.getElementById("roundsBack");
let QMBtn = document.getElementById("QM");
let BoFiveBtn = document.getElementById("BoFive");
let BoSevenBtn = document.getElementById("BoSeven");
let GameplayBackBtn = document.getElementById("gameplayBack");

let RoundCounter = document.getElementById("RoundCounter");
let Player1Score = document.getElementById("Player1Score");
let Player2Score = document.getElementById("Player2Score");

let PlayerOrCPU = document.getElementById("PlayerOrCPU");
let PlayerOneTurn = true;

let PokedexBtn = document.getElementById("pokedexBtn");
let PokedexBackBtn = document.getElementById("pokedexBack");

// Pages
let Homepage = document.getElementById("homepage");
let MainMenu = document.getElementById("mainMenu");
let Gameplay = document.getElementById("gameplay");
let Mode = document.getElementById("mode");
let Rounds = document.getElementById("rounds");
let Pokedex = document.getElementById("pokedex");

// Pokedex
let KleavorDex = document.getElementById("KleavorDex");
let ScytherDex = document.getElementById("ScytherDex");
let ScizorDex = document.getElementById("ScizorDex");
let ScraftyDex = document.getElementById("ScraftyDex");
let MewtwoDex = document.getElementById("MewtwoDex");
let InteleonDex = document.getElementById("InteleonDex");
let KleavorInfo = document.getElementById("KleavorInfo");
let ScytherInfo = document.getElementById("ScytherInfo");
let ScizorInfo = document.getElementById("ScizorInfo");
let ScraftyInfo = document.getElementById("ScraftyInfo");
let MewtwoInfo = document.getElementById("MewtwoInfo");
let InteleonInfo = document.getElementById("InteleonInfo");

//audio
let KleavorAudio = document.getElementById("kleavorAudio");
let ScytherAudio = document.getElementById("scytherAudio");
let ScizorAudio = document.getElementById("scizorAudio");
let ScraftyAudio = document.getElementById("scraftyAudio");
let MewtwoAudio = document.getElementById("mewtwoAudio");
let InteleonAudio = document.getElementById("inteleonAudio");
let FluteAudio = document.getElementById("fluteAudio");
let SelectAudio = document.getElementById("selectAudio");
let TieAudio = document.getElementById("tieAudio");

KleavorDex.addEventListener("click", function () {
  KleavorInfo.className = "slideUp dex-info";
  KleavorAudio.play();
});
ScytherDex.addEventListener("click", function () {
  ScytherInfo.className = "slideUp dex-info";
  ScytherAudio.play();
});
ScizorDex.addEventListener("click", function () {
  ScizorInfo.className = "slideUp dex-info";
  ScizorAudio.play();
});
ScraftyDex.addEventListener("click", function () {
  ScraftyInfo.className = "slideUp dex-info";
  ScraftyAudio.play();
});
MewtwoDex.addEventListener("click", function () {
  MewtwoInfo.className = "slideUp dex-info";
  MewtwoAudio.play();
});
InteleonDex.addEventListener("click", function () {
  InteleonInfo.className = "slideUp dex-info";
  InteleonAudio.play();
});

Homepage.className = "fadeIn homepage";
homeImg1.className = "pulse homeImg";
homeImg2.className = "pulse homeImg";
homeImg3.className = "pulse homeImg";
homeImg4.className = "pulse homeImg";
homeImg5.className = "pulse homeImg";
menuImg1.className = "pulse homeImg";
menuImg2.className = "pulse homeImg";
menuImg3.className = "pulse homeImg";
menuImg4.className = "pulse homeImg";
menuImg5.className = "pulse homeImg";

Start.addEventListener("click", function () {
  Homepage.className = "hidden";
  MainMenu.className = "fadeIn mainMenu";
  FluteAudio.play();
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
  Pokedex.className = "hidden";
  MainMenu.className = "fadeIn mainMenu";
});

HowToPlay.addEventListener("click", function () {
  Popover.className = "slideUp";
});
ModeBackBtn.addEventListener("click", function () {
  Mode.className = "hidden";
  MainMenu.className = "fadeIn mainMenu";
  OneVsOne.className = "";
  OneVsCPU.className = "";
});
OneVOneBtn.addEventListener("click", function () {
  SelectAudio.play();
  SetMode = "Player";
  Mode.className = "hidden";
  Rounds.className = "fadeIn rounds";
  Round1.className = "slideRight";
  Round2.className = "slideDown";
  Round3.className = "slideLeft";
  OneVsOne.className = "";
  OneVsCPU.className = "";
});
OneVCPUBtn.addEventListener("click", function () {
  SelectAudio.play();
  SetMode = "Computer";
  Mode.className = "hidden";
  Rounds.className = "fadeIn rounds";
  Round1.className = "slideRight";
  Round2.className = "slideDown";
  Round3.className = "slideLeft";
  OneVsOne.className = "";
  OneVsCPU.className = "";
});
RoundsBackBtn.addEventListener("click", function () {
  Rounds.className = "hidden";
  Mode.className = "fadeIn mode";
  SetMode = "";
  OneVsOne.className = "slideRight";
  OneVsCPU.className = "slideLeft";
  Round1.className = "";
  Round2.className = "";
  Round3.className = "";
});
QMBtn.addEventListener("click", function () {
  RoundInt = 1;
  Rounds.className = "hidden";
  Gameplay.className = "fadeIn";
  SelectAudio.play();
  PlayerVsComputer();
});
BoFiveBtn.addEventListener("click", function () {
  RoundInt = 5;
  Rounds.className = "hidden";
  Gameplay.className = "fadeIn";
  SelectAudio.play();
  PlayerVsComputer();
});
BoSevenBtn.addEventListener("click", function () {
  RoundInt = 7;
  Rounds.className = "hidden";
  Gameplay.className = "fadeIn";
  SelectAudio.play();
  PlayerVsComputer();
});
GameplayBackBtn.addEventListener("click", function () {
  Gameplay.className = "hidden";
  MainMenu.className = "fadeIn mainMenu";
  PlayerChoice = "";
  CPUChoice = "";
  Counter = 0;
  RoundCounter.innerText = "Round:" + Counter;
  Player1Score.innerText = "Score - 0";
  PlayerOneScore = 0;
  Player2Score.innerText = "Score - 0";
  PlayerTwoScore = 0;
  EndResult.innerText = "";
  Winner.innerText = "";
  Winner.className = "white";
  FluteAudio.play();
  EnableFunction();
});

const getCPU = async () => {
  const response = await fetch(
    "https://greinaresrpsls-f0gkb5h3ftcbe2e3.westus-01.azurewebsites.net/gameplay/RPSLS"
  );
  const data = await response.text();
  CPUChoice = data;
  GameResult();
};

function PlayerVsComputer() {
  if (SetMode == "Player") {
    Player2IconOptions();
    Winner.innerText = "It is Your Turn Player 1";
    Winner.className = "red";
    VsPlayer();
  } else if (SetMode == "Computer") {
    document.getElementById("PlayerOrCPU").src = "../assets/VSThorton.png";
    VsComputer();
  }
}
PlayerVsComputer();

function WinCon() {
  if (PlayerOneScore > PlayerTwoScore) {
    Winner.innerText = "Player 1 Wins";
  } else {
    Winner.innerText = "Player 2 Wins";
  }
  Winner.className = "white pulse";
}

function DisableFunction() {
  Rock.disabled = true;
  Paper.disabled = true;
  Scissor.disabled = true;
  Lizard.disabled = true;
  Spock.disabled = true;
  Gun.disabled = true
}

function EnableFunction() {
  Rock.disabled = false;
  Paper.disabled = false;
  Scissor.disabled = false;
  Lizard.disabled = false;
  Spock.disabled = false;
  Gun.disabled = false;
}

function GameOver() {
  if (Counter === RoundInt) {
    if (RoundInt == 1) {
      WinCon();
    } else if (RoundInt == 5) {
      WinCon();
    } else if (RoundInt == 7) {
      WinCon();
    }
    DisableFunction();
  }
}

function GameResult() {
  switch (PlayerChoice) {
    case "Kleavor":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        }
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCYTHER BEATS KLEAVOR; YOU LOSE THIS ROUND`;
          ScytherAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCYTHER BEATS KLEAVOR PLAYER 2 WINS THIS ROUND`;
          ScytherAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; KLEAVOR BEATS SCIZOR; YOU WIN THIS ROUND`;
          KleavorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; KLEAVOR BEATS SCIZOR; PLAYER 1 WINS THIS ROUND`;
          KleavorAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; KLEAVOR BEATS SCRAFTY; YOU WIN THIS ROUND`;
          KleavorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; KLEAVOR BEATS SCRAFTY; PLAYER 1 WINS THIS ROUND`;
          KleavorAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; MEWTWO BEATS KLEAVOR; YOU LOSE THIS ROUND`;
          MewtwoAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; MEWTWO BEATS KLEAVOR; PLAYER 2 WINS THIS ROUND`;
          MewtwoAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Inteleon") {
        Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; GUN BEATS EVERYTHING; PLAYER 2 WINS THIS ROUND`;
        InteleonAudio.play();
        PlayerTwoScore++;
        Counter++;
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore;
      Player2Score.innerText = "Score - " + PlayerTwoScore;
      GameOver();
      break;

    case "Scyther":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; KLEAVOR BEATS SCYTHER; YOU WIN THIS ROUND`;
          ScytherAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; KLEAVOR BEATS SCYTHER; PLAYER 1 WINS THIS ROUND`;
          ScytherAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        }
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCIZOR BEATS SCYTHER; YOU LOSE THIS ROUND`;
          ScizorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCIZOR BEATS SCYTHER; PLAYER 2 WINS THIS ROUND`;
          ScizorAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCRAFTY BEATS SCYTHER; YOU LOSE THIS ROUND`;
          ScraftyAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCRAFTY BEATS SCYTHER; PLAYER 2 WINS THIS ROUND`;
          ScraftyAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCYTHER BEATS MEWTWO; YOU WIN THIS ROUND`;
          ScytherAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCYTHER BEATS MEWTWO; PLAYER 1 WINS THIS ROUND`;
          ScytherAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Inteleon") {
        Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; GUN BEATS EVERYTHING; PLAYER 2 WINS THIS ROUND`;
        InteleonAudio.play();
        PlayerTwoScore++;
        Counter++;
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore;
      Player2Score.innerText = "Score - " + PlayerTwoScore;
      GameOver();
      break;

    case "Scizor":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; KLEAVOR BEATS SCIZOR; YOU LOSE THIS ROUND`;
          KleavorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; KLEAVOR BEATS SCIZOR; PLAYER 2 WINS THIS ROUND`;
          KleavorAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCIZOR BEATS SCYTHER; YOU WIN THIS ROUND`;
          ScizorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCIZOR BEATS SCYTHER; PLAYER 1 WINS THIS ROUND`;
          ScizorAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        }
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCIZOR BEATS SCRAFTY; YOU WIN THIS ROUND`;
          ScizorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCIZOR BEATS SCRAFTY; PLAYER 1 WINS THIS ROUND`;
          ScizorAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; MEWTWO BEATS SCIZOR; YOU LOSE THIS ROUND`;
          MewtwoAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; MEWTWO BEATS SCIZOR; PLAYER 2 WINS THIS ROUND`;
          MewtwoAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Inteleon") {
        Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; GUN BEATS EVERYTHING; PLAYER 2 WINS THIS ROUND`;
        InteleonAudio.play();
        PlayerTwoScore++;
        Counter++;
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore;
      Player2Score.innerText = "Score - " + PlayerTwoScore;
      GameOver();
      break;

    case "Scrafty":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; KLEAVOR BEATS SCRAFTY; YOU LOSE THIS ROUND`;
          KleavorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; KLEAVOR BEATS SCRAFTY; PLAYER 2 WINS THIS ROUND`;
          KleavorAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCRAFTY BEATS SCYTHER; YOU WIN THIS ROUND`;
          ScraftyAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCRAFTY BEATS SCYTHER; PLAYER 1 WINS THIS ROUND`;
          ScraftyAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCIZOR BEATS SCRAFTY; YOU LOSE THIS ROUND`;
          ScizorAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCIZOR BEATS SCRAFTY; PLAYER 2 WINS THIS ROUND`;
          ScizorAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        }
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCRAFTY BEATS MEWTWO; YOU WIN THIS ROUND`;
          ScraftyAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCRAFTY BEATS MEWTWO; PLAYER 1 WINS THIS ROUND`;
          ScraftyAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Inteleon") {
        Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; GUN BEATS EVERYTHING; PLAYER 2 WINS THIS ROUND`;
        InteleonAudio.play();
        PlayerTwoScore++;
        Counter++;
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore;
      Player2Score.innerText = "Score - " + PlayerTwoScore;
      GameOver();
      break;

    case "Mewtwo":
      if (CPUChoice == "Kleavor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; MEWTWO BEATS KLEAVOR; YOU WIN THIS ROUND`;
          MewtwoAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; MEWTWO BEATS KLEAVOR; PLAYER 1 WINS THIS ROUND`;
          MewtwoAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Scyther") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCYTHER BEATS MEWTWO; YOU LOSE THIS ROUND`;
          ScytherAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCYTHER BEATS MEWTWO; PLAYER 2 WINS THIS ROUND`;
          ScytherAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Scizor") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; MEWTWO BEATS SCIZOR; YOU WIN THIS ROUND`;
          MewtwoAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; MEWTWO BEATS SCIZOR; PLAYER 1 WINS THIS ROUND`;
          MewtwoAudio.play();
        }
        PlayerOneScore++;
        Counter++;
      } else if (CPUChoice == "Scrafty") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; SCRAFTY BEATS MEWTWO; YOU LOSE THIS ROUND`;
          ScraftyAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; SCRAFTY BEATS MEWTWO; PLAYER 2 WINS THIS ROUND`;
          ScraftyAudio.play();
        }
        PlayerTwoScore++;
        Counter++;
      } else if (CPUChoice == "Mewtwo") {
        if (SetMode == "Computer") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
        } else if (SetMode == "Player") {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; TIE GAME`;
          TieAudio.play();
          PlayerTwoScore++
          Counter++
        }
    } else if (CPUChoice == "Inteleon") {
      Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; GUN BEATS EVERYTHING; PLAYER 2 WINS THIS ROUND`;
      InteleonAudio.play();
      PlayerTwoScore++;
      Counter++;
    }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore;
      Player2Score.innerText = "Score - " + PlayerTwoScore;
      GameOver();
      break;

    case "Inteleon":
      if (SetMode == "Computer") {
        Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; GUN BEATS EVERYTHING; YOU WIN`;
        InteleonAudio.play();
        PlayerOneScore++;
        Counter++;
      } else if (SetMode == "Player") {
        if (CPUChoice == "Inteleon") {
          Result = `You have picked ${PlayerChoice}; your Opponent picked ${CPUChoice}; THE GAME IS A DRAW; NO ONE WINS...`;
          TieAudio.play();
          Winner.innerText = "Draw"
          Winner.className = "white heartbeat"
          DisableFunction();
        } else {
          Result = `Player 1 picked ${PlayerChoice}; Player 2 picked ${CPUChoice}; GUN BEATS EVERYTHING; PLAYER 1 WINS THIS ROUND`;
          InteleonAudio.play();
          PlayerOneScore++;
          Counter++;
        }
      }
      EndResult.innerText = Result;
      RoundCounter.innerText = "Round:" + Counter;
      Player1Score.innerText = "Score - " + PlayerOneScore;
      Player2Score.innerText = "Score - " + PlayerTwoScore;
      GameOver();
      break;

    default:
      Result = "ERROR: This is not Working";
      EndResult.innerText = Result;
      break;
  }
}
Rock.addEventListener("click", function () {
  if (SetMode == "Player") {
    if (PlayerOneTurn === true) {
      PlayerChoice = "Kleavor";
      PlayerOneTurn = false;
      Winner.innerText = "It is Your Turn Player 2";
      Winner.className = "blue";
    } else if (PlayerOneTurn == false) {
      CPUChoice = "Kleavor";
      PlayerOneTurn = true;
      Winner.innerText = "It is Your Turn Player 1";
      Winner.className = "red";
      GameResult();
    }
  } else if (SetMode == "Computer") {
    PlayerChoice = "Kleavor";
    getCPU();
    GameOver();
  }
});
Paper.addEventListener("click", function () {
  if (SetMode == "Player") {
    if (PlayerOneTurn === true) {
      PlayerChoice = "Scyther";
      PlayerOneTurn = false;
      Winner.innerText = "It is Your Turn Player 2";
      Winner.className = "blue";
    } else if (PlayerOneTurn == false) {
      CPUChoice = "Scyther";
      PlayerOneTurn = true;
      Winner.innerText = "It is Your Turn Player 1";
      Winner.className = "red";
      GameResult();
    }
  } else if (SetMode == "Computer") {
    PlayerChoice = "Scyther";
    getCPU();
    GameOver();
  }
});
Scissor.addEventListener("click", function () {
  if (SetMode == "Player") {
    if (PlayerOneTurn === true) {
      PlayerChoice = "Scizor";
      PlayerOneTurn = false;
      Winner.innerText = "It is Your Turn Player 2";
      Winner.className = "blue";
    } else if (PlayerOneTurn == false) {
      CPUChoice = "Scizor";
      PlayerOneTurn = true;
      Winner.innerText = "It is Your Turn Player 1";
      Winner.className = "red";
      GameResult();
    }
  } else if (SetMode == "Computer") {
    PlayerChoice = "Scizor";
    getCPU();
    GameOver();
  }
});
Lizard.addEventListener("click", function () {
  if (SetMode == "Player") {
    if (PlayerOneTurn === true) {
      PlayerChoice = "Scrafty";
      PlayerOneTurn = false;
      Winner.innerText = "It is Your Turn Player 2";
      Winner.className = "blue";
    } else if (PlayerOneTurn == false) {
      CPUChoice = "Scrafty";
      PlayerOneTurn = true;
      Winner.innerText = "It is Your Turn Player 1";
      Winner.className = "red";
      GameResult();
    }
  } else if (SetMode == "Computer") {
    PlayerChoice = "Scrafty";
    getCPU();
    GameOver();
  }
});
Spock.addEventListener("click", function () {
  if (SetMode == "Player") {
    if (PlayerOneTurn === true) {
      PlayerChoice = "Mewtwo";
      PlayerOneTurn = false;
      Winner.innerText = "It is Your Turn Player 2";
      Winner.className = "blue";
    } else if (PlayerOneTurn == false) {
      CPUChoice = "Mewtwo";
      PlayerOneTurn = true;
      Winner.innerText = "It is Your Turn Player 1";
      Winner.className = "red";
      GameResult();
    }
  } else if (SetMode == "Computer") {
    PlayerChoice = "Mewtwo";
    getCPU();
    GameOver();
  }
});
Gun.addEventListener("click", function () {
    if (SetMode == "Player") {
      if (PlayerOneTurn === true) {
        PlayerChoice = "Inteleon";
        PlayerOneTurn = false;
        Winner.innerText = "It is Your Turn Player 2";
        Winner.className = "blue";
      } else if (PlayerOneTurn == false) {
        CPUChoice = "Inteleon";
        PlayerOneTurn = true;
        Winner.innerText = "It is Your Turn Player 1";
        Winner.className = "red";
        GameResult();
      }
    } else if (SetMode == "Computer") {
      PlayerChoice = "Inteleon";
      getCPU();
      GameOver();
    }
  });
Gun.addEventListener("mouseover", function () {
    InteleonBtn.className = 'inteleon fadeIn'
  });
Gun.addEventListener("mouseout", function () {
    InteleonBtn.className = 'inteleon fadeOut'
  });


// Extras
let Player1IconExtra = document.getElementById("extraPlayer1Icon");
let Player2IconExtra = document.getElementById("extraPlayer2Icon");
let Player1Forward = document.getElementById("player1Forward");
let Player1Back = document.getElementById("player1Back");
let Player2Forward = document.getElementById("player2Forward");
let Player2Back = document.getElementById("player2Back");
let Player1Counter = 1;
let Player2Counter = 2;

Player1Forward.addEventListener("click", function () {
  if (Player1Counter < 41) {
    Player1Counter++;
    PlayerIconOptions();
  } else {
    Player1Counter = 1;
    PlayerIconOptions();
  }
});
Player1Back.addEventListener("click", function () {
  if (Player1Counter > 1) {
    Player1Counter--;
    PlayerIconOptions();
  } else {
    Player1Counter = 40;
    PlayerIconOptions();
  }
});
Player2Forward.addEventListener("click", function () {
  if (Player2Counter < 41) {
    Player2Counter++;
    Player2IconOptions();
  } else {
    Player2Counter = 1;
    Player2IconOptions();
  }
});
Player2Back.addEventListener("click", function () {
  if (Player2Counter > 1) {
    Player2Counter--;
    Player2IconOptions();
  } else {
    Player2Counter = 40;
    Player2IconOptions();
  }
});

function PlayerIconOptions() {
  switch (Player1Counter) {
    case 1:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/EthanChallenge.png";
      document.getElementById("player1Icon").src =
        "../assets/EthanChallenge.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/EthanChallenge.png";
      document.getElementById("gameplayIcon").src =
        "../assets/EthanChallenge.png";
      break;
    case 2:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/VsSilver.png";
      document.getElementById("player1Icon").src = "../assets/VsSilver.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/VsSilver.png";
      document.getElementById("gameplayIcon").src = "../assets/VsSilver.png";
      break;
    case 3:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsLyra.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsLyra.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsLyra.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsLyra.png";
      break;
    case 4:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsFalkner.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsFalkner.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsFalkner.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsFalkner.png";
      break;
    case 5:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsBugsy.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsBugsy.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsBugsy.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsBugsy.png";
      break;
    case 6:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsWhitney.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsWhitney.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsWhitney.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsWhitney.png";
      break;
    case 7:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsMorty.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsMorty.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsMorty.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsMorty.png";
      break;
    case 8:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsChuck.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsChuck.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsChuck.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsChuck.png";
      break;
    case 9:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsJasmine.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsJasmine.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsJasmine.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsJasmine.png";
      break;
    case 10:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsPryce.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsPryce.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsPryce.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsPryce.png";
      break;
    case 11:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsClair.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsClair.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsClair.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsClair.png";
      break;
    case 12:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsWill.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsWill.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsWill.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsWill.png";
      break;
    case 13:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsBruno.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsBruno.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsBruno.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsBruno.png";
      break;
    case 14:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsKoga.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsKoga.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsKoga.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsKoga.png";
      break;
    case 15:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsKaren.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsKaren.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsKaren.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsKaren.png";
      break;
    case 16:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsLance.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsLance.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsLance.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsLance.png";
      break;
    case 17:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsBrock.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsBrock.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsBrock.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsBrock.png";
      break;
    case 18:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsMisty.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsMisty.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsMisty.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsMisty.png";
      break;
    case 19:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsLt_Surge.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsLt_Surge.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsLt_Surge.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsLt_Surge.png";
      break;
    case 20:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsErika.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsErika.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsErika.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsErika.png";
      break;
    case 21:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsJanine.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsJanine.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsJanine.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsJanine.png";
      break;
    case 22:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsSabrina.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsSabrina.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsSabrina.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsSabrina.png";
      break;
    case 23:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsBlaine.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsBlaine.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsBlaine.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsBlaine.png";
      break;
    case 24:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsBlue.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsBlue.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsBlue.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsBlue.png";
      break;
    case 25:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsGiovanni.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsGiovanni.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsGiovanni.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsGiovanni.png";
      break;
    case 26:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsLucas.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsLucas.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsLucas.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsLucas.png";
      break;
    case 27:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsDawn.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsDawn.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsDawn.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsDawn.png";
      break;
    case 28:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsRoark.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsRoark.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsRoark.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsRoark.png";
      break;
    case 29:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsGardenia.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsGardenia.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsGardenia.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsGardenia.png";
      break;
    case 30:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsFantina.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsFantina.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsFantina.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsFantina.png";
      break;
    case 31:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsMaylene.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsMaylene.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsMaylene.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsMaylene.png";
    case 32:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsCrasher_Wake.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsCrasher_Wake.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsCrasher_Wake.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsCrasher_Wake.png";
      break;
    case 33:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsByron.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsByron.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsByron.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsByron.png";
      break;
    case 34:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsCandice.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsCandice.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsCandice.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsCandice.png";
      break;
    case 35:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsVolkner.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsVolkner.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsVolkner.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsVolkner.png";
      break;
    case 36:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsAaron.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsAaron.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsAaron.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsAaron.png";
      break;
    case 37:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsBertha.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsBertha.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsBertha.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsBertha.png";
      break;
    case 38:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsFlint.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsFlint.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsFlint.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsFlint.png";
      break;
    case 39:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsLucian.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsLucian.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsLucian.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsLucian.png";
      break;
    case 40:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/Characters/VsCynthia.png";
      document.getElementById("player1Icon").src =
        "../assets/Characters/VsCynthia.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/Characters/VsCynthia.png";
      document.getElementById("gameplayIcon").src =
        "../assets/Characters/VsCynthia.png";
      break;

    default:
      document.getElementById("extraPlayer1Icon").src =
        "../assets/EthanChallenge.png";
      document.getElementById("player1Icon").src =
        "../assets/EthanChallenge.png";
      document.getElementById("player1IconVsCPU").src =
        "../assets/EthanChallenge.png";
      document.getElementById("gameplayIcon").src =
        "../assets/EthanChallenge.png";
      break;
  }
}

function Player2IconOptions() {
  switch (Player2Counter) {
    case 1:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/EthanChallenge.png";
      document.getElementById("player2Icon").src =
        "../assets/EthanChallenge.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/EthanChallenge.png";
      break;
    case 2:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/VsSilver.png";
      document.getElementById("player2Icon").src = "../assets/VsSilver.png";
      document.getElementById("PlayerOrCPU").src = "../assets/VsSilver.png";
      break;
    case 3:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsLyra.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsLyra.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsLyra.png";
      break;
    case 4:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsFalkner.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsFalkner.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsFalkner.png";
      break;
    case 5:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsBugsy.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsBugsy.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsBugsy.png";
      break;
    case 6:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsWhitney.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsWhitney.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsWhitney.png";
      break;
    case 7:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsMorty.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsMorty.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsMorty.png";
      break;
    case 8:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsChuck.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsChuck.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsChuck.png";
      break;
    case 9:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsJasmine.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsJasmine.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsJasmine.png";
      break;
    case 10:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsPryce.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsPryce.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsPryce.png";
      break;
    case 11:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsClair.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsClair.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsClair.png";
      break;
    case 12:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsWill.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsWill.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsWill.png";
      break;
    case 13:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsBruno.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsBruno.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsBruno.png";
      break;
    case 14:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsKoga.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsKoga.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsKoga.png";
      break;
    case 15:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsKaren.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsKaren.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsKaren.png";
      break;
    case 16:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsLance.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsLance.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsLance.png";
      break;
    case 17:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsBrock.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsBrock.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsBrock.png";
      break;
    case 18:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsMisty.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsMisty.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsMisty.png";
      break;
    case 19:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsLt_Surge.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsLt_Surge.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsLt_Surge.png";
      break;
    case 20:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsErika.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsErika.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsErika.png";
      break;
    case 21:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsJanine.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsJanine.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsJanine.png";
      break;
    case 22:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsSabrina.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsSabrina.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsSabrina.png";
      break;
    case 23:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsBlaine.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsBlaine.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsBlaine.png";
      break;
    case 24:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsBlue.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsBlue.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsBlue.png";
      break;
    case 25:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsGiovanni.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsGiovanni.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsGiovanni.png";
      break;
    case 26:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsLucas.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsLucas.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsLucas.png";
      break;
    case 27:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsDawn.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsDawn.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsDawn.png";
      break;
    case 28:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsRoark.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsRoark.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsRoark.png";
      break;
    case 29:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsGardenia.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsGardenia.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsGardenia.png";
      break;
    case 30:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsFantina.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsFantina.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsFantina.png";
      break;
    case 31:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsMaylene.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsMaylene.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsMaylene.png";
    case 32:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsCrasher_Wake.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsCrasher_Wake.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsCrasher_Wake.png";
      break;
    case 33:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsByron.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsByron.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsByron.png";
      break;
    case 34:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsCandice.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsCandice.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsCandice.png";
      break;
    case 35:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsVolkner.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsVolkner.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsVolkner.png";
      break;
    case 36:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsAaron.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsAaron.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsAaron.png";
      break;
    case 37:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsBertha.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsBertha.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsBertha.png";
      break;
    case 38:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsFlint.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsFlint.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsFlint.png";
      break;
    case 39:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsLucian.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsLucian.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsLucian.png";
      break;
    case 40:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/Characters/VsCynthia.png";
      document.getElementById("player2Icon").src =
        "../assets/Characters/VsCynthia.png";
      document.getElementById("PlayerOrCPU").src =
        "../assets/Characters/VsCynthia.png";
      break;

    default:
      document.getElementById("extraPlayer2Icon").src =
        "../assets/VsSilver.png";
      document.getElementById("player2Icon").src = "../assets/VsSilver.png";
      document.getElementById("PlayerOrCPU").src = "../assets/VsSilver.png";
      break;
  }
}
