const express = require('express')
const app = express();
const {readFile}= require("fs").promises;

app.get("/",async(req,res)=>{
  res.send(await readFile('./index.html','utf-8'))
})

app.get("/about",async(req,res)=>{
  res.send(await readFile('./about.html','utf-8'))
})

app.get("/contact-me",async(req,res)=>{
  res.send(await readFile('./contact-me.html','utf-8'))
})

app.use(async(req,res)=>{
  res.status(404).send(await readFile('./404.html','utf-8'))
})

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("index.html", (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("about.html", (err, data) => {
//       if (err) throw err;
//       res.end(data);
//     });
//   } else if (req.url === "/contact-me") {
//     fs.readFile("contact-me.html", (err, data) => {
//       if (err) throw err;
//       res.end(data);
//     });
//   }
//   else{
//     fs.readFile("404.html", (err,data)=>{
//         if (err) throw err;
//         res.end(data);
//     })
//   }
// });


app.listen(5050,()=>{console.log("listening")})
