// const { createServer } = require('node:http'); // module -> http , we use 'require' to use any module and here type is commonjs
// import http from "http" -> agr type - module h to


// mymodule.js -> for import module type
// import {a , b} from "./mymodule.js"
// console.log(a)
import harry from "./mymodule.js"  //-> yahan obj ki jgh harry bhi likhoge to bhi chla jaega kyunki ye default export h 
console.log(harry)

//mymodule2.js -> import commonjs type
// const a = require("./mymodule2.js")
// console.log(a)


// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html'); //content type header determine humara content kis treeke se dteermine kiya jaega -> kesa text chahiye html , plain etc.
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
