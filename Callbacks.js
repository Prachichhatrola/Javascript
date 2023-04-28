//Syncronouc programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " yrars old and has " + c + " favorite color.");

//Asynchronous programming
// console.log("Start")
// setTimeout(function(){
//   console.log("Hey I am good");
// }, 3000
//           )
// console.log("End")

//callbacks
function loadScript(src){
  var script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
