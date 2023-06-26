let range = 0
let strip: grove.TM1637 = null
let logo: neopixel.Strip = null
input.onPinPressed(TouchPin.P0, function () {
    range = neopixel.hsl(0, 0, 0)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(2)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
basic.forever(function () {
    game.startCountdown(10000)
    basic.showNumber(6789)
    strip = grove.createDisplay(DigitalPin.P0, DigitalPin.P0)
})
basic.forever(function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    logo = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB_RGB)
    pins.servoWritePin(AnalogPin.P7, 180)
})
