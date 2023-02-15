var a = 0
var b = 1
var c = 0


for (var i = 0; i < 20; i++) {
    console.log(c);
    c = a + b
    a = b
    b = c
}

