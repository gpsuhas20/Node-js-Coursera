const http=require('http')

const hostname="localhost"
const port=3000;
// we are creating a server and  setting the values to the response
const server=http.createServer((req,res)=>
{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>hello world</h1></body></html>')
}
)
server.listen(port,hostname,()=>
{
    console.log(`Server running at http://${hostname}:${port}`)
})
// server.listen is a method which is called to run the host.
// using back quote to insert variable values in the string.
