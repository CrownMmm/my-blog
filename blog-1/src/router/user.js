const { loginCheck } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
  const method = req.method; //get post
  const url = req.url;
  const path = url.split("?")[0];

  //登录
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    return result.then((data) => {
      if (data.username) {
        return new SuccessModel();
      }
      return new ErrorModel("登录失败");
    });
  }
};

module.exports = handleUserRouter;
