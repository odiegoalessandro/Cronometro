var seconds = 0
var minutes = 0
var hours = 0
var cron = undefined

var short = document.querySelector('.short')
var medium = document.querySelector('.medium')
var long = document.querySelector('.long')
var btnPause = document.querySelector('.btnPause')
var btnPlay = document.querySelector('.btnPlay')
var sound = document.querySelector('.sound')


short.addEventListener('click', () => setTime(300))
medium.addEventListener('click', () => setTime(1500))
long.addEventListener('click', () => setTime(3000))
btnPause.addEventListener('click', () => {
    pause()
    btnPause.style.display = 'none'
    btnPlay.style.display = 'flex'
})
btnPlay.addEventListener('click', () => {
    play()
    btnPlay.style.display = 'none'
    btnPause.style.display = 'flex'
})

function play(){
    pause()
    cron = setInterval(() => timer() , 1000);
}
function pause(){
    clearInterval(cron)
}
function reset(){
    pause()
    var seconds = 0
    var minutes = 0
    var hours = 0

    document.getElementById('hour').innerText = returnData(hours)
    document.getElementById('minute').innerText = returnData(minutes)
    document.getElementById('second').innerText = returnData(seconds)
}
function setTime(s){
    seconds = s % 60
    minutes = Math.floor(s / 60)
    hours = Math.floor(minutes / 60)

    document.getElementById('hour').innerText = returnData(hours)
    document.getElementById('minute').innerText = returnData(minutes)
    document.getElementById('second').innerText = returnData(seconds)
}
function timer(){
    if(seconds == 0 && minutes == 0 && hours == 0){
        btnPause.style.display = 'none'
        btnPlay.style.display = 'flex'
        reset()
        sound.play()
    }
    else{
        if(seconds <= 0){
            minutes--
            seconds += 60
            
        }
        if(minutes <= 0){
            hours--
    
            minutes += 60
        }
        seconds--
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