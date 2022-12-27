var seconds = 00;
var tens = 00;
var outputSeconds = document.getElementById('second');
var outputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;
    tens = "00";
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;

buttonStart.addEventListener('click', ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', ()=>{
    clearInterval(Interval);
});

buttonReset.addEventListener('click', ()=>{
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        outputTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }
}


/*------------------------Timer ----------*/

var t = 0;
function myFunction() {
    var x = document.getElementById("frm1");
    hr = x.elements[0].value;
    min = x.elements[1].value

    window.t = hr*3600 + min*60;
    window.per = window.t;
    timer();
}
function timer(){
    var temp = window.t;
    window.t = window.t-1;
    var h = Math.floor(temp/3600);
    var m = Math.floor((temp%3600)/60);
    var s = Math.floor((temp - h*3600 - m*60));
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("demo").innerHTML = h + " : " + m + " : " + s + "";
    document.getElementById("progress-bar").style.width = (temp*100)/(window.per) + "%";

    var t = setTimeout(timer,1000);
    if (temp < 0) {
        clearInterval(t);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}
function checkTime(i){
    if (i<10) { i = "0" + i }
    return i;
}