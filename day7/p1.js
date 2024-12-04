// const myPromise = new Promise((resolve, reject) => {
//     let success=false;
//     console.log
//     if(success)
//     {
//         resolve("Data Send Successfully");
//     }else{
//         reject("Data failed to send");
//     }
// });

// myPromise
// .then((message) =>{
//     console.log("Data Received "+message)
// })
// .catch((err)=>{
//     console.log("Failed to fetch data: "+err)
// })

//================================================================================

function task(message, delay){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}

task("First task completed", 1000)
.then(() => task("Second task is completed",2000))
.then(() => task("this task is completed",3000))

