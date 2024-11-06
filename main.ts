/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Sep 2020
 * This program does code using while loop
*/

//variable
let sprite: game.LedSprite = null
let loopCounter = 0

//setup
basic.showIcon(IconNames.Happy)
basic.pause(100)

//when button A is pressed pixels move around perimeter clockwise
input.onButtonPressed(Button.A, function (){
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter < 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    loopCounter = 0
    sprite = game.createSprite(5, 0)
    while (loopCounter < 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    loopCounter = 5
    sprite = game.createSprite(5, 5)
    while (loopCounter > -1) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

    loopCounter = 5
    sprite = game.createSprite(0, 5)
    while (loopCounter > -1) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
})

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//when button B is pressed pixels move around perimeter counter clockwise

input.onButtonPressed(Button.B, function() {
    

    loopCounter = 0
    sprite = game.createSprite(0, 5)
    while (loopCounter < 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    loopCounter = 0
    sprite = game.createSprite(0, 5)
    while (loopCounter < 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }

    loopCounter = 5
    sprite = game.createSprite(5, 5)
    while (loopCounter > -1) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    
    loopCounter = 5
    sprite = game.createSprite(5, 0)
    while (loopCounter > -1) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }

})

basic.clearScreen()
basic.showIcon(IconNames.Happy)
