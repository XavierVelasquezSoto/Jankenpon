const simpleContainerElement = document.getElementById('simple-container');
let userPlay;
let pcPlay;

//contenedor de victorias
let scoreUser = 0;
let scorePc = 0;

//imprime resultado +1(victoria) o 0 (empate)
const pointUserElement = document.getElementById('simple-point-user');
const pointPcElement = document.getElementById('simple-point-pc');

//oculta o reinicia el juego
const buttonMiddleElement = document.getElementById('button-play');
const modePlayElement = document.getElementById('simple-mode-play');
const resultJankenponElement = document.getElementById('result-jankenpon');

// win or lose

const winLoseElement = document.getElementById('win-lose');

//botón de reglas

const buttonRulesElement = document.getElementById('button-rules');
const simpleModalRulesElement = document.getElementById('simple-modal-rules');

// result img

const imgUserlectionElement = document.getElementById('election-user');
const imgPcElectionElement = document.getElementById('election-pc');

// color result


const userColorResultElement = document.getElementById("user-color-result")
const pcColorResultElement = document.getElementById("pc-color-result")




// rules game

const gameRules = {
    paper: {
      rock: true,
      spock: true,
      lizard: false,
      scissors: false
    },
    rock: {
      scissors: true,
      lizard: true,
      paper: false,
      spock: false
    },
    scissors: {
      paper: true,
      lizard: true,
      scissors: false,
      rock: false
    },
    lizard:{
        spock: true,
        paper: true,
        scissors: false,
        rock: false
    },
    spock:{
        scissors: true,
        rock: true,
        lizard: false,
        paper: false
    }
  };
  const pcOptions = ['paper', 'scissors', 'rock'];

  if(document.body.dataset.mode === "advanced"){
    pcOptions.push("lizard", "spock")
  }
  

const simpleClick = event => {
  if (!event.target.dataset.img) {
    return;
  } // if para que no funcione y solo se pueda en la imagen el click
  //console.log(event.target.dataset.img);
  userPlay = event.target.dataset.img;
  electionPc();
  playAgainShow();
  imgUserlectionElement.src = `../assets/images/icon-${userPlay}.svg`;

  const classUser = userColorResultElement.classList
  const lastClass = classUser[userColorResultElement.classList.length - 1]
  userColorResultElement.classList.remove(lastClass);
  userColorResultElement.classList.add(userPlay);

  /* electionPc() */
};

const electionPc = () => {
  const randomNumber = Math.floor(Math.random() * pcOptions.length); // vale * pcOptions.length o * 3
  pcPlay = pcOptions[randomNumber];
  result();
  imgPcElectionElement.src = `../assets/images/icon-${pcPlay}.svg`;

  const classUser = pcColorResultElement.classList
  const lastClass = classUser[pcColorResultElement.classList.length - 1]
  pcColorResultElement.classList.remove(lastClass);
  pcColorResultElement.classList.add(pcPlay);
};

const result = () => {
  if (userPlay === pcPlay) //empate jankenpon
    {
    /* scoreUser += 0
            scorePc += 0 */
    winLoseElement.textContent = `TIE`;
    return;
    //console.log(`${userPlay} empata ${pcPlay}`)
  } 
  else if (gameRules[userPlay][pcPlay])//variables de victoria
    {    
    scoreUser ++;
    pointUserElement.textContent = scoreUser;
    winLoseElement.textContent = `Win`;
    //console.log(`${userPlay} gana a ${pcPlay}`)
  }

  else 
  {
    //variables de derrota
    scorePc ++;
    pointPcElement.textContent = scorePc;
    winLoseElement.textContent = `Lose`;
    //console.log(`${userPlay} pierde contra ${pcPlay}`)
  }
};

//funcion Play Again

const playAgainShow = () => {
  //console.log("show")
  modePlayElement.classList.add('simple-mode-play-hidden');
  resultJankenponElement.classList.add('simple-result-show');
};

//funcion button play again

const buttonMiddle = () => {
  modePlayElement.classList.remove('simple-mode-play-hidden');
  resultJankenponElement.classList.remove('simple-result-show');
};

//funciones de modal

const showModal = () => {
  simpleModalRulesElement.classList.add('simple-modal-rules-show');
};

const hidenModal = () => {
  simpleModalRulesElement.classList.remove('simple-modal-rules-show');
};




simpleContainerElement.addEventListener('click', simpleClick); //dataset localizador click

buttonMiddleElement.addEventListener('click', buttonMiddle);

buttonRulesElement.addEventListener('click', showModal);
simpleModalRulesElement.addEventListener('click', hidenModal);