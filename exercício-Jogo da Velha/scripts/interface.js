document.addEventListener('DOMContentLoaded', () =>{


    let squares = document.querySelectorAll(".square");

    squares.forEach((squares)=>{
        squares.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    //console.log(event.target);
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){  
        
        if(playerTime == 0){
            setTimeout(() => {alert(" O Jogo Acabou, quem venceu foi o jogador: " + playerTime + ", " + String.fromCodePoint(0x1F530)), 20} );
        }else if(playerTime == 1){
            setTimeout(() => {alert(" O Jogo Acabou, quem venceu foi o jogador: " + playerTime + ", " + String.fromCodePoint(0x2694)), 20} );
        }
                
    
    }
    updateSquare(position);

}

function updateSquare(position){
let square = document.getElementById(position.toString());
let symbol = board[position];
square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];



square.innerHTML = `<div class='${symbol}'></div>`;



    })

}

function Reiniciar(){
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;
    PlayNum = 1;
    statusGame.innerHTML = "Jogo em curso ";
    updateSquares();
    }