
const fs = require("fs")
const isEven = require("is-even")
const os = require("node:os")
const path =require("path")
const {addFive,addten} = require("./another");
// creating a new file
// fs.writeFileSync('read.txt',"My name is Ashutosh")

// fs.appendFileSync("read.txt","  how are you  I am fine Thanku ")

// const data = fs.readFileSync("read.txt")
//  console.log(data.toString())

// fs.renameSync("read.txt","readWrite.txt")

// console.log(addFive(14))
// console.log(addten(1))
 fs.readFile(path.join(".","readWrite.txt"),{encoding:"utf-8"},(err,data)=>{
    console.log(data)
 })

// const data = os.version()
// const data = os.()
// console.log(data)