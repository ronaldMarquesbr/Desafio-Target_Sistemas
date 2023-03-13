const userInput = 1


function fibonacci(x) {
    let a = 0
    let b = 1
    let c

    const successMessage = 'Esse número faz parte da sequência de fibonnaci'
    const failMessage = 'Esse número não faz parte da sequência de fibonnaci'

    let numberRegex = /^\d+$/


    if (!numberRegex.test(x)) {
        console.log('Digite um número inteiro maior ou igual a zero!')
        return  
    }

    if (x === 0) {
        console.log(successMessage)
    }

    while (a < x) {
        c = a + b
        if (x === c) {
            console.log(successMessage)
            return
        }
        a = b
        b = c
    }

    console.log(failMessage)
}

fibonacci(userInput)