class Neurone
{
    constructor()
    {
        this.internValue = 0;
        this.setTime =0
    }

    set_value(val)
    {
        this.internValue += val;
        this.setTime ++
    }

    get_value()
    {
        return 1/(1+Math.exp(-(this.internValue/this.setTime)))
    }
}