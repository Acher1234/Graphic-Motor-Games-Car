class radar
{
    constructor(x,y,degres,degresId,games)
    {
        this.degresId = degresId;
        this.degres = degres;
        this.games = games;
        this.borderRa = document.createElement('div');
        this.borderRa.style = 'border-radius:10px;position: absolute;height:20px;width:20px;background-color:green';
        this.degres = this.degres %360;
        this.xRa,this.yRa;
        this.xRa = (Math.cos(this.degres * Math.PI / 180) *100)  + x
        this.yRa = (Math.sin(this.degres* Math.PI / 180)*100)  + y
        console.log(this.xRa,this.yRa)
        this.borderRa.style.left = this.xRa + 'px'
        this.borderRa.style.bottom = this.yRa  + 'px'
        games.body.appendChild(this.borderRa);
        this.checkPosition();
    }

    checkPosition()
    {
        this.positionValid = this.games.checkCordinate(this.xRa,this.yRa,20);
        this.borderRa.style.backgroundColor = this.positionValid ? 'green' : 'red';
    }

    isPositionValid()
    {
        return this.positionValid;
    }



    destuctor()
    {
        this.games.body.removeChild(this.borderRa)
    }
}
