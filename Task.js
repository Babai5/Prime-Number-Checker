function check() {
    var val = document.getElementById("number").value * 1;
    // console.log(`printing input:${val}`)
    var prime = 1;
    for (var i = 2; i < val; i++) {
        if (val % i == 0) {
            prime = 0;
            break;
        }
    }


    if (val == 0) {
        var result = `${val} is neither a prime nor a composite number.`;
    }
    else if (prime == 1 || val == 2) {
        var result = `${val} Is A Prime Number.`;
    }
    else {
        var result = `${val} Is Not A Prime Number.`;
    }


    document.getElementById("number").value = "";
    document.getElementById("resultval").innerHTML = result;
}

function resclr(){
    document.getElementById("resultval").innerHTML = "";
}