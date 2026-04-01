const express = require('express');
const path = require('path');
const server = express();
const port = 2121;

server.use(express.static('public'));
server.use(express.json());

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

server.get('/foods',(req , res)=>{
    res.sendFile(path.join(__dirname, 'foods.html'))
})

server.get('/about',(req , res)=>{
    res.sendFile(path.join(__dirname, 'about.html'))
})

server.get('/contact',(req , res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'))
})

server.get('/foods/item',(req , res)=>{
    res.sendFile(path.join(__dirname, '/item/item1.html'))
})

server.get('/shipping',(req , res)=>{
    res.sendFile(path.join(__dirname, 'shipping.html'))
})





server.listen(port,()=>console.log("SERVER IS RUNING ON: http://localhost:" + port));