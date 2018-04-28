let async1 =  new Promise((resolve, reject) => {
  setTimeout(()=>{
     console.log("After 3 sec");
     resolve(3);
  }, 3000);
});

let async2 =  new Promise((resolve, reject) => {
  setTimeout(()=>{
     console.log("After 2 sec");
     resolve(2);
  }, 2000);
});

let async3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
     console.log("After 1 sec");
     resolve(1);
  }, 1000);
});


Promise.all([async1, async2, async3]).then(val => console.log("Resolved Values", val)).catch(err => console.log("Found Error:",err));



