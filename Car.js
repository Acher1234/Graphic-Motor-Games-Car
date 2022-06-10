class Car 
{

    constructor(games)
    {
        this.score = 0
        this.vector = new Vector();
        this.x = games.widht - 50;
        this.y = 50;
        let height = games.height * 0.05;
        this.games = games;
        this.degres = 0;
        var img = document.createElement('img');
        img.src = './car.png';
        img.style = 'position: absolute;height:'+height+'px;';
        img.style.left = this.x + 'px'
        img.style.bottom = this.y  + 'px'
        games.body.appendChild(img);
        this.img = img;
    }

    run()
    {
        this.decideDirection()
        this.checkDirection()
        let win = this.games.checkCordinate(this.x,this.y)
        if(!win)
        {
            this.games.removeCar(this)
            this.destroy()
        }
    }
    destroy()
    {
        this.games.body.removeChild(this.img)
    }


    decideDirection()
    {
        this.Right = this.games.Right
        this.Left = this.games.Left
        this.Up = this.games.Up
        this.Down = this.games.Down
    }

    checkDirection()
    {
        if(this.Left && this.Right)
        {
            console.log('bug')
        }
        else if(this.Left == true)
        {
            this.left()
        }
        else if(this.Right == true)
        {
            this.right()
        }
        if(!this.Up && !this.Down)
        {
            this.freine()
            return;
        }   
        if(this.Down == true)
        {
            this.down()
        }
        if(this.Up == true)
        {
           this.up()
        }
        
    }

    freine()    {
        this.vector.speed   = this.vector.speed > 1.05  ? this.vector.speed / 1.01 : this.vector.speed;
        if(this.vector.speed > 1.05)
        {
            this.x = this.x + this.vector.x *this.vector.speed;
            this.y = this.y + this.vector.y * this.vector.speed;
            this.img.style.left = this.x + 'px'
            this.img.style.bottom = this.y + 'px'
        }
    }

    up()
    {
        this.vector.speed = this.vector.speed *1.001;
        this.x = this.x + this.vector.x *this.vector.speed;
        this.y = this.y + this.vector.y * this.vector.speed;
        this.score +=  Math.abs(this.vector.x *this.vector.speed) + Math.abs(this.vector.y * this.vector.speed);
        this.img.style.left = this.x + 'px'
        this.img.style.bottom = this.y + 'px'
    }

    down()
    {
        this.vector.speed   = this.vector.speed > 1.05  ? this.vector.speed / 1.1 : this.vector.speed;
        this.x = this.x - this.vector.x *this.vector.speed;
        this.y = this.y - this.vector.y * this.vector.speed;
        this.score +=  Math.abs(this.vector.x *this.vector.speed) + Math.abs(this.vector.y * this.vector.speed);
        this.img.style.left = this.x + 'px'
        this.img.style.bottom = this.y + 'px'
    }

    defineVectorDegree()
    {
        this.degres = this.degres >= 360 ? this.degres - 360 : this.degres;
        this.degres = this.degres < 0 ? 360 + this.degres  : this.degres;
        let realDegres = (360- this.degres) > 270 ? (90-this.degres) : (360-this.degres) + 90;
        let x,y;
        x = Math.cos(realDegres * Math.PI / 180)
        y = Math.sin(realDegres* Math.PI / 180)
        this.vector.x = x;
        this.vector.y = y;
        this.img.style.transform = "rotate("+ (this.degres )+"deg)";
    }

    left()
    {
        this.degres -= 1 
        this.defineVectorDegree()
    }

    right()
    {
        this.degres += 1 
        this.defineVectorDegree()
    }
}