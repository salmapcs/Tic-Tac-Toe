let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#nw1")
let container = document.querySelector(".mesg-container")
let message = document.querySelector("#mesg")
let turnO = true;
const winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

const resetGame =() =>{
    turnO = true;
    enableboxes()
    container.classList.add("hide")

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turnO){
            // playerO
         box.innerText= ("O")
         turnO =false;
        }
        else{
            // playerX
            box.innerText =("X")
            turnO=true;
        }
        box.disabled = true;
        chckwinner();
    })
})


const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
}


const showWinner = (winners)=>{
    message.innerText =`Congratulation, Winner is ${winners}`
    container.classList.remove("hide")
    disableboxes()
};

const chckwinner=()=>{
    for(let patterns of winners){
        let pos1val =boxes[patterns[0]].innerText;
        let pos2val =boxes[patterns[1]].innerText;
        let pos3val =boxes[patterns[2]].innerText;

        if (pos1val!="" && pos2val!= "" && pos3val!= "" ){
        if(pos1val === pos2val && pos2val=== pos3val){   
            showWinner(pos1val)

        } 
     }
    }
};
newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)