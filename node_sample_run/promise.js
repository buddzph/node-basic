// Promises
let success = true;

// Single Promise
let printAfter1Second = new Promise((resolve, reject) => {
  setTimeout(function(){
   if(success)
      resolve("After 1 second");
   else
    reject("Promise Rejected");
  }, 1000 );
});

console.log("Just print this log.");
printAfter1Second.then( res => console.log(res), err => console.log(err));

// Promise in a function
let addNumbers = (a, b) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(isNaN(a) || isNaN(b))
        reject("You must input digits");
      else
        resolve(a+b);
    }, 1000);
  });
};

// Single
addNumbers(5,5).then( res => console.log("Result:", res), err => console.log("Error:", err) );

// Chain without catch
addNumbers(5,5).then( res =>{
  console.log("Chain 1 Result:", res);
  return addNumbers(res, 10);
}, err => console.log("Chain 1 Error:", err) )
.then(res1 => console.log("Chain 1 Last Result", res1),
      err=>console.log("Chain 1 Last Error:", err));
    
// Chain with catch
addNumbers(5,"B").then( res =>{
  console.log("Chain 2 Result:", res);
  return addNumbers(res, 10);
})
.then(res1 => console.log("Chain 2 Last Result", res1))
.catch(err => console.log("Error found", err));
