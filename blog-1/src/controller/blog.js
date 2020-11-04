const xss = require("xss")
const { exec } = require("../db/mysql");

//xxx.html ?k1=v1

const getList = (author, keyword) => {
  //先返回假数据，格式是正确的
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  //返回prmoise
  return exec(sql);
};

const getDetail = (id) => {
  // console.log(id);
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  // blogData是一个对象 包含title content
  const title = xss(blogData.title)
  // console.log('title is', title)
  const content = xss(blogData.content)
  const author = blogData.author;
  const createTime = Date.now();
  const sql = `
    insert into blogs (title,content,createTime,author)
    values('${title}','${content}','${createTime}','${author}')
  `;

  return exec(sql).then((insertData) => {
    // console.log("insertData", insertData);
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // blogData是一个对象 包含title content
  //id 表示更新博客的id
  // console.log("update", id, data);
  const title = blogData.title;
  const content = blogData.content;
  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `;
  return exec(sql).then((updateData) => {
    // console.log("updateData is", updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  const sql = `delete from blogs where id ='${id}' and author='${author}'`;
  return exec(sql).then((updateData) => {
    // console.log("updateData is", updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
  //id就是删除博客的id
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
