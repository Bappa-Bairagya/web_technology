let r=Math.random()
console.log(r)
let a= prompt("enter first number")
let b=prompt("enter operation type")
let c=prompt("enter second number")

let obj ={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}
if(r>0.1){
    alert(`the value is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b=obj[b]
    alert(`the value is ${eval(`${a} ${b} ${c}`)}`)
    alert("soory")
}

