input.onButtonPressed(Button.A, function () {
    ikxko += 1
})
input.onButtonPressed(Button.AB, function () {
    led.plot(ikxko, ýčko)
    if (ikxko == 0) {
        radio.sendValue("0", ýčko)
    } else if (ikxko == 1) {
        radio.sendValue("1", ýčko)
    } else if (ikxko == 2) {
        radio.sendValue("2", ýčko)
    } else if (ikxko == 3) {
        radio.sendValue("3", ýčko)
    } else if (ikxko == 4) {
        radio.sendValue("4", ýčko)
    }
    ikxko = 0
    ýčko = 0
})
input.onButtonPressed(Button.B, function () {
    ýčko += 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "0") {
        přímo_ixko = 0
    } else if (name == "1") {
        přímo_ixko = 1
    } else if (name == "2") {
        přímo_ixko = 2
    } else if (name == "3") {
        přímo_ixko = 3
    } else if (name == "4") {
        přímo_ixko = 4
    }
    led.plot(přímo_ixko, value)
})
let přímo_ixko = 0
let ikxko = 0
let ýčko = 0
radio.setGroup(1)
ýčko = 0
ikxko = 0
přímo_ixko = 0
