
// Synchronous -> single thread -> blocking 
// dijalankan baris per baris 
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yang memakan waktu lama atau bahkan tidak berhenti");
// console.log("Proses 4");

// Asynchronous -> multi thread -> nonblocking 
//1. parallelism > berjalan bersama 
setTimeout(() => {
    console.log("proses 1");
}, 3000);
    console.log("proses 2");
setTimeout(() => {
    console.log("proses 3");
}, 3000);
    console.log("proses 4");

//2. concurrency > tidak berjalan bersama 
setTimeout(() => {
    console.log("proses 1");
    setTimeout(() => {
        console.log("proses 2");
        setTimeout(() => {
            console.log("proses 3");
            setTimeout(() => {
                console.log("proses 4");
            },3000);
        },3000);
    },3000);
},3000);
        
// promise 
let condition = true ;
const newPromise = new  Promise((resolve, reject) => {
    if (condition) {
        resolve("berhasil");
    } else {
        reject("gagal");
    }
}); 

// use promise 
// 1. then - catch 
newPromise
    .then((result) => {
        console.log(result);
    })
    .then((result2) => {
        console.log(result2);
    })
    .catch((error) => console.log(error));

//2. Async - Await 
// Selalu digunakan pada fungsi 
const consumePromise = async () => {
    try {
        let result = await newPromise;
        console.log(result);
    } catch (error) {
      console.log(error);
    }
};
consumePromise(); 

// use promise  fetch
