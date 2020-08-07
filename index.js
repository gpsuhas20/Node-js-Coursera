const http=require('http')
const fs=require('fs')// used to access the files 
const path=require('path')// used to get the path of the files.
const hostname="localhost"
const port=3000;
// we are creating a server and  setting the values to the response
const server=http.createServer((req,res)=>
{
    console.log("Request for "+req.url+ 'by method'+req.method);
  if(req.method=="GET")
  {
      var fileUrl;
      if(req.url=='/') fileUrl='/index.html'
      else fileUrl=req.url

      var filePath=path.resolve('./public'+fileUrl)// to the complete path
      const fileExt=path.extname(filePath)
      if(fileExt=='.html')
      // fs.exists checks whether file exists in the given filepath if it is there then it return a  exists(true /false) which is passed an arguement to the callback function.
      //instead we can do if (fs.exists){function} instead using the callback function.
        fs.exists(filePath,(exists)=>
        {
                if(!exists)
                {
                    res.statusCode=404
                    res.setHeader('Content-Type','text/html')
                    res.end('<html><body><h1>Error 404:'+fileUrl+'not found</h2></body></html')
                    return
                }
        
        res.statusCode=200
        res.setHeader('Content-Type','text/html')
        fs.createReadStream(filePath).pipe(res)
            })
            else{
                res.statusCode=404
                res.setHeader('Content-Type','text/html')
                res.end('<html><body><h1>Error 404:'+req.method+'not supported</h2></body></html')
                return

            }
  }
}
)
server.listen(port,hostname,()=>
{
    console.log(`Server running at http://${hostname}:${port}`)
})
// server.listen is a method which is called to run the host.
// using back quote to insert variable values in the string.
