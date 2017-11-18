// 使用 Mock,梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  'list|10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': '@name'
  }]
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
});