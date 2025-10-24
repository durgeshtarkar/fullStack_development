const fs = require("fs")
// const fs = require("fs/promises")
console.log(fs)

console.log("starting")
// fs.writeFileSync("harry.txt" , "harry is a good boy")  //writefilesync cose ko blosck krdeta h mtlb pehle starting chlega fir writefilesync then ending , lekin ye approach accha nhi javascript asynchronous approach pr chlti h 
fs.writeFile("harry2.txt" , "harry is a bad boy", ()=>{ // isme pehle starting then ending then writefile chlega mtlb program wait n krega write operation k 
    console.log("done")
    fs.readFile("harry2.txt" , (error , data)=>{  // to read file ()=> call back 
          console.log(error , data.toString()) // aese hi hr aek file ke liye read write krte jaenge to code bahut bda bn jaega , complicated so it is callback Hell condition
    })
})
console.log("ending")