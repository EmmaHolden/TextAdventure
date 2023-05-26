import inquirer from 'inquirer';

export async function getName() {
    let {userInput} = await inquirer.prompt({
        type: "input",
        name: "userInput",
        message: "What is your name?"
    })
    return userInput;
}

export let food = async () => {
    let question = await inquirer.prompt({
        type: "list",
        name: "userAnswer",
        message: "You are feeling hungry. Which would you like to eat?",
        choices: ["apple", "strawberry", "an unknown fruit that you don't recognise"]
    })
    return question;
}

export let directions = async () => {
    let question = await inquirer.prompt({
        type: "list",
        name: "userAnswer",
        message: "Which way would you like to go?",
        choices: ["left", "right", "neither - go across the river"]
    })
    return question;
}

export let sleep = async () => {
    let question = await inquirer.prompt({
        type: "list",
        name: "userAnswer",
        message: "You need a place to sleep. Where would you like to sleep?",
        choices: ["In a tree", "In a cave"]
    })
    return question;
}
