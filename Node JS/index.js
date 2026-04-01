const express = require("express");
const path = require("path")
// const fs = require("fs")
// const fs = require("fs").promises

// const home = fs.readFileSync('./home.html', 'utf-8')
// const about = fs.readFileSync('./about.html', 'utf-8')
// const contact = fs.readFileSync('./contact.html', 'utf-8')

const server = express();
let port = 3000;

server.use(express.static('public'))
server.use(express.json());


server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'home.html'))
})

server.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, 'about.html'))
})

server.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'))
})

server.post('/user/register',(req,res)=>{
    let data = req.body;
    console.log(data)
    res.send("<b> User Registerd </b>")
})

server.get('/products',(req,res)=>{
    res.send("Post Request")
})

server.listen(port, ()=>console.log("SERVER IS RUNING ON: http://localhost:" + port));
