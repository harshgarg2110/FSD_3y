let arr=[1,23,3,8,33,1,6]
let newary=arr.map((x)=>x*2);
// console.log(newary)

let even = arr.filter( (x)=> x%2==0 ).reduce((x,y)=> x+y,0)
console.log(even)

// let sum = even.reduce((x,y)=> x+y,0)
// console.log(sum)