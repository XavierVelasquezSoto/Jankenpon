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

////

const simpleClick = event => {
  if (!event.target.dataset.img) {
    return;
  } // if para que no funcione y solo se pueda en la imagen el click
  //console.log(event.target.dataset.img);
  userPlay = event.target.dataset.img;
  electionPc();
  playAgainShow();
  imgUserlectionElement.src = `../assets/images/icon-${userPlay}.svg`;
};

const electionPc = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const pcOptions = ['paper', 'scissors', 'rock'];
  pcPlay = pcOptions[randomNumber];
  result();
  imgPcElectionElement.src = `../assets/images/icon-${pcPlay}.svg`;
};

const result = () => {
  if (userPlay === pcPlay) {
    //empate jankenpon
    /* scoreUser += 0
            scorePc += 0 */
    winLoseElement.textContent = `TIE`;
    //console.log(`${userPlay} empata ${pcPlay}`)
  } else if (
    (userPlay === 'rock' && pcPlay === 'scissors') ||
    (userPlay === 'paper' && pcPlay === 'rock') ||
    (userPlay === 'scissors' && pcPlay === 'paper')
  ) {
    //variables de victoria
    scoreUser += 1;
    pointUserElement.textContent = scoreUser;
    winLoseElement.textContent = `Win`;
    //console.log(`${userPlay} gana a ${pcPlay}`)
  } else if (
    (userPlay === 'rock' && pcPlay === 'paper') ||
    (userPlay === 'paper' && pcPlay === 'scissors') ||
    (userPlay === 'scissors' && pcPlay === 'rock')
  ) {
    //variables de derrota
    scorePc += 1;
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
