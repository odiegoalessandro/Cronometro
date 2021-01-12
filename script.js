var mileseconds = 0
var seconds = 0
var minutes = 0
var hours = 0
var pomodoro = undefined

var btnPause = document.querySelector('.pause')
var btnReset = document.querySelector('.reset')
var btnPlay = document.querySelector('.play')

btnPlay.addEventListener('click', () => play())
btnPause.addEventListener('click', () => pause())
btnReset.addEventListener('click', () => reset())

function play(){
    pause()
    pomodoro = setInterval(function(){ timer() }, 10)
}
function pause(){
    clearInterval(pomodoro)
}
function reset(){
    pause()
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}
function timer(){
    if((mileseconds += 10) == 1000){
        mileseconds = 0
        seconds++
    }
    if(seconds == 60){
        seconds = 0
        minutes++
    }
    if(minutes == 60){
        minutes = 0
        hours++
    }

    document.getElementById('hour').innerText = returnData(hours)
    document.getElementById('minute').innerText = returnData(minutes)
    document.getElementById('second').innerText = returnData(seconds)
}

function returnData(input) {
    if(input < 10){
        return `0${input}`
    }
    else{
        return input
    }
}