//counter
let count = 0
let times = 0
function Timer() {
    if (document.getElementById('minus').disabled === false) {
    count ++
    console.log(count)
    document.querySelector('#counter').innerText = count
    }
}
setInterval(Timer, 1000)
   
//Rough addOne button
document.getElementById('plus').addEventListener('click', addOne)

function addOne() {
    count ++
    document.getElementById('counter').innerText = count
   
}

//Rough minusOne
document.getElementById('minus').addEventListener('click', minusOne)

function minusOne() {
    count -- 
    document.getElementById('counter').innerText = count
} 

//rough heart like   resets if minus button is touched
document.getElementById('heart').addEventListener('click', likeCount)

function likeCount() {
    times ++
    likeLi = document.createElement("li")
    likeLi.textContent = `${count} has been liked ${times} time(s)`
    document.querySelector('.likes').appendChild(likeLi)

}

function resetCount() {
    times = 0
}
setInterval(resetCount, 1000)



document.getElementById('pause').addEventListener('click',pauseTimer)

function pauseTimer() {

    if (document.getElementById('minus').disabled === false) {
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
        document.getElementById('comment-input').disabled = true
        document.getElementById('submit').disabled = true
    }
    else if (document.getElementById('minus').disabled = true) {
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false
        document.getElementById('comment-input').disabled = false
        document.getElementById('submit').disabled = false
    }
}