let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")

let turnO = true;

const winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turnO){
         box.innerText= ("X")
         turnO =false;
        }
        else{
            box.innerText =("O")
            turnO=true;
        }
        box.disabled = true;
        chckwinner();
    
    })
    
})

const chckwinner=()=>{
    for(let patterns of winners){
        let pos1val =boxes[patterns[0]].innerText;
        let pos2val =boxes[patterns[1]].innerText;
        let pos3val =boxes[patterns[2]].innerText;

        if (pos1val!="" && pos2val!= ""&& pos3val!= "" ){
        if(pos1val == pos2val && pos2val== pos3val)
            
        }
    }
   
}