class Ninja{
    constructor(nameInput){
        this.name = nameInput;
        this.health = 100;
        this.speed =3;
        this.strength =3;
    }
    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health +=10
    }

}

const ninja1 = new Ninja("Gianni")

class Sensie extends Ninja {
        constructor(nameInput){
        super(nameInput)
        this.health = 200;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake()
        console.log("If you love life, don't waste time, because time is what life is made of.")
    }
}
const superSensei = new Sensie("Johnny Lawerence");
superSensei.speakWisdom();



