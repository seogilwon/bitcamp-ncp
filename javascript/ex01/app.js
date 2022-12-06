const express = require('express')
const app = express()
const port = 3000


app.get('/exam05_1', async (req, res) => {
  await new Promise((resolve, reject) => {setTimeout(resolve,10000)});
  res.send('console.log("exam05_1 ok!");')
})

app.get('/exam05_2', (req, res) => {
  res.send('console.log("exam05_2 ok!");')
})

app.get('/exam05_x', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve,10000));
  res.send('var rate = 30000;')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  



//완벽하게 이해 하지 않아도 사용한다. 주화입마에빠지지말것. 
//예를 들면 초중고 전부 완벽하게 이해하고 학기를 올라갔는지?
//운전면허딸때 자동차의 구조를 전부 이해하고 운전하는지?
//코드 보는 '눈치'가 중요. 저걸 어떻게 사용하는지?