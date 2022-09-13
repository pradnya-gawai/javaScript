var x =2
function f1 () { 
var u =4
}
function f2 (){
    var y =7
    return function f3 () { // closure
        let z=8
        let result =x+y+z
        console.log(result)
        // console.log(u) error
    }
}

const result2 =f2() // calling outer function
result2() // calling closure