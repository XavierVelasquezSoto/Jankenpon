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


const result = paper => {
    
    if ( userPlay === pcPlay)
        {
            console.log("empate")
        }
    else if (userPlay) 
        {
            
        }
    else if (paper > rock) 
        {
            
        }
}












simpleContainerElement.addEventListener("click", simpleClick)



