// sayhello=() =>{
//     console.log("I am i sayhello function")
// };

// console.log("Task Started");
// setTimeout(sayhello,3000)
// sayhello();
// console.log("task end");

console.log("start");
setTimeout(()=>{
    console.log("first task");
    setTimeout(()=>{
        console.log("second task");
        setTimeout(()=>{
            console.log("third task")
        },3000);
    },2000);
},1000);
console.log("End")