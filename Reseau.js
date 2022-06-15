//class Reseau{
    // constructor(nbrCouche,nbrNeurone,modelDeBase = null,generation = 1)
    // {
    //     var random = new Alea();
    //     this.couches = []
    //     this.poids = []
    //     for(let i = 0; i < nbrCouche;i++)
    //     {
    //         this.couches.push(new Couche(nbrNeurone[i]))
    //     }
    //     if(this.modelDeBase == null)
    //     {
    //         for(let i = 0; i < nbrCouche - 1;i++)
    //         {
    //             this.poids.push([])
    //             let nbrNeuroneCoucheApres = this.couches[i+1].neurone.length
    //             for(let j = 0;j<this.couches[i].neurone.length;j++)
    //             {
    //                 this.poids[i].push([])
    //                 for(let y = 0;y<nbrNeuroneCoucheApres;y++)
    //                 {
    //                     this.poids[i][j].push(random())
    //                 }
    //             }
    //         }
    //     }
    //     else
    //     {
    //         for(let i = 0; i < nbrCouche - 1;i++)
    //         {
    //             this.poids.push([])
    //             let nbrNeuroneCoucheApres = this.couches[i+1].neurone.length
    //             for(let j = 0;j<this.couches[i].neurone.length;j++)
    //             {
    //                 this.poids[i].push([])
    //                 for(let y = 0;y<nbrNeuroneCoucheApres;y++)
    //                 {
    //                     this.poids[i][j].push(modelDeBase[i][j] + Math.random()/generation)
    //                 }
    //             }
    //         }
    //     }
    // }

    // traverseReseau(inputValue)
    // {
    //     for(let i = 0; i < inputValue.length;i++)
    //     {
    //         this.couches[0].neurone[i].set_value(inputValue[i] > 255 ? (inputValue[i] /255)/100 : -(inputValue[i]/255)/100)
    //     }
    //     for(let j = 0;j<this.couches.length -1;j++)
    //     {
    //         this.couches[j].passage(this.couches[j+1],this.poids[j])
    //     }
    //     let value = []
    //     for(let j = 0;j<this.couches[1].neurone.length;j++)
    //     {
    //         value.push(this.couches[1].neurone[j].get_value())
    //     }
    //     console.log(value,'end')
    //     return value
    // }
//}
    function decide(tabs) {
        let maxValue = {position:1,distance:-Infinity}
        let maxValueUpTop = {position:1,distance:-Infinity}
        if((tabs[1]+tabs[2]+tabs[3])/3 >= (tabs[5]+tabs[6]+tabs[7])/3 )
        {
            maxValue = {position:2,distance:(tabs[1]+tabs[2]+tabs[3])/3}
        }
        else if((tabs[1]+tabs[2]+tabs[3])/3 < (tabs[5]+tabs[6]+tabs[7])/3)
        {
            maxValue = {position:6,distance:(tabs[5]+tabs[6]+tabs[7])/3}
        }
        if(tabs[0] > 50 ||Math.abs(tabs[0] - tabs[4]) < 20 ||(tabs[0] > (tabs[4]/4)))
        {
                maxValueUpTop = {position:0,distance:tabs[0]}
        }else{
            maxValueUpTop = {position:4,distance:tabs[4]}
        }
        console.log([maxValueUpTop.position == 0 ? 1:0,maxValueUpTop.position == 4 ? 1:0,maxValue.position > 4 ? 1:0,maxValue.position < 4 ? 1:0])
        return [maxValueUpTop.position == 0 ? 1:0,maxValueUpTop.position == 4 ? 1:0,maxValue.position > 4 ? 1:0,maxValue.position < 4 ? 1:0]
    }