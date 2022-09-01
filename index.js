
const fs = require("fs")

// creating a new file
// fs.writeFileSync('read.txt',"My name is Ashutosh")

// fs.appendFileSync("read.txt","  how are you  I am fine Thanku ")

// const data = fs.readFileSync("read.txt")
//  console.log(data.toString())

fs.renameSync("read.txt","readWrite.txt")

