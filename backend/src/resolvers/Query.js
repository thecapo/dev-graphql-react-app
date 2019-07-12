const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  posts: forwardTo('db'),
  post: forwardTo('db')
};

module.exports = Query;