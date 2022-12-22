let date = document.querySelector('.date'),
    cnt_hospitalizations = document.querySelector('.cnt_hospitalizations'),
    cnt_severe_symptoms= document.querySelector('.cnt_severe_symptoms'),
    cnt_deaths = document.querySelector('.cnt_deaths'),
    cnt_confirmations = document.querySelector('.cnt_confirmations'),
    rate_hospitalizations = document.querySelector('.rate_hospitalizations'),
    rate_severe_symptoms = document.querySelector('.rate_severe_symptoms'),
    rate_deaths = document.querySelector('.rate_deaths');

(function () {
    var xhr = new XMLHttpRequest();
    xhr.open(
        "GET", 
        "http://localhost:3000/proxy?",
        false);
    xhr.send();

    co = JSON.parse(xhr.responseText);
    console.log(co.response.result[0]);
    
    let covid=co.response.result[0];
    console.log(covid);
    
    //숫자 1000단위당 ,찍음  (/\B(?=(\d{3})+(?!\d))/g, ',')
    
    let  mmddhh = covid.mmddhh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.date').innerHTML = `${mmddhh} 기준`;

    let  cnt_hospitalizations = covid.cnt_hospitalizations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.cnt_hospitalizations').innerHTML = `${cnt_hospitalizations}`;

    let  cnt_severe_symptoms = covid.cnt_severe_symptoms.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.cnt_severe_symptoms').innerHTML = `${cnt_severe_symptoms}`;

    let  cnt_deaths = covid.cnt_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.cnt_deaths').innerHTML = `${cnt_deaths}`;

    let  cnt_confirmations = covid.cnt_confirmations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.cnt_confirmations').innerHTML = `${cnt_confirmations}`;
    
    let  rate_hospitalizations = covid.rate_hospitalizations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.rate_hospitalizations').innerHTML = `${rate_hospitalizations}`;
 
    let  rate_severe_symptoms = covid.rate_severe_symptoms.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.rate_severe_symptoms').innerHTML = `${rate_severe_symptoms}`;

    let  rate_deaths = covid.rate_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('.rate_deaths').innerHTML = `${rate_deaths}`;

    

    
})();     
    

  

    
    // console.log("데이터 조회 기준 일:" + mmddhh);
    
    // console.log("일일 신규입원:" + cnt_hospitalizations);
    // console.log("일일 재원 위중증:" + cnt_severe_symptoms);
    // console.log("일일 사망:" + cnt_deaths);
    // console.log("일일 확진:" + cnt_confirmations);  
    // console.log("인구 10만명당 신규 입원:" + rate_hospitalizations);
    // console.log("인구 10만명당 재원 위중증:" + rate_severe_symptoms);
    // console.log("인구 10만명당 사망:" + rate_deaths);
       
// function getToday() {
//   const date = new Date();
//   const hour = date.getHours();
//   let getDay = date.getDate();
//   if(hour < 10) {
//     getDay = getDay -1;
//   }
//   const year = date.getFullYear();
//   const month = ("0"+(1+date.getMonth())).slice(-2);
//   const day = ("0" + getDay).slice(-2);
//   console.log(hour)
//   console.log(getDay);
//   return `${year}-${month}-${day}`;
// }