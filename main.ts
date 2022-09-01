let BLUE = 0
let GREEN = 0
let RED = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    led.plot(4, 4)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 0
    for (let index = 0; index < 1; index++) {
        RED = 1
        BLUE = -1
        strip.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1000)
    }
    for (let index = 0; index < 1; index++) {
        GREEN = 1
        RED = -1
        strip.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1000)
    }
    for (let index = 0; index < 1; index++) {
        BLUE = 1
        GREEN = -1
        strip.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1000)
    }
})
