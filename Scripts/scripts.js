

var membars=1;
var d = setInterval(function () {
    var membarss=25;
    membars++;
    document.getElementById("value").innerHTML=membars;
    if(membars>membarss){
        clearInterval(d);
    }
},50)



var majals=1;
var y = setInterval(function () {
    var maljend=20;
    majals++;
    document.getElementById("majls").innerHTML=majals;
    if (majals>maljend){
        clearInterval(y);
    }
},50)

var consert=1;
var z = setInterval(function () {
    var consertend=30;
    consert++;
    document.getElementById("consert").innerHTML=consert;
    if (consert>consertend-1){
        clearInterval(z);
    }
},50)


/**guitar

function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh > 12){
        session = "PM";

    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + "" + session;
    document.getElementById("demo").innerHTML = time; 
}

currentTime();
setInterval(currentTime , 1000);**/

var countDate = new Date("2022-9-21 23:59:59").getTime();
            
var x = setInterval(function(){
    var now = new Date().getTime();
    
    var distans = countDate - now;

    var days = Math.floor(distans / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distans % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    var minutes = Math.floor((distans % (1000 * 60 * 60 )) /(1000 * 60 ));
    var seconds = Math.floor((distans % (1000 * 60 )) /(1000));



    document.getElementById("demo").innerHTML= days + ":" + hours + ":" + minutes + ":" + seconds + "";
     
    if(distans < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "تمام";
    }
},1000)