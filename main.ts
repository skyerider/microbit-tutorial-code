input.onButtonPressed(Button.A, function () {
    while (counter > 0) {
        counter = 0
        for (let index3 = 0; index3 <= 3; index3++) {
            if (list[index3] > list[index3 + 1]) {
                temp = list[index3]
                list[index3] = list[index3 + 1]
                list[index3 + 1] = temp
                counter += 1
            }
            basic.clearScreen()
            for (let column3 = 0; column3 <= 4; column3++) {
                row = 0
                while (row < list[column3]) {
                    led.plot(column3, 4 - row)
                    row += 1
                }
                basic.pause(100)
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index2 = 0; index2 <= 4; index2++) {
        list[index2] = randint(0, 4) + 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let column2 = 0; column2 <= 4; column2++) {
        row = 0
        while (row < list[column2]) {
            led.plot(column2, 4 - row)
            row += 1
        }
    }
})
let row = 0
let temp = 0
let counter = 0
let list: number[] = []
let index = 0
let column = 0
list = []
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . # .
    # # # . .
    `)
list = [4, 2, 5, 1, 3]
counter = 1
