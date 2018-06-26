class fish {
    constructor(fishName, fishColour){
       this._fishName = fishName
       this._fishColour = fishColour
       this._appliedColour = this._fishColour
       this._coinReady = 0
       this._growthStage = 0
       this._fishDirection = true
       this._hunger = 101
       this._fishX = Math.floor(Math.random()*1200) + 50 
       this._fishY = -40
       this._inTank = false
       this._movingX = false
       this._movingY = false
       this._destinationX = 0
       this._destinationY = 0

    }
    drawFish(){
        
        if(this._fishDirection == true){
            ctx.beginPath();
            ctx.strokeStyle = this._appliedColour
            ctx.fillStyle = this._appliedColour
            ctx.moveTo(this._fishX + 30,this._fishY + 20);
            ctx.lineTo(this._fishX - 20,this._fishY);
            ctx.lineTo(this._fishX - 20,this._fishY + 40);
            ctx.lineTo(this._fishX + 30,this._fishY + 20);
            ctx.fill();

            ctx.fillRect(this._fishX,this._fishY,70,40);
            
        
            ctx.stroke();

            
            
            ctx.closePath()



        }
        else{

            ctx.beginPath();
            ctx.strokeStyle = this._appliedColour
            ctx.fillStyle = this._appliedColour
            ctx.moveTo(this._fishX + 40,this._fishY + 20);
            ctx.lineTo(this._fishX + 90,this._fishY);
            ctx.lineTo(this._fishX + 90,this._fishY + 40);
            ctx.lineTo(this._fishX + 40,this._fishY + 20);
            ctx.fill();

            ctx.fillRect(this._fishX,this._fishY,70,40);
            
        
            ctx.stroke();
            
            ctx.closePath()

        }
        
    }

    addToTank(){
        if(this._inTank == false){
            if(this._fishY < 350){
                this._fishY += 5
            }
            else{
                this._inTank = true
                console.log(this._fishName + " added to tank.")
            }
            
        }
    }

    selectDestination(){
     

        if(this._inTank == true && foodArray.length == 0){
           if(this._movingX == false && this._movingY == false){
            this._destinationX = Math.floor(Math.random()*1200) + 50
            this._destinationY = Math.floor(Math.random()*600) + 50

            this._movingX = true
            this._movingY = true

            } 
        }
        

    }
    movement(){

        if(this._fishX !== this._destinationX && this._inTank == true){
            
            
            if(this._destinationX > this._fishX){
                this._fishX += 0.5
                this._fishDirection = true
            }
            else{
                this._fishX -= 0.5
                this._fishDirection = false
                
            }
        }
        else{
            this._movingX = false
            
        }

        if(this._fishY !== this._destinationY && this._inTank == true){
            
            if(this._destinationY > this._fishY){
                this._fishY += 0.5
            }
            else{
                this._fishY -= 0.5
            }
        }
        else{
            this._movingY = false
            
        }
            
        
    }

    hunger(){
        if(this._hunger > 0){
            this._hunger -= 0.01

        }
    }
    healthColour(){
        if(this._hunger < 10){
            this._appliedColour = "#aaa69d"
        }
        else if(this._hunger < 25){
            this._appliedColour = "#A1887F"

        }
    }
    removeDeath(index){
        if(this._hunger <= 0){
            fishArray.splice(index, 1);
        }
        
        
    }
    growth(){}
    feed(){
        if(this._hunger < 50 && foodArray.length > 0){
            this._destinationX = foodArray[1]._foodX
            this._destinationY = foodArray[1]._foodY

            this._movingX = true
            this._movingY = true

            

        }
        
    }

    generateCoin(){
        this._coinReady = Math.floor(Math.random()*1000)
        
        
    }

    coinDrop(){
        if(this._coinReady == 500 && this._hunger > 25){
            let coinNum = coinArray.length
            let addedCoin = new coin(this._fishX + 35, this._fishY + 20, coinNum)

            coinArray.push(addedCoin)

        }

    }
}