var guuix = 62,
    guuiy = 126,
    daejeonx = 68,
    daejeony = 101,
    busanx = 100,
    busany = 76,
    gwangjux = 59,
    gwangjuy = 74,
    gangwonx = 87,
    gangwony = 141,
    dokdox = 144,
    dokdoy = 123,
    jejux = 53,
    jejuy = 38;

var dae = document.querySelector("#dae");
var daeicon = document.querySelector("#daeicon");
var daejeonwind = document.querySelector("#daejeonwind");
var daejeonwindicon = document.querySelector("#daejeonwindicon");

var guii = document.querySelector("#guii");
var guiiicon = document.querySelector("#guiiicon");
var guiiwind = document.querySelector("#guiiwind");
var guiiwindicon = document.querySelector("#guiiwindicon");

var busan = document.querySelector("#busan");
var busanicon = document.querySelector("#busanicon");
var busanwind = document.querySelector("#busanwind");
var busanwindicon = document.querySelector("#busanwindicon");

var gwangju = document.querySelector("#gwangju");
var gwangjuicon = document.querySelector("#gwangjuicon");
var gwangjuwind = document.querySelector("#gwangjuwind");
var gwangjuwindicon = document.querySelector("#gwangjuwindicon");

var gangwon = document.querySelector("#gangwon");
var gangwonicon = document.querySelector("#gangwonicon");
var gangwonwind = document.querySelector("#gangwonwind");
var gangwonwindicon = document.querySelector("#gangwonwindicon");

var dokdo = document.querySelector("#dokdo");
var dokdoicon = document.querySelector("#dokdoicon");
var dokdowind = document.querySelector("#dokdowind");
var dokdowindicon = document.querySelector("#dokdowindicon");

var jeju = document.querySelector("#jeju");
var jejuicon = document.querySelector("#jejuicon");
var jejuwind = document.querySelector("#jejuwind");
var jejuwindicon = document.querySelector("#jejuwindicon");

let today = new Date();
var time = document.querySelector("#time");

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let hour = today.getHours();

let hours = `${hour}00`;

let date = `${year}${month}${day}`;
let date2 = `${year}-${month}-${day}`;

let windicon = document.querySelector("#wind");
let temp = document.querySelector("#temp");

time.innerHTML = `${date2} / ${hour-1}:00  기준`;

windicon.onclick = function() {
    guiiwind.style.display = 'block';
    guiiwindicon.style.display = 'block';
    guii.style.display = 'none';
    guiiicon.style.display = 'none';

    daejeonwind.style.display = 'block';
    daejeonwindicon.style.display = 'block';
    dae.style.display = 'none';
    daeicon.style.display = 'none';

    busanwind.style.display = 'block';
    busanwindicon.style.display = 'block';
    busan.style.display = 'none';
    busanicon.style.display = 'none';

    gwangjuwind.style.display = 'block';
    gwangjuwindicon.style.display = 'block';
    gwangju.style.display = 'none';
    gwangjuicon.style.display = 'none';

    gangwonwind.style.display = 'block';
    gangwonwindicon.style.display = 'block';
    gangwon.style.display = 'none';
    gangwonicon.style.display = 'none';
    
    dokdowind.style.display = 'block';
    dokdowindicon.style.display = 'block';
    dokdo.style.display = 'none';
    dokdoicon.style.display = 'none';

    jejuwind.style.display = 'block';
    jejuwindicon.style.display = 'block';
    jeju.style.display = 'none';
    jejuicon.style.display = 'none';
};

temp.onclick = function() {
    guiiwind.style.display = 'none';
    guiiwindicon.style.display = 'none';
    guii.style.display = 'block';
    guiiicon.style.display = 'block';

    daejeonwind.style.display = 'none';
    daejeonwindicon.style.display = 'none';
    dae.style.display = 'block';
    daeicon.style.display = 'block';

    busanwind.style.display = 'none';
    busanwindicon.style.display = 'none';
    busan.style.display = 'block';
    busanicon.style.display = 'block';
    
    gwangjuwind.style.display = 'none';
    gwangjuwindicon.style.display = 'none';
    gwangju.style.display = 'block';
    gwangjuicon.style.display = 'block';
    
    gangwonwind.style.display = 'none';
    gangwonwindicon.style.display = 'none';
    gangwon.style.display = 'block';
    gangwonicon.style.display = 'block';

    dokdowind.style.display = 'none';
    dokdowindicon.style.display = 'none';
    dokdo.style.display = 'block';
    dokdoicon.style.display = 'block';

    jejuwind.style.display = 'none';
    jejuwindicon.style.display = 'none';
    jeju.style.display = 'block';
    jejuicon.style.display = 'block';
};

(function guiii() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + guuix + "&ny=" + guuiy, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let guiisky = arr.response.body.items.item[18].fcstValue;
    let guiitmp = arr.response.body.items.item[24].fcstValue;
    let guiirain = arr.response.body.items.item[6].fcstValue;
    let guiiwinds = arr.response.body.items.item[48].fcstValue;
    let guiiwindspeed = arr.response.body.items.item[54].fcstValue;

    guii.innerHTML = guiitmp + "℃";
    guiiwind.innerHTML = guiiwindspeed + "㎳";

    if (guiirain == 0) {
        if (guiisky == 3) {
            guiiicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (guiisky == 1) {
            guiiicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (guiisky == 4) {
            guiiicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (guiirain == 1 || guiirain == 2 || guiirain == 5 || guiirain == 6) {
        guiiicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        guiiicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (guiiwinds < 30) {
        guiiwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < guiiwinds < 75) {
        guiiwindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < guiiwinds < 120) {
        guiiwindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < guiiwinds < 165) {
        guiiwindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < guiiwinds < 210) {
        guiiwindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < guiiwinds < 255) {
        guiiwindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < guiiwinds < 300) {
        guiiwindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < guiiwinds < 345) {
        guiiwindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
        guiiwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }
}());       

(function daejeonn() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + daejeonx + "&ny=" + daejeony, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let daejeonsky = arr.response.body.items.item[18].fcstValue;
    let daejeontmp = arr.response.body.items.item[24].fcstValue;
    let daejeonrain = arr.response.body.items.item[6].fcstValue;
    let daejeonwinds = arr.response.body.items.item[48].fcstValue;
    let daejeonwindspeed = arr.response.body.items.item[54].fcstValue;

    daejeonwind.innerHTML = daejeonwindspeed + "㎳";
    dae.innerHTML = daejeontmp + "℃";


    if (daejeonrain == 0) {
        if (daejeonsky == 3) {
            daeicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (daejeonsky == 1) {
            daeicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (daejeonsky == 4) {
            daeicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (daejeonrain == 1 || daejeonrain == 2 || daejeonrain == 5 || daejeonrain == 6) {
        daeicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        daeicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (daejeonwinds < 30) {
        daejeonwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < daejeonwinds < 75) {
        daejeonwindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < daejeonwinds < 120) {
        daejeonwindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < daejeonwinds < 165) {
        daejeonwindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < daejeonwinds < 210) {
        daejeonwindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < daejeonwinds < 255) {
        daejeonwindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < daejeonwinds < 300) {
        daejeonwindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < daejeonwinds < 345) {
        daejeonwindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
        daejeonwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }
}());

(function busann() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + busanx + "&ny=" + busany, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let busansky = arr.response.body.items.item[18].fcstValue;
    let busantmp = arr.response.body.items.item[24].fcstValue;
    let busanrain = arr.response.body.items.item[6].fcstValue;
    let busanwinds = arr.response.body.items.item[48].fcstValue;
    let busanwindspeed = arr.response.body.items.item[54].fcstValue;

    busan.innerHTML = busantmp + "℃";
    busanwind.innerHTML = busanwindspeed + "㎳";

    if (busanrain == 0) {
        if (busansky == 3) {
            busanicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (busansky == 1) {
            busanicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (busansky == 4) {
            busanicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (busanrain == 1 || busanrain == 2 || busanrain == 5 || busanrain == 6) {
        busanicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        busanicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (busanwinds < 30) {
        busanwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < busanwinds < 75) {
        busanwindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < busanwinds < 120) {
        busanwindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < busanwinds < 165) {
        busanwindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < busanwinds < 210) {
        busanwindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < busanwinds < 255) {
        busanwindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < busanwinds < 300) {
        busanwindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < busanwinds < 345) {
        busanwindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
        busanwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }
}());       

(function gwangjuu() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + gwangjux + "&ny=" + gwangjuy, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let gwangjusky = arr.response.body.items.item[18].fcstValue;
    let gwangjutmp = arr.response.body.items.item[24].fcstValue;
    let gwangjurain = arr.response.body.items.item[6].fcstValue;
    let gwangjuwinds = arr.response.body.items.item[48].fcstValue;
    let gwangjuwindspeed = arr.response.body.items.item[54].fcstValue;

    gwangju.innerHTML = gwangjutmp + "℃";
    gwangjuwind.innerHTML = gwangjuwindspeed + "㎳";

    if (gwangjurain == 0) {
        if (gwangjusky == 3) {
            gwangjuicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (gwangjusky == 1) {
            gwangjuicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (gwangjusky == 4) {
            gwangjuicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (gwangjurain == 1 || gwangjurain == 2 || gwangjurain == 5 || gwangjurain == 6) {
        gwangjuicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        gwangjuicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (gwangjuwinds < 30) {
        gwangjuwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < gwangjuwinds < 75) {
        gwangjuwindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < gwangjuwinds < 120) {
        gwangjuwindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < gwangjuwinds < 165) {
        gwangjuwindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < gwangjuwinds < 210) {
        gwangjuwindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < gwangjuwinds < 255) {
        gwangjuwindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < gwangjuwinds < 300) {
        gwangjuwindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < gwangjuwinds < 345) {
        gwangjuwindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
       gwangjunwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }
}());       

(function gangwonu() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + gangwonx + "&ny=" + gangwony, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let gangwonsky = arr.response.body.items.item[18].fcstValue;
    let gangwontmp = arr.response.body.items.item[24].fcstValue;
    let gangwonrain = arr.response.body.items.item[6].fcstValue;
    let gangwonwinds = arr.response.body.items.item[48].fcstValue;
    let gangwonwindspeed = arr.response.body.items.item[54].fcstValue;

    gangwon.innerHTML = gangwontmp + "℃";
    gangwonwind.innerHTML = gangwonwindspeed + "㎳";

    if (gangwonrain == 0) {
        if (gangwonsky == 3) {
            gangwonicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (gangwonsky == 1) {
            gangwonicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (gangwonsky == 4) {
            gangwonicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (gangwonrain == 1 || gangwonrain == 2 || gangwonrain == 5 || gangwonrain == 6) {
        gangwonicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        gangwonicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (gangwonwinds < 30) {
        gangwonwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < gangwonwinds < 75) {
        gangwonwindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < gangwonwinds < 120) {
        gangwonwindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < gangwonwinds < 165) {
        gangwonwindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < gangwonwinds < 210) {
        gangwonwindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < gangwonwinds < 255) {
        gangwonwindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < gangwonwinds < 300) {
        gangwonwindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < gangwonwinds < 345) {
        gangwonwindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
       gangwonnwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }
}());       

(function dokdou() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + dokdox + "&ny=" + dokdoy, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let dokdosky = arr.response.body.items.item[18].fcstValue;
    let dokdotmp = arr.response.body.items.item[24].fcstValue;
    let dokdorain = arr.response.body.items.item[6].fcstValue;
    let dokdowinds = arr.response.body.items.item[48].fcstValue;
    let dokdowindspeed = arr.response.body.items.item[54].fcstValue;

    dokdo.innerHTML = dokdotmp + "℃";
    dokdowind.innerHTML = dokdowindspeed + "㎳";

    if (dokdorain == 0) {
        if (dokdosky == 3) {
            dokdoicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (dokdosky == 1) {
            dokdoicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (dokdosky == 4) {
            dokdoicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (dokdorain == 1 || dokdorain == 2 || dokdorain == 5 || dokdorain == 6) {
        dokdoicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        dokdoicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (dokdowinds < 30) {
        dokdowindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < dokdowinds < 75) {
        dokdowindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < dokdowinds < 120) {
        dokdowindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < dokdowinds < 165) {
        dokdowindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < dokdowinds < 210) {
        dokdowindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < dokdowinds < 255) {
        dokdowindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < dokdowinds < 300) {
        dokdowindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < dokdowinds < 345) {
        dokdowindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
       dokdonwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }

    
}());       

(function jejuu() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + jejux + "&ny=" + jejuy, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let jejusky = arr.response.body.items.item[18].fcstValue;
    let jejutmp = arr.response.body.items.item[24].fcstValue;
    let jejurain = arr.response.body.items.item[6].fcstValue;
    let jejuwinds = arr.response.body.items.item[48].fcstValue;
    let jejuwindspeed = arr.response.body.items.item[54].fcstValue;

    jeju.innerHTML = jejutmp + "℃";
    jejuwind.innerHTML = jejuwindspeed + "㎳";

    if (jejurain == 0) {
        if (jejusky == 3) {
            jejuicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (jejusky == 1) {
            jejuicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (jejusky == 4) {
            jejuicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        }
    } else if (jejurain == 1 || jejurain == 2 || jejurain == 5 || jejurain == 6) {
        jejuicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        jejuicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    }

    if (jejuwinds < 30) {
        jejuwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (30 < jejuwinds < 75) {
        jejuwindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (75 < jejuwinds < 120) {
        jejuwindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (120 < jejuwinds < 165) {
        jejuwindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (165 < jejuwinds < 210) {
        jejuwindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (210 < jejuwinds < 255) {
        jejuwindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (255 < jejuwinds < 300) {
        jejuwindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (300 < jejuwinds < 345) {
        jejuwindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
       jejunwindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    }
}());       