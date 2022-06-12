class Car 
{

    constructor(games)
    {
        this.noNeedToFreineSpeed = 1.05
        this.radar = []
        this.score = 0
        this.vector = new Vector();
        this.x = games.widht - 50;
        this.y = 50;
        this.height = games.height * 0.05;
        this.games = games;
        this.degres = 0;
        var img = document.createElement('img');
        img.src = './car.png';
        img.style = 'position: absolute;height:'+this.height+'px;';
        img.style.left = this.x + 'px'
        img.style.bottom = this.y  + 'px'
        games.body.appendChild(img);
        this.img = img;
    }

    run()
    {
        this.decideDirection()
        if(this.Down || this.Up || this.Left || this.Right || this.vector.speed > this.noNeedToFreineSpeed )
        {
            this.checkDirection()
            this.createRadar() 
        }
        let win = this.games.checkCordinate(this.x,this.y,this.height)
        if(!win)
        {
            this.games.removeCar(this)
            this.destroy()
        }
    }
    destroy()
    {
        for(let i = 0;i<this.radar.length;i++)
        {
            this.radar[i].destuctor()
        }
        this.games.body.removeChild(this.img)
    }

    createRadar()
    {
        for(let i = 0;i<this.radar.length;i++)
        {
            this.radar[i].destuctor()
        }
        this.radar = []
        for(let i = 0;i<= 360;i+=45)
        {
            let realDegres = (360- this.degres) > 270 ? (90-this.degres) : (360-this.degres) + 90;
            this.radar.push(new radar(this.x  , this.y , i + realDegres,i,this.games))
        }
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
        this.vector.speed   = this.vector.speed > this.noNeedToFreineSpeed  ? this.vector.speed / 1.01 : this.vector.speed;
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
