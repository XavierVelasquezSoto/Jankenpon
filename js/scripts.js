const simpleContainerElement = document.getElementById("simple-container")
let userPlay
let pcPlay



const simpleClick = event => {
    console.log(event.target.dataset.img)
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
            console.log(`${userPlay} empata con ${pcPlay}`)
        }


    else if (userPlay === "rock" && pcPlay ==="scissors" || userPlay === "paper" && pcPlay ==="rock" || userPlay === "scissors" && pcPlay ==="paper") //variables de victoria
        {
            console.log(`${userPlay} gana a ${pcPlay}`)
        }


    else if (userPlay === "rock" && pcPlay ==="paper" || userPlay === "paper" && pcPlay ==="scissors" || userPlay === "scissors" && pcPlay ==="rock") //variables de derrota
        {    
            console.log(`${userPlay} pierde contra ${pcPlay}`)    
        }
    
}












simpleContainerElement.addEventListener("click", simpleClick)



