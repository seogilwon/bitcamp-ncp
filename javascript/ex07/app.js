// express 라이브러리 로딩하기
const express = require('express');

//HTTP요청을 다루는 라이브러리 로딩하기
const request = require('request');

const port = 3000;  //웹서버 포트번호

//express()를 호출하여 웹서버를 준비한다.
const app = express();

//POST요청으로 들어온 payload데이터를 분석할 객체를 지정하기
// => Content-type: application/x-www-form-urlencoded 형식으로 된 payload 데이터처리
//    ex) name=hong&age=20
app.use(express.urlencoded({extended: true}));

//클라이언트 요청에대해 호출될 메서드를 등록
app.get(                        //GET요청이 들어왔을때 호출될 메서드 지정
  '/exam01-1',                  //요청URL
  (req, res) => {               //요청 핸들러 : 요청이들어왔을때 호출되는 메서드
    res.set('Access-Control-Allow-Origin', '*'); //CORS 문제 해결: 누구나컨텐트받을수있게설정
    res.set('Content-Type', 'text/plain;charset=UTF-8');
    res.send('Hello!(누구게)');
  }
);

app.get('/exam02-1', (req, res) => {               //요청 핸들러 : 요청이들어왔을때 호출되는 메서드
    res.set('Access-Control-Allow-Origin', '*'); //CORS 문제 해결: 누구나컨텐트받을수있게설정
    res.set('Content-Type', 'text/plain;charset=UTF-8');

    var payload = `이름: ${req.query.name}\n`;
    payload += `나이: ${req.query.age}\n`;  //\n은 줄바꿈코드 //req상자안 query상자안 age값을 $자리에 둔다. // ``문자열빽틱으로묶는다.

    res.send(payload);
});

app.post('/exam02-2', (req, res) => {          //post요청이 들어오면 호출될함수등록
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/plain;charset=UTF-8');

  var payload = `이름: ${req.body.name}\n`;
  payload += `나이: ${req.body.age}\n`;

  res.send(payload);
});

app.get('/exam03-1', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/plain;charset=UTF-8');

  setTimeout(()=> {      //10초지연
    res.send("Hello!");
  }, 10000);
});

app.get('/exam03-4', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/plain;charset=UTF-8');

  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  res.send(`${a + b}`);
});

app.get('/header', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/html;charset=UTF-8');

  res.send('<h1>비트캠프 네이버 클라우드 AIaaS 개발자 양성 과정</h1>');
});

app.get('/footer', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/html;charset=UTF-8');

  res.send('<adress>비트캠프 서초캠프@2022</adress>');
});

app.get('/exam04-3', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'text/html;charset=UTF-8');

  let arr = [
    {no:1,title:'제목1',writer:'홍길동',viewCnt:19},
    {no:2,title:'제목2',writer:'임꺽정',viewCnt:312},
    {no:3,title:'제목3',writer:'유관순',viewCnt:31},
    {no:4,title:'제목4',writer:'안중근',viewCnt:100},
    {no:5,title:'제목5',writer:'윤봉길',viewCnt:200}
  ];
  //배열객체를 JSON문자열로 변환하여 클라이언트에게 보낸다.
  // => serialization(직렬화)
  res.send(JSON.stringify(arr));  
});

//클라이언트 요청을 다른서버에게 보낸다.
app.get('/proxy', (req, res) => {     

    res.set('Access-Control-Allow-Origin', '*'); 
    res.set('Content-Type', 'text/plain;charset=UTF-8');

    request.get({
      url: req.query.url
    }, (error, response, body) => {
      res.send(body);
    });
});

app.get('/proxy2', (req, res) => {     

  res.set('Access-Control-Allow-Origin', '*'); 
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?" +
  "serviceKey=HZHE69k1CDOivQmSsXPad9IzuwF5S6KOX64jjEFHYrUU4YBJS41pLeJnqb1aFPLk7En5u9ihE6mSe7%2BNwvS%2BTw%3D%3D" +
  "&pageNo=1" +
  "&numOfRows=1000" +
  "&dataType=JSON" +
  "&base_date=" + req.query.base_date +
  "&base_time=0600" +
  "&nx=" + req.query.nx +
  "&ny=" + req.query.ny;

  request.get({
    url: openApiUrl
  }, (error, response, body) => {
    res.send(body);
  });
});

//웹서버 실행하기
app.listen(
  3000,           //포트번호지정
  () => {         //서버가 시작되었을때 호출될 함수 = 리스너 = 이벤트핸들러
     console.log(`${port}번 포트에서 서버 시작했음!`);  //${} 사용시 backtick (``)으로 묶는다!
  }
);
