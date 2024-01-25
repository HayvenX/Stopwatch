const container = document.getElementById("container")
const display = document.getElementById("display")
const start = document.getElementById("start")
let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false

container.style.height = "180px"

function Start()
{
    if(!isRunning)
    {
        startTime = Date.now() - elapsedTime
        timer = setInterval(Update, 10)
        isRunning = true

        start.innerText = "Start"
    }
}

function Stop()
{
    if(isRunning)
    {
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRunning = false

        start.innerText = "Continue"
        start.style.fontSize = "20px"
        start.style.height = "48px"
        start.style.bottom = "2px"
        container.style.height = "180px"
    }
}

function Reset()
{
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    isRunning = false
    display.innerText = "00 : 00 : 00 : 00"

    start.innerText = "Start"
}

function Update()
{
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 10)

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    display.innerText = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`
}