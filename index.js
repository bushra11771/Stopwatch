const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stopTime = true;

function startTimer() {
    if (stopTime == true) {
        stopTime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stopTime == false) {
        stopTime = true;
    }
}

function timerCycle() {
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

        timer.innerHTML = `<span  style="color: pink">${hr}</span>` + ":" + `<span  style="color: green">${min}</span>` + ":" + `<span style="color: red">${sec}</span>`;

        setTimeout("timerCycle(), 1000");
    }
}

function resetTimer () {
    timer.innerHTML = "00:00:00";
    stopTime = true;
    hr = 0;
    sec = 0;
    min = 0;
    var item = ""
    document.getElementById("todolist").innerHTML = item
    
    
    console.log(item);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
     json.forEach(element => {
        item += `<div>Title: ${element.title}</div>`
            
        });
      })

}