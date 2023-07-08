var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
app.get("/",(req,res)=>{
    res.send("hello from server")
}).listen(3000)

console.log("Listing on PORT 3000")