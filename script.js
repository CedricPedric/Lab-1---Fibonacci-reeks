var a = 0
var b = 1
var c = 0

function fibonacci(howMuch) {
    for (var i = 0; i < howMuch; i++) {
        document.write(c + " ")
        c = a + b
        a = b
        b = c
    }
    return ( document.write(c + " "))
};

fibonacci(20)
