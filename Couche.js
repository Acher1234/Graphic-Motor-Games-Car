class Couche
{
    constructor(nbrNeurone)
    {
        this.neurone = []
        for(let i =0;i<nbrNeurone;i++)
        {
            this.neurone.push(new Neurone());
        }
    }

    passage(couche,poids)
    {
        for(let i =0;i<this.neurone.length;i++)
        {
            for(let j =0;j<poids[i].length;j++)
            {
                couche.neurone[j].set_value(poids[i][j] * this.neurone[i].get_value()) 
            }
        }
    }
}