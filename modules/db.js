const dbMethods = {};
const db = [];
let id = 0;

dbMethods.newBoard = function(){
    id++;
    const boardStructure = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const board = {id, boardStructure, progress: "Running", msg: ""};
    db.push(board);
    return board;
}

dbMethods.getModded = function(id, currentChange){
    let stop = false;
    let randomPos;
    const openArray = [];

    for(let value of db){
        if(value.id === id){
            for(let i = 0; i < value.boardStructure.length; i++){
                //PLAYER CHOISE
                if(currentChange === value.boardStructure[i]){
                    if(parseInt(value.boardStructure[i]) && !stop){
                        value.boardStructure[i] = "X";
                    }
                    else{
                        stop = true;
                    }
                }

                //SERVER CHOISE
                if(serverChoise(value.boardStructure[i])){
                    openArray.push(i);
                    randomPos = Math.floor(Math.random() * openArray.length);
                }
            }

            if(!stop){
                value.boardStructure[openArray[randomPos]] = "O";
            }

            if(checkWin(value.boardStructure)){
                value.progress = "Ended";
                value.msg = checkWin(value.boardStructure).msg;
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
            if(board[2] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        else if(ceckPlaces(board[0], board[4], board[8])){
            if(board[0] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        //ROW
        else if(ceckPlaces(board[0], board[1], board[2])){
            if(board[0] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        else if(ceckPlaces(board[3], board[4], board[5])){
            if(board[3] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        else if(ceckPlaces(board[6], board[7], board[8])){
            if(board[6] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        //COL
        else if(ceckPlaces(board[0], board[3], board[6])){
            if(board[0] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        else if(ceckPlaces(board[1], board[4], board[7])){
            if(board[1] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        else if(ceckPlaces(board[2], board[5], board[8])){
            if(board[2] === "X"){
                return {win: true, msg: "You Won!"};
            }
            else{
                return {win: true, msg: "Better luck next time!"};
            }
        }
        else{
            const regEx = /[0-9]/g;
            const string = board.join('');
            if(!string.match(regEx)){
                return {win: true, msg: "Draw"};
            }
        }
    }
}

module.exports = dbMethods;