import { getName, sleep, food, directions} from './inq.js'
import {Player, Animal, Dinosaur, Bear} from './classes.js'
import { grizzlyEncounter, findWeapon, dinosaurEncounter, playerEscapes} from './functions.js'
import chalk from 'chalk';

let start = async () => {
    let answer = await getName()
    playerCharacter.name = answer
    chooseFood()
}

let chooseFood = async () => {
    let answer = await food()
    if (answer.userAnswer == "strawberry"){
        console.log(chalk.red("You are poisoned!"))
        playerCharacter.hunger += 40
        playerCharacter.decreasesHealth(30)
    } else if (answer.userAnswer == "apple") {
        console.log(chalk.green("That was really tasty "))
        playerCharacter.hunger += 20
        playerCharacter.increasesHealth(10)
    } else {
        console.log(chalk.magenta("Surprise! You have recieved the unknown fruit."))
        playerCharacter.increasesEnergy(20)
        playerCharacter.hunger += 30
        
    }
    chooseDirection()
}

let chooseDirection = async () => {
    console.log(chalk.yellow("You walk along the path and you lose energy."))
    playerCharacter.decreasesEnergy(20)
    let answer = await directions()
    if(answer.userAnswer == "left"){
        findWeapon(playerCharacter)
    } 
    else if (answer.userAnswer == "right"){
        grizzlyEncounter(playerCharacter, grizzlyBear)
    }
    else {
        console.log(chalk.cyan("You have caught a disease in the water!"))
        playerCharacter.decreasesHealth(50)
        playerCharacter.disease += 50
    }
    chooseSleep()
}

let chooseSleep = async () => {
    let answer = await sleep()
    if(answer.userAnswer == "In a tree"){
        dinosaurEncounter(playerCharacter, dinosaur)
    } 
    else if (answer.userAnswer == "In a cave"){
        playerEscapes(playerCharacter)
    }
}

var grizzlyBear = new Bear()
var dinosaur = new Dinosaur()
var playerCharacter = new Player("")
playerCharacter.name = start()


