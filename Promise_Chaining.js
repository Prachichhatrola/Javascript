// let p1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//   console.log("Resolved after 2 seconds")
//   resolve(56)
// }, 2000)
 
// })

// p1.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve("Promise 2")}, 2000)
    
//   })
//   return p2
// }).then((value)=>{
//   console.log("We are done")
// })


const loadScript = (src)=>{
  return new Promise(resolve => {})
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.src = src
  document.body.appendChild(script)
  script.onload = ()=>{
    resolve(1)
  }
  script.onerror = ()=>{reject(0)}
  })
}

let p1 = loadscript("https://localhost:3000/index.js")
p1.then((value)=>{
  console.log(value)
})
