class Games 
{
    constructor()
    {
        this.obstacle = []
        this.height = screen.height *0.88;
        this.widht = document.body.clientWidth;
        this.body = document.getElementById('body')
        this.body.style.width = this.widht + 'px';
        this.body.style.height = this.height +'px';
        this.body.style.border = '1px solid black';
    }

    checkCordinate(x,y)
    {
        this.checkBorder(x,y)
        this.checkObstacle(x,y)
    }
    checkObstacle(x,y)
    {
        for(let i = 0;i< this.obstacle.length;i++)
        {
            if(!this.obstacle[i].checkCordinate(x,y))
                this.gameLost()
        }
    }



    checkBorder(x,y)
    {
        if(y >= this.height || y <= 0 || x >= this.widht || x <= 0)
        {
            this.gameLost()
        }
    }

    gameLost()
    {
        clearInterval(this.gamesInterval)
        clearInterval(this.obstacleInterval)
        alert('perdu');
        location.reload();
    }
    setVarTrue(key)
    {
        switch(key)
        {
            case 38 :
                this.Up = true;
                break;
            case 37 :
                this.Left = true;
                break;
            case 39 :
                this.Right = true;
                break;
            case 40 :
                this.Down = true;
                break;
        }
    }

    setVarFalse(key)
    {
        switch(key)
        {
            case 38 :
                this.Up = false;
                break;
            case 37 :
                this.Left = false;
                break;
            case 39 :
                this.Right = false;
                break;
            case 40 :
                this.Down = false;
                break;
        }
    }

    static singleton = null;

    static GamesConstructor()
    {
        if(this.singleton == null)
        {
            this.singleton = new Games();
        }
        return this.singleton
    }

    createCar()
    {
        this.car = new Car(this);
    }

    initialise()
    {
        this.gamesInterval = setInterval(() => {
            Games.singleton.run()
        }, 1);
        this.obstacleInterval = setInterval(() => {
            Games.singleton.createObstacle()
        }, 5000);
    }

    createObstacle()
    {
        this.obstacle.push(new obstacle(this))
    }

    run()
    {
        this.car.run()
    }

}

window.addEventListener('keydown',(e)=>{
    Games.GamesConstructor().setVarTrue(e.keyCode)

})

window.addEventListener('keyup',(e)=>{
    Games.GamesConstructor().setVarFalse(e.keyCode)

})

