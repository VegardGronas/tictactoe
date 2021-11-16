const dbMethods = {};
const db = [];
let id = 0;

dbMethods.newBoard = function(){
    id++;
    const boardStructure = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const board = {id, boardStructure};
    db.push(board);
    return board;
}

dbMethods.getModded = function(id, currentChange){
    for(let value of db){
        let serverPick = Math.floor(Math.random() * value.boardStructure.length) + 1;
        if(value.id === id){
            for(let i = 0; i < value.boardStructure.length; i++){
                if(value.boardStructure[i] === currentChange){
                    value.boardStructure[i] = "X";
                    if(value.boardStructure[i] != "X"){
                        value.boardStructure[serverPick] = "O";
                    }else{
                        serverPick = Math.floor(Math.random() * value.boardStructure.length) + 1;
                        value.boardStructure[serverPick] = "O";
                    }
                    return value;
                }
            }
        }
    }
}

dbMethods.modBoard = function(updata){
    console.log(updata);
    return;
}

module.exports = dbMethods;