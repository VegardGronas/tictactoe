const dbMethods = {};
const db = [];
let id = 0;

dbMethods.newBoard = function(){
    id++;
    const boardStructure = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const board = {id, boardStructure, progress: "Running"};
    db.push(board);
    return board;
}

dbMethods.getModded = function(id, currentChange){
    let stop = false;
    for(let value of db){
        if(value.id === id){
            for(let i = 0; i < value.boardStructure.length; i++){
                //PLAYER CHOISE
                if(value.boardStructure[i] === currentChange){
                    value.boardStructure[i] = "X";
                }
                //SERVER CHOISE
                if(serverChoise(value.boardStructure[i]) && !stop){
                    value.boardStructure[i] = "O";
                    stop = true;
                }
            }
            if(checkWin(value.boardStructure)){
                value.progress = "Ended";
                return value;
            }
            else{
                return value;
            }
        }
    }
}

function serverChoise(value){
    if(parseInt(value)){
        return true;
    }
    return false;
}

function ceckPlaces(value1, value2, value3){
    if(value1 === value2 && value1 === value3 && value2 === value3){
        return true;
    }
}

function checkWin(board){
    for(let i = 0; i < board.length; i++){
        //DIAG
        if(ceckPlaces(board[2], board[4], board[6])){
            return true;
        }
        else if(ceckPlaces(board[0], board[4], board[8])){
            return true;
        }
        //ROW
        else if(ceckPlaces(board[0], board[1], board[2])){
            return true;
        }
        else if(ceckPlaces(board[3], board[4], board[5])){
            return true;
        }
        else if(ceckPlaces(board[6], board[7], board[8])){
            return true;
        }
        //COL
        else if(ceckPlaces(board[0], board[3], board[6])){
            return true;
        }
        else if(ceckPlaces(board[1], board[4], board[7])){
            return true;
        }
        else if(ceckPlaces(board[2], board[5], board[8])){
            return true;
        }
    }
}

module.exports = dbMethods;