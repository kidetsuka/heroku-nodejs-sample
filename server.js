const http = require('http');
const PORT = 8000;
const html = require('fs').readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // from browser access
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();

});

server.listen(process.env.PORT || 3000, ()=> {
  console.log("listening on port 3000");
});