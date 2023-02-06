const http = require("http");
const router = require("./router.js");

const app = http.createServer((req, res) => router.REQUEST_HANDLER(req, res));

router.METHOD_GET("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write("<h1> Home </h1>");
  res.end();
});

router.METHOD_GET("/info", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write("<h1> info </h1>");
  res.end();
});

router.PRINT_ROUTES();

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
