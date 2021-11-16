const container = document.getElementById("container");

function drawBoard(board){
    container.innerHTML = "";

    for(let value of board.boardStructure){
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerHTML = value;
        div.appendChild(h1);
        container.appendChild(div);

        div.addEventListener('click', function(){
            requestDatabase.getModded(board.id, value);
        });
    }
}