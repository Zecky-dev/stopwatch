/* Javascript Doc */


// Javascript values

let second,minute,hour;
second = 0;
minute = 0;
hour = 0;

// HTML ELEMENTS
var secondDiv,minuteDiv,hourDiv,startButton,resetButton,stopButton;
startButton = document.getElementById('start');
resetButton = document.getElementById('reset');
stopButton = document.getElementById('stop');
var clickCounter = 0;
startButton.onclick = function(){
    if(clickCounter<1){
    clickCounter++;
        myInterval = setInterval(function(){
        second+=1;
        secondDiv = document.querySelector('#second');
        minuteDiv = document.querySelector('#minute');
        hourDiv = document.querySelector('#hour');
        if(second<10){
        secondDiv.innerHTML = "0" + second;
        }
        else{
            secondDiv.innerHTML = second;
        }
        if(second==60){
            second = 0;
            secondDiv.innerHTML = "0" + second;
            minute+=1;
            if(minute<10){
                minuteDiv.innerHTML = "0" + minute;
            }
            else{
                minuteDiv.innerHTML = minute;
            }
        }
        if(minute==60){
            minute = 0;
            minuteDiv.innerHTML = "0" + minute;
            hour+=1;
            if(hour<10){
                hourDiv.innerHTML = "0" + hour;
            }
            else{
                hourDiv.innerHTML = hour;
            }
        }
    },1000)};
}
resetButton.onclick = function(){
    clickCounter = 0;
    clearInterval(myInterval);
    second = 0;
    minute = 0;
    hour = 0;
    secondDiv.innerHTML = "0" + second;
    minuteDiv.innerHTML = "0" + minute;
    hourDiv.innerHTML = "0" + hour;
}
stopButton.onclick = function(){
    clickCounter = 0;
    clearInterval(myInterval);
}