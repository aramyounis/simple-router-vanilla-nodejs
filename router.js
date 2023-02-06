function REQUEST_HANDLER(req, res) {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html",
      });
      res.write("<h1>Page Not Found!!!</h1>");
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.write("<h1>Something Wrong!!</h1>");
    res.end();
  }
}

const METHOD_GET = (url, callback) => {
  routes["GET"][url] = callback;
};

const METHOD_POST = (url, callback) => {
  routes["POST"][url] = callback;
};

const METHOD_UPDATE = (url, callback) => {
  routes["UPDATE"][url] = callback;
};

const METHOD_DELETE = (url, callback) => {
  routes["DELETE"][url] = callback;
};

const PRINT_ROUTES = () => {
  console.log("List of routers: ", routes);
};

const routes = {
  GET: {},
  POST: {},
  UPDATE: {},
  DELETE: {},
};

module.exports = {
  REQUEST_HANDLER,
  METHOD_GET,
  METHOD_POST,
  METHOD_UPDATE,
  METHOD_DELETE,
  PRINT_ROUTES,
};
