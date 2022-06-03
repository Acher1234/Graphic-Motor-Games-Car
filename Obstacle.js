class obstacle
{
    constructor(games)
    {
        this.x = Math.random() * games.widht;
        this.y = Math.random() * games.height;
        this.games = games;
        var obs = document.createElement('div');
        obs.style = 'position: absolute;height: 15px;width:15px;background-color:grey;';
        obs.style.left = this.x + 'px'//go on the right more you have px 
        obs.style.bottom = this.y  + 'px'//go on the top more you have px 
        games.body.appendChild(obs);
        this.obs = obs;
    }

    checkCordinate(x,y)
    {
        if((x <= this.x && x >= (this.x - 20)) && (y <= this.y && y >= (this.y - 20)))
        {
            return false;
        }
        return true;
    }
}