// 新しいノードが作成（または更新）されるたびにGatsbyによって呼び出されます。
exports.onCreateNode = ({ node }) => {
    console.log(node.internal.type)
  }