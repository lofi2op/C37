class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", (data) => {
            playerCount = data.val()
        })
    }


    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    
}









// func name(par){
//     say  hi
// }


// func (par){

// }

// arrow function

// (par)=>{
//     say hi
//     say hello

// }

// (par)=> say hi

