let row1 = document.getElementById("row1");
let cells = document.querySelectorAll(".cell");
let reset = document.getElementById("reset");
let player = "X";
let m=false;
let mode=1;
game();
const pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let pvp=document.getElementById("s");
console.log(cells[0]);

function game(){
    console.log("game");
cells.forEach(cell => {
    console.log(cell);
    //check this after the end
    if(cell.addEventListener('click', () => {
        if(cell.textContent ==="" || cell.textContent ===" "){
            let winner=document.getElementById("win");
            cell.textContent = player;
            if(player === "X"){
                winner.textContent = "Player O's Turn";
                cell.classList.add("cross");
                checkdraw();
                checkwin();
                player = "O";
            }
            else{
                winner.textContent = "Player X's Turn";
                cell.classList.add("circle");
                checkdraw();
                checkwin();
                player = "X";

            }
            setTimeout(() => {
                cell.classList.add("no");
            }, 100);
        }
    }));

});
}
const checkwin=()=>{
    let c=0;
    for(let i of pattern){
        let p1=cells[i[0]].textContent;
        let p2=cells[i[1]].textContent;
        let p3=cells[i[2]].textContent;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                if(p1==="X"){
                    let left=document.getElementById("left");
                    left.textContent++;
                }
                else{
                    let right=document.getElementById("right");
                    right.textContent++;
                }
                for(let j of cells){
                    j.classList.add("no");
                }
                let winner=document.getElementById("win");
                winner.textContent = p1 + " wins";
                cells[i[0]].classList.add("trans");
                cells[i[1]].classList.add("trans");
                cells[i[2]].classList.add("trans");
                
                setTimeout(() => {
                    if(p1==="X"){
                        cells[i[0]].style.backgroundColor = "#E74C3C";
                        cells[i[0]].style.color = "#fff";
                        cells[i[1]].style.backgroundColor = "#E74C3C"; 
                        cells[i[1]].style.color = "#fff";
                        cells[i[2]].style.backgroundColor = "#E74C3C";
                        cells[i[2]].style.color = "#fff";
                    }
                    else{
                        cells[i[0]].style.backgroundColor = "#3498DB";
                        cells[i[0]].style.color = "#fff";

                        cells[i[1]].style.backgroundColor = "#3498DB"; 
                        cells[i[1]].style.color = "#fff";
                        cells[i[2]].style.backgroundColor = "#3498DB";
                        cells[i[2]].style.color = "#fff";
                    }
                }, 200);
                setTimeout(() => {
                    console.log(cells[i[0]].style.backgroundColor);
                    cells[i[0]].style.backgroundColor = "#fff";
                    cells[i[0]].removeAttribute("style");
                    cells[i[1]].style.backgroundColor = "#fff"; 
                    cells[i[1]].removeAttribute("style");
                    cells[i[2]].style.backgroundColor = "#fff"; 
                    cells[i[2]].removeAttribute("style");
                }, 1200);
                
            }

        }       
    }
}
function nee(){
cells.forEach(cell => {
    console.log(cell);
    cell.textContent = "";
    let winner=document.getElementById("win");
    winner.textContent = "Player X's Turn";
    player = "X";
    cell.removeAttribute("style");
    cell.classList.remove("cross");
    cell.classList.remove("circle");
    cell.classList.remove("trans");
    cell.classList.remove("no");
    
});
console.log(cells[0]);
}
reset.addEventListener("click",()=>{
    nee();
    game();
    console.log("GAME IS ON");

})
function checkdraw(){
    let c=0;
    for(let i=0;i<9;i++){
        if(cells[i].textContent !== ""){
            c++;
    }
    if(c===9){
        let winner=document.getElementById("win");
        winner.textContent= "DRAW!";
    }
    }
}

// const checkdraw=()=>{
//     let c=0;
//     for(let i=0;i<9;i++){
//        if(buttons[i].innerText!=""){
//         c++;
//        }
//     }
//     if(c==9){
//         win.innerText='DRAW!!!';
//         disabledboxes();
//     }
   
// }