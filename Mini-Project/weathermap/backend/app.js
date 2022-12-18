const express = require('express');
const request = require('request');
const port = 3000;
const app = express();

let today = new Date();
var hour = today.getHours();

if (hour < 11) {
  var hours = `0${hour-1}00`;
} else {
  var hours = `${hour-1}00`;
};

console.log(hours);

app.use(express.urlencoded({ extended: true }));

app.get('/proxy2', (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?" +
    "serviceKey=WD4E2xNHH94SvdddvndrYB%2BF7Rnzk7xKe%2BYP0ovSAZ4w%2F8jmHuVGOU4i9ZUBgutZ8UXNAzIOPUhcGkl4PFaMSQ%3D%3D" +
    "&pageNo=1" +
    "&numOfRows=1000" +
    "&dataType=JSON" +
    "&base_date=" + req.query.base_date +
    "&base_time=" + hours + 
    "&nx=" + req.query.nx +
    "&ny=" + req.query.ny;

  request.get({
    uri: openApiUrl
  }, (error, response, body) => {
    res.send(body);
  });
});

// 웹서버 실행하기
app.listen(
  3000, //포트 번호 지정
  () => {
    console.log(`${port}번 포트에서 서버 시작했슴!`);
  } // 서버가 시작되었을 때 호출될 함수 = 리스너 = 이벤트 핸들러
);
