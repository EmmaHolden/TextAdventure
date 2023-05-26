export let grizzlyEncounter = (playerCharacter, grizzlyBear) => {
    console.log("You have encountered a grizzlybear!") 
    if (playerCharacter.energy >= 100) {
        console.log("You manage to run away.")
    } else {
        console.log("The grizzly bear attacks you.")
        grizzlyBear.bites()
        playerCharacter.decreasesHealth(grizzlyBear.danger)
    }
}

export let findWeapon = (playerCharacter) => {
    console.log("You have found a weapon!")
    let randomChoice = Math.random()
    if (randomChoice >= 0.5) {
        console.log("It is a sword!")
        playerCharacter.currentWeapon = "sword"
    } else {
        console.log("It is a bow and arrow!")
        playerCharacter.currentWeapon = "bow and arrow"
    }    
    playerCharacter.increasesHealth(20)
}

export let dinosaurEncounter = (playerCharacter, dinosaur) => {
    console.log("You go to sleep in the tree but soon a dinosaur finds you")
    dinosaur.stompsOnPlayer()
    playerCharacter.decreasesHealth(dinosaur.danger)
}

export let playerEscapes = (playerCharacter) => {
    console.log("You sleep safely in the cave")
    if (playerCharacter.disease < 50) {
        console.log("You find a horse sleeping nearby in the cave and use it to escape the forest. You win!")
    } else {
        console.log("You are slowly dying from the disease!")
    }    
}