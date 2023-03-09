let title = document.getElementById('title-head');
let restart = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));


let X = "X";
let O = "O";
let currentPlayer = X;

let arr = Array(9).fill(null);

const startGame = () => {
    boxes.forEach((box) => box.addEventListener('click' , (e) => {
        let id = e.target.id;
            
        if(!arr[id]){
            arr[id] = currentPlayer;
            e.target.innerText = currentPlayer;

            if(winner()){
                title.innerHTML = `${currentPlayer} has WON!`;
                return 0;
            }
            currentPlayer = currentPlayer == X ? O : X;
        }
    }));
}



function winner(){
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ){
        return 1;
    }
    return false;
}


restart.addEventListener('click' , () => { 
    arr.fill(null);

    boxes.forEach((box) => {
        box.innerHTML = "";
    })

    title.innerHTML = 'Tic Tac Toe';

    currentPlayer = X;
})



startGame();