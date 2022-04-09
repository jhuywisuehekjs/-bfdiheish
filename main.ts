input.onButtonPressed(Button.A, function () {
    let y = 0
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(x, y)
            basic.pause(150)
        }
    }
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . # . .
        # # . # .
        # . . . .
        `)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(4, 4 - y)
            basic.pause(150)
        }
    }
    basic.clearScreen()
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        x += 0
        basic.pause(150)
    }
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(x, y)
            basic.pause(150)
        }
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 2)
        x += 0
        basic.pause(150)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 4)
        x += 0
        basic.pause(150)
    }
    basic.clearScreen()
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 4)
        x += 0
        basic.pause(150)
    }
    for (let y = 0; y <= 4; y++) {
        let x = 0
        led.plot(x, 4 - y)
        y += 0
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, 0)
        x += 0
        basic.pause(150)
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(4, 4 - y)
            basic.pause(150)
        }
    }
    basic.clearScreen()
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(x, y)
            basic.pause(150)
        }
    }
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . # .
        # . # . .
        # . . . .
        # . . . .
        `)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(4, y)
            basic.pause(150)
        }
    }
    basic.clearScreen()
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        x += 0
        basic.pause(150)
    }
    for (let y = 0; y <= 5; y++) {
        for (let x = 0; x <= 0; x++) {
            led.plot(x, y)
            basic.pause(150)
        }
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 2)
        x += 0
        basic.pause(150)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 4)
        x += 0
        basic.pause(150)
    }
    basic.clearScreen()
})
