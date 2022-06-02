class Games 
{
    constructor()
    {
        this.height = document.body.clientHeight;
        this.widht = document.body.clientWidth;
        //this.widht = window.innerWidth;
        this.body = document.getElementById('body')
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
            console.log('Games Created')
        }
        return this.singleton
    }

    createCar()
    {
        this.car = new Car(this);
        setInterval(() => {
            Games.singleton.run()
        }, 1);
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

