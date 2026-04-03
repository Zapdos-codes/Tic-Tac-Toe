let boxes = document.querySelectorAll('.box');
let reset = document.querySelector("#reset");
let newBtn = document.querySelector('#new');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('.msg');
let turn = document.querySelector('#turn');
let turnO = true; //player X, player O

// 2D array
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = (turnO) ? 'O' : 'X';
        turn.innerText = (!turnO) ? 'Turn : O' : 'Turn : X';
        (box.innerText === 'O') ? box.style.color = '#13E000' : box.style.color = '#EE1B29';
        turnO = !turnO;
        box.disabled = true;
        console.log('box clicked !');
        checkWinner();
    });
});


const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner',pos1Val);
                showWinner(pos1Val);
            }
            
        }
    }
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ''; 
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}


const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add('hide');
}


newBtn.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);