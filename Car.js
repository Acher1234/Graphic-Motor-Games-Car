class Car 
{
    static carList;

    constructor(games)
    {
        this.vector = new Vector();
        this.x = games.widht - 50;
        this.y = games.height + 50;
        this.games = games;
        this.degres = 0;
        var img = document.createElement('img');
        img.src = './car.png';
        img.style = 'position: absolute;height: 5%;';
        img.style.left = this.x + 'px'
        img.style.bottom = this.y  + 'px'
        games.body.appendChild(img);
        this.img = img;
        if(this.carList == null)
        {
            this.carList = [];
        }
        this.carList.push(this);
    }

    run()
    {
        this.checkTouch()
    }


    checkTouch()
    {
        if(this.games.Left && this.games.Right)
        {
            console.log('bug')
        }
        else if(this.games.Left == true)
        {
            this.left()
        }
        else if(this.games.Right == true)
        {
            this.right()
        }
        if(!this.games.Up && !this.games.Down)
        {
            this.freine()
            return;
        }   
        if(this.games.Down == true)
        {
            this.down()
        }
        if(this.games.Up == true)
        {
           this.up()
        }
        
    }

    freine()    {
        this.vector.speed   = this.vector.speed > 1.05  ? this.vector.speed / 1.1 : this.vector.speed;
        this.x = this.x + this.vector.x *this.vector.speed;
        this.y = this.y + this.vector.y * this.vector.speed;
        this.img.style.left = this.x + 'px'
        this.img.style.bottom = this.y + 'px'
    }

    up()
    {
        this.vector.speed = this.vector.speed *1.005;
        this.x = this.x + this.vector.x *this.vector.speed;
        this.y = this.y + this.vector.y * this.vector.speed;
        this.img.style.left = this.x + 'px'
        this.img.style.bottom = this.y + 'px'
    }

    down()
    {
        this.vector.speed   = this.vector.speed > 1.05  ? this.vector.speed / 1.1 : this.vector.speed;
        this.x = this.x - this.vector.x *this.vector.speed;
        this.y = this.y - this.vector.y * this.vector.speed;
        this.img.style.left = this.x + 'px'
        this.img.style.bottom = this.y + 'px'
    }

    defineVectorDegree()
    {
        this.degres = this.degres >= 360 ? this.degres - 360 : this.degres;
        this.degres = this.degres < 0 ? 360 + this.degres  : this.degres;
        let realDegres = (360- this.degres) > 270 ? (90-this.degres) : (360-this.degres) + 90;
        console.log(realDegres )
        let x,y;
        x = Math.cos(realDegres * Math.PI / 180)
        y = Math.sin(realDegres* Math.PI / 180)
        console.log('x:' +x)
        console.log('y:' +y)
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