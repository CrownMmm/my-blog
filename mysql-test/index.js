const mysql = require("mysql");

//创建链接对象

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  prot: "3306",
  database: "myblog",
});

// 开始链接

con.connect();

// const sql = `update users set realname='李四2' where username='lisi';`;
// const sql = `insert into blogs (title,content,createtime,author)values ('标题C','内容C',1603297301910,'lisi');`;
const sql = `select * from users`;
con.query(sql, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

//关闭链接
con.end();
