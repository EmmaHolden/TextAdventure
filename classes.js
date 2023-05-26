export class Player {
    constructor(name) {
        this.name = name
        this.health = 100
        this.energy = 100
        this.hunger = 50
        this.disease = 0
        this.currentWeapon = "hands"
    }

    eats() {
        console.log(`${this.name} is eating.`)
        return this
    }

    sleeps() {
        console.log(`${this.name} is sleeping.`)
        return this
    }

    decreasesHealth(amount){
        this.health -= amount;
        console.log(`${this.name} has lost ${amount} health and now has ${this.health} remaining.`)
    }

    increasesHealth(amount){
        this.health += amount;
        console.log(`${this.name} has gained ${amount} health and now has ${this.health}.`)
    }

    decreasesEnergy(amount){
        this.energy -= amount;
        console.log(`${this.name} has lost ${amount} energy and now has ${this.energy} remaining.`)
    }

    increasesEnergy(amount){
        this.energy += amount;
        console.log(`${this.name} has gained ${amount} energy and now has ${this.energy}.`)
    }

    attacks(){
        console.log(`${this.name} attacks the enemy.`)
    }

    dies(){
        console.log("Unfortunately, you have died.")
    }
}

export class Animal {
    constructor() {
        this.health = 100
        this.energy = 100
        this.weapons = "claws"
    }

    attacks(){
        console.log(`The animal attacks you with their ${this.weapons}.`)
    }
}

export class Bear extends Animal {
    constructor() {
        super()
        this.danger = 50
    }

    bites() {
        console.log(`The grizzly bear bites for ${this.danger} points of damage.`)
    }
}


export class Dinosaur extends Animal {
    constructor() {
        super()
        this.danger = 80

    }

    stompsOnPlayer(){
        console.log("You have been stomped on by the dinosaur.")
    }
}
