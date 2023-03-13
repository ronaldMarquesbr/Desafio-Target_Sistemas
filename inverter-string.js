const userInput = 'minha string'

function inverter(texto) {
    const stringArray = texto.split('')
    const textSize = stringArray.length
    let invertedStringArray = new Array

    for (var i = textSize; i > 0; i--) {
        invertedStringArray.push(stringArray[i - 1])
    }

    return invertedStringArray
}

const invertedString = inverter(userInput)
console.log(invertedString)