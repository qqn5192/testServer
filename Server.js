//テスト用のサーバーです。Dos攻撃のテストなどにご利用ください
const express = require('express');

const app = express() 
let i = 0;
app.get('/Test', (req, res) => {
  i++;
console.log('テスト成功！');
 res.json({message: "テスト成功"})
}

  app.listen(3000, () => {
  console.log('server running on port 3000.')
  });
