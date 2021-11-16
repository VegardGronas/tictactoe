const requestDatabase = {};

requestDatabase.getBoard = async function(){
    const url = "/api/newBoard";

    try{
        const repons = await fetch(url);
        const data = await repons.json();

        drawBoard(data);
    }
    catch(err){
        console.log(err);
    }
}

requestDatabase.getModded = async function(currentId, currentChange){
    const url = "/api/moddedBoard";
    
    const updata = {
        id: currentId,
        change: currentChange,
        progress: "running"
    }
    
    const cfg = {
        method: "PUT",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(updata)
    }

    try{
        const respons = await fetch(url, cfg);
        const data = await respons.json();
        drawBoard(data);
    }
    catch(err){
        console.log(err);
    }
}

requestDatabase.getBoard();