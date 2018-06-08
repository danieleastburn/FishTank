class coin{
    constructor(coinX, coinY, coinNum){
        this._coinX = coinX
        this._coinY = coinY
        this._coinValue = 10
        this._coinNum = coinNum
    }
    drawCoin(){
        
        ctx.beginPath()
        ctx.fillStyle = "gold"
        ctx.strokeStyle = "gold"
        ctx.arc(this._coinX, this._coinY, 15, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        ctx.closePath()

        if(this._coinY < 690){
           this._coinY += 0.5 
        }
        else{
            this._coinY += 0.01
        }
        
        

    }

    removeCoin(coinIndex){
        if(this._coinY > canvas.height){
            coinArray.splice(coinIndex, 1)
            console.log("zoop")
            console.log(coinArray)
            
        }
        
    }



}