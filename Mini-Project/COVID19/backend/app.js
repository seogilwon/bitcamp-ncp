const express = require('express');
const request = require("request");
const port = 3000;
const app = express();

app.get('/proxy', (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/JSON; charset=UTF-8');


    request.get({
      url: "http://apis.data.go.kr/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason?" +
      "serviceKey=s2eMCzdkGrxPMhVr%2Bhv2U3bF%2Bj3ui%2B7qUS4r0tJKms0%2Bm%2FDN2TCj76L0o%2BacXVPei8K2lxKVFICQraz0iZgJ5g%3D%3D&"
    }, (error, response, body) => {
      // res.send(JSON.stringify(body));
      res.send(body);

  });
});
app.listen(3000, () => console.log(`${port}번 포트에서 서버 시작했음!`));