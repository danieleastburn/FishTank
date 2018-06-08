
balanceText.textContent = "$ "+balance


document.getElementById("addFish").addEventListener("click", function(e){
    if(balance >= 100){
        
        balance -= 100

        balanceText.textContent = "$ "+balance

        

        let addedFish = new fish("name", "Orange")
        fishArray.push(addedFish)

    }
    

    
})

document.getElementById("myCanvas").addEventListener("click", function(e){
    console.log("clicked")
    
    var rect = canvas.getBoundingClientRect();
    let x = e.clientX - (rect.left + 20)
    let y = e.clientY - (rect.top + 20)
    let coinCollect = false

    

    for(s=0; s<coinArray.length; s++){

        if((x < coinArray[s]._coinX + 18 && x > coinArray[s]._coinX - 18)&&(y < coinArray[s]._coinY + 18 && y > coinArray[s]._coinY - 18)){
            coinCollect = true
            console.log("coin clicked")
            balance += 10
            balanceText.textContent = "$ "+balance
            coinArray.splice(s, 1);
            
        }
        
        
        
    }

    
    if((foodArray.length < 5 && coinCollect == false) && balance >= 2){
    
        
        let foodNum = foodArray.length + 1

        console.log("Mouse X: " + x + "Mouse Y: " + y)
        let addedFood = new food(x, y, foodNum)
        foodArray.push(addedFood);
        balance -= 2
        balanceText.textContent = "$ "+balance
    }
})


const drawTank = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(i=0; i < fishArray.length; i++){
        
        fishArray[i].drawFish();
        fishArray[i].addToTank();
        fishArray[i].selectDestination();
        fishArray[i].movement();
        fishArray[i].hunger();
        fishArray[i].healthColour();
        fishArray[i].coinDrop();
        fishArray[i].generateCoin();
        fishArray[i].removeDeath(i);

    }

    for(f=0; f<foodArray.length; f++){
        foodArray[f].drawFood();
        foodArray[f].removeFood(f);
    
    }

    for(c=0; c<coinArray.length; c++){
        coinArray[c].drawCoin();
        coinArray[c].removeCoin(c);
        
    
    }

    
    
}

setInterval(drawTank, 10)


