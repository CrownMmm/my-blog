const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.port);
redisClient.on("error", (err) => {
  console.error(err);
});

function set(key, val) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val, redis.print);
}
function get(key) {
  const promise = new Promise((reslove, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      reslove(val);
      if (val == null) {
        reslove(null);
        return;
      }
      try {
        resolve(JSON.parse(val));
      } catch (ex) {
        resolve(val);
      }
    });
  });
  return promise;
}

module.exports = {
  set,
  get,
};
