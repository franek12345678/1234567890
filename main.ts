let ROPE = 0
let X = 0
led.setBrightness(255)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.plot(X, 0)
        basic.pause(100)
        basic.clearScreen()
        X += 1
    }
    for (let index = 0; index < 4; index++) {
        led.plot(4, ROPE)
        basic.pause(100)
        basic.clearScreen()
        ROPE += 1
    }
    for (let index = 0; index < 4; index++) {
        led.plot(X, 4)
        basic.pause(100)
        basic.clearScreen()
        X += -1
    }
    for (let index = 0; index < 4; index++) {
        led.plot(0, ROPE)
        basic.pause(100)
        basic.clearScreen()
        ROPE += -1
    }
})
