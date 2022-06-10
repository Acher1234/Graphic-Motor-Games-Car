class radar
{
    constructor(x,y,degres,games)
    {
        this.degres = degres;
        this.games = games;
        var border = document.createElement('div');
        border.style = 'border-radius:10px;position: absolute;height:'+5+'px;';
        this.degres = this.degres >= 360 ? this.degres - 360 : this.degres;
        this.degres = this.degres < 0 ? 360 + this.degres  : this.degres;
        let realDegres = (360- this.degres) > 270 ? (90-this.degres) : (360-this.degres) + 90;
        let x,y;
        x = Math.cos(realDegres * Math.PI / 180)
        y = Math.sin(realDegres* Math.PI / 180)
        border.style.left = x + 'px'
        border.style.bottom = y  + 'px'
        games.body.appendChild(border);
        this.border = border;
    }

    constructor(){}

    destuctor()
    {
        this.games.body.removeChild(this.border)
    }
}