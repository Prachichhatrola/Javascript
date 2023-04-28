let promise = new Promise(function(resolve, reject) {
	alert("Hello")
	resolve(56)
})


console.log("Hello one")
setTimeout(function() {
	console.log("Hello two seconds")
}, 2000)

console.log("My name is" + " Hello three")
console.log(promise)

// Fetch google.com homepage ==> console.log("google.com homepage done")
// fatch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script
