function test1(a, b) {
    var d = 10;
    var e = 20;
    var c;
    var i;
    var random = Math.floor(Math.random() * 11);
    for (i = 0; i < 10; i++) {
        if (i == random) {
            return "LoopCount: " + i + " Total: " + d * e * i * a * b;
        }
        ;
    }
    ;
}
function main() {
    var result;
    result = test1(10, 50);
    if (typeof result === "undefined") {
        console.log("undefined");
        return 1;
    }
    else {
        console.log(result);
    }
}
main();
