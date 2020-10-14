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
}

module.exports = {
  getList,
  getDetail
};
