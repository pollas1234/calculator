controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Noise, 4292, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    grid.move(mySprite, 1, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    grid.move(mySprite, -1, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (grid.spriteCol(mySprite) == 0) {
        calculator.Add(game.askForNumber(""), game.askForNumber(""))
    } else if (grid.spriteCol(mySprite) == 1) {
        calculator.Subtract(game.askForNumber(""), game.askForNumber(""))
    } else if (grid.spriteCol(mySprite) == 2) {
        calculator.Multiply(game.askForNumber(""), game.askForNumber(""))
    } else if (grid.spriteCol(mySprite) == 3) {
        calculator.Divide(game.askForNumber(""), game.askForNumber(""))
    } else if (grid.spriteCol(mySprite) == 4) {
        calculator.Exponentiate(game.askForNumber(""), game.askForNumber(""))
    } else {
        calculator.Factorial(game.askForNumber(""))
    }
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel`)
mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
grid.moveWithButtons(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico`)
