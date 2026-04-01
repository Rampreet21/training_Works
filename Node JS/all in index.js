// console.log("Index");

// let {add,sub} = require("./about")
let os = require("os")
const path = require("path")
const fs = require("fs")
const fa = require("fs").promises
const http = require("http")


// console.log(add(2,2))
// console.log(os.cpus().length)
// console.log(path.resolve("rk", "files"))

// let data = fs.readFileSync('./about.js', 'utf-8')
// console.log(data)

// fs.writeFileSync('./sample.txt', '',{flag:"a"})

// if(fs.existsSync('./sample.txt')){
// fs.unlinkSync('./sample.txt')
// }
// else{
//     console.log('file not exits')
// }

// fs.readFile('./sample.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log("       Error:", error.errno, "\nFile",path.basename(error.path),"Not Found!");
//     }else{
//     console.log(data);
//     }
// })


// fa.readFile("./sample.txt","utf-8")
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))


const server = http.createServer()

let home = fs.readFileSync('./home.html', 'utf-8')
let about = fs.readFileSync('./about.html', 'utf-8')
let contact = fs.readFileSync('./contact.html', 'utf-8')
let notFound = fs.readFileSync('./notFound.html', 'utf-8')

let aboutcss = fs.readFileSync('./about.css', 'utf-8')

server.on("request",(req,res)=>{
    if(req.url == '/'){
        res.end(home)
    }
    else if(req.url == '/about'){
        res.end(about)
    }
    else if(req.url == '/contact'){
        res.end(contact)
    }
    else if(req.url == '/about.css'){
        res.end(aboutcss)
    }
    else{
        res.end(notFound)
    }
})

// server.listen(4000,()=>console.log("\x1b[32mSERVER IS RUNNING...\x1b[0m"))
server.listen(4000,()=>console.log("SERVER IS RUNNING..."))






