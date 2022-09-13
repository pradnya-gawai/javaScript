
let num1 =2 ,num2=4 ,num3=3,num4=false,num5="hellow";
let reust1=num2/0
console.log(reust1) // infinity
let reust2=num2/num4
console.log(reust2) // Infinity

let reust3=num2/num5
console.log(reust3) // NaN

let reust4=num2+num3+num5+num3+num4
console.log(reust4) // 7hello3false

console.log(3+4+null ) // 7
console.log(3+4+null +"hi") // 7hi
console.log(3+4+null+"hi"+null) //7hinull

// Everything in javaScrpt is an object :Wrong
// Everything in javaScrpt can act as object :Write
console.log(typeof(3)) //Number
num2 =new Number(2)
console.log(num2) //Objext
let num7=45.9092
let result =num7.toFixed(2) // acting as object
console.log(result) //
 let str =1.23
 console.log(parseInt(str)) //1
 console.log(parseFloat(str)) //1
 console.log(Number(str)) //1
 let obj=new Number(str)
 console.log(typeof(obj))


