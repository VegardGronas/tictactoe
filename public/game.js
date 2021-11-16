const container = document.getElementById("container");
const menu = document.getElementById('menu');

function drawBoard(board){
    container.innerHTML = "";
    for(let value of board.boardStructure){
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerHTML = value;
        div.appendChild(h1);
        container.appendChild(div);

        if(board.progress === "Running"){
            div.addEventListener('click', function(){
                requestDatabase.getModded(board.id, value, board.progress);
            });
        }
    }
    if(board.progress !== "Running"){
        startNewGame();
    }
}

function startNewGame(){
    menu.innerHTML = "";
    const div = document.createElement("div");
    const h1 = document.createElement('h1');
    h1.innerHTML = "Game is over!";
    const btn = document.createElement("button");
    btn.innerHTML = "Create new game";
    div.appendChild(h1);
    div.appendChild(btn);

    menu.appendChild(div);

    btn.addEventListener('click', function(){
        requestDatabase.getBoard();
    })
}