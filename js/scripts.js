const simpleContainerElement = document.getElementById("simple-container")
let userPlay
let pcPlay

//suma de victorias
let scoreUser = 0
let scorePc = 0

const pointUserElement = document.getElementById("simple-point-user")
const pointPcElement = document.getElementById("simple-point-pc")


const simpleClick = event => {
    //console.log(event.target.dataset.img)
    userPlay = event.target.dataset.img
    electionPc()
    
}

const electionPc = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    const pcOptions = ["rock", "paper", "scissors"]
    pcPlay = pcOptions[randomNumber]
    result()
}


const result = () => {
    
    if ( userPlay === pcPlay) //empate jankenpon
        {
            scoreUser += 0
            scorePc += 0
        }


    else if (userPlay === "rock" && pcPlay ==="scissors" || userPlay === "paper" && pcPlay ==="rock" || userPlay === "scissors" && pcPlay ==="paper") //variables de victoria
        {
            scoreUser += 1
            pointUserElement.textContent = scoreUser    
            //console.log(`${userPlay} gana a ${pcPlay}`)
        }


    else if (userPlay === "rock" && pcPlay ==="paper" || userPlay === "paper" && pcPlay ==="scissors" || userPlay === "scissors" && pcPlay ==="rock") //variables de derrota
        {    
            scorePc += 1
            pointPcElement.textContent = scorePc
            //console.log(`${userPlay} pierde contra ${pcPlay}`)    
        }
    
}


simpleContainerElement.addEventListener("click", simpleClick)



