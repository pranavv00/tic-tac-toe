let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');          // works if <button id="reset">
let newGameButton = document.querySelector('#new-game');     // works if <button id="new-game">
let msgContainer = document.querySelector(".msg-container"); // fixed spelling
let msg = document.querySelector("#msg");

let turn0= true;

const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],  
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
];

boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        console.log(box);
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;

        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
        box.style.backgroundColor = "aliceblue";
    }
}


const showWinner = (winner) => {
    msg.innerHTML = `Congrats! You Won! ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

const checkWinner = () => {
    for(pattern of winningCombinations){
        let pos1val= boxes[pattern[0]].innerText; 
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val != "" && pos3val != "") {
            if(pos1val===pos2val && pos2val===pos3val){
                
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";

                showWinner(pos1val);

            }
            
        }
    }
}

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);