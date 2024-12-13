radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        if (左右 == 1) {
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P13, 1023)
            pins.analogWritePin(AnalogPin.P14, 1023)
        } else if (左右 == 2) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P13, 1023)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        } else if (左右 == 3) {
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.analogWritePin(AnalogPin.P14, 1023)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P15, 0)
        } else if (左右 == 4) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else {
        if (receivedNumber == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P15, 1023)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P16, 1023)
        } else if (receivedNumber == 2) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P15, 1023)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        } else if (receivedNumber == 3) {
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P16, 1023)
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P15, 0)
        } else if (receivedNumber == 4) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
})
let 左右 = 0
radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            `)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1023) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(1)
        左右 = 1
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2)
        左右 = 2
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(3)
        左右 = 3
    } else {
        radio.sendNumber(4)
        左右 = 4
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(-1)
    }
})
