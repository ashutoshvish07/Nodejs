const os =require("os")

// console.log(os.arch())
const freeMom= os.freemem();
// console.log(freeMom)
//  console.log(`${freeMom/1024/1024/1024} GB`)
const totalMemo = os.totalmem();

// console.log(`${totalMemo/1024/1024/1024} GB`)

//  console.log(os.hostname())
console.log(os.type())
//  console.log(os.platform())



