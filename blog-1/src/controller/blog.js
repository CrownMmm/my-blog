const getList = (author, keyword) => {
  //先返回假数据，格式是正确的
  return [
    {
      id: 1,
      title: "标题1",
      content: "内容1",
      createTime: 1546610491112,
      author: "zhangsan",
    },
    {
      id: 2,
      title: "标题2",
      content: "内容2",
      createTime: 1546610524373,
      author: "lisi",
    },
  ];
};

const getDetail = (id) => {
  //先返回假数据
  return [
    {
      id: 3,
      title: "标题3",
      content: "内容3",
      createTime: 1546610493333,
      author: "zhang",
    },
    {
      id: 4,
      title: "标题4",
      content: "内容4",
      createTime: 1546610524444,
      author: "li",
    },
  ];
};

const newBlog = (blogData = {}) => {
  // blogData是一个对象 包含title content
  return {
    id: 3, //表示新建博客插入到数据表里的id
  };
};

const updateBlog = (id, blogData = {}) => {
  // blogData是一个对象 包含title content
  //id 表示更新博客的id
  // console.log("update", id, data);
  return true;
};

const delBlog = (id) => {
  //id就是删除博客的id
  return true;
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
