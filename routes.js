
const fs = require('fs');
const routesFunction= (req,res)=>{
   const url =req.url;
   const method=req.method
if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Enter your message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"></input><button>submit</button></form></body>')
    res.write('</html>');
    return res.end(); 
}
if(url === '/message' && method ==='POST'){

    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk)
    });
    req.on('end',()=>{
        const parsedBody= Buffer.concat(body).toString();
        console.log(parsedBody)
        const message = parsedBody.split('=')[1]
        fs.writeFileSync('message.txt' , "DUMMY DATA")
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    })
    
  
}
res.setHeader('Content-Type','text/html');
res.write('<html>')
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello !</h1></body>')
res.write('</html>');
res.end(); 
}

module.exports=routesFunction