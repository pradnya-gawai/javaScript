console.log(Add(4,5))
// console.log(x)
var x =2
// we can  access named function before defination
function Add (x,y)
{
    return x+y
}
// anonomous function can not access before function defination
const sum = function(x,y){
    return x+y
}
console.log(sum(9,0))
// arrow function can not access before defination
const add =(x,y)=>{
    return x+y
}
console.log(add(3,5))