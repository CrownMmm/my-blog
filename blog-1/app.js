const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const querystring = require("querystring");

const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  //设置返回格式json
  res.setHeader("Content-type", "application/json");

  //获取path
  const url = req.url;
  req.path = url.split("?")[0];

  //解析query
  req.query = querystring.parse(url.split("?")[0]);

  //处理postData
  getPostData(req).then((postData) => {
    req.body = postData;
    //处理blog路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      res.end(
        JSON.stringify(blogData)
        // JSON.stringify({
        //   error: -1,
        //   message: "xxx",
        // })
      );
      return;
    }

    //处理user路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    //未命中路由 返回404
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  });
};

module.exports = serverHandle;

// process.env.NODE_ENV
