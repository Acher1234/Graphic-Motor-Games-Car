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
        this.xRa = (Math.cos(this.degres * Math.PI / 180) *75)  + x
        this.yRa = (Math.sin(this.degres* Math.PI / 180)*75)  + y
        this.borderRa.style.left = this.xRa + 'px'
        this.borderRa.style.bottom = this.yRa  + 'px'
        games.body.appendChild(this.borderRa);
        this.checkPosition();
    }

    checkPosition()
    {
        this.positionValid = this.games.checkDistance(this.xRa,this.yRa);
        let redValue = this.positionValid > 255 ? 0 : 255 - this.positionValid;
        let greenValue = this.positionValid > 255 ? 255 : 0 + this.positionValid;
        
        this.borderRa.style.backgroundColor = 'rgb('+(redValue*2)+','+greenValue+',0)';
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
