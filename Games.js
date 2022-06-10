class Games 
{
    constructor()
    {
        this.obstacle = []
        this.cars = []
        this.removedCars = []
        this.height = window.innerHeight * 0.97;
        this.widht = document.body.clientWidth;
        this.body = document.getElementById('body')
        this.body.style.width = this.widht + 'px';
        this.body.style.height = this.height +'px';
        this.body.style.border = '1px solid black';
    }

    checkCordinate(x,y,pixelCar)
    {
        return  this.checkBorder(x,y,pixelCar) && this.checkObstacle(x,y)
    }
    checkObstacle(x,y)
    {
        for(let i = 0;i< this.obstacle.length;i++)
        {
            if(!this.obstacle[i].checkCordinate(x,y))
                return false
        }
        return true
    }



    checkBorder(x,y,pixelCar)
    {
        if(y >= (this.height-(pixelCar/2)) || y <= (pixelCar/2) || x >= (this.widht-(pixelCar/2)) || x <= ((pixelCar/2)))
        {
            return false;
        }
        return true;
    }

    gameLost()
    {
        clearInterval(this.gamesInterval)
        clearInterval(this.obstacleInterval)
        location.reload();
    }

    removeCar(car)
    {
        this.cars.splice(this.cars.indexOf(car),1)
        this.removedCars.push(this.cars)
        if(this.cars.length == 0)
        {
            this.gameLost()
        }
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
        this.cars.push(new Car(this));
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
        console.log(this.cars)
        for(let i = 0;i< this.cars.length;i++)
        {
            this.cars[i].run()
        }
    }

}

window.addEventListener('keydown',(e)=>{
    e.keyCode == 13 ? Games.singleton.createCar() : null
    Games.GamesConstructor().setVarTrue(e.keyCode)

})

window.addEventListener('keyup',(e)=>{
    Games.GamesConstructor().setVarFalse(e.keyCode)

})

