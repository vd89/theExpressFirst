window.onload = function () {
    
    var min = 00, sec = 00, ten = 00;
    var appendMin = document.getElementById('min')
    var appednSecond = document.getElementById('second')
    var appendTens = document.getElementById('tens')
    var btnStart = document.getElementById('start')
    var btnStop = document.getElementById('stop')
    var btnReset = document.getElementById('reset')
    var btnLap = this.document.getElementById('lap')
    var Interval;

    btnStart.onclick = function () {
        clearInterval(Interval)
        Interval = setInterval(startTimer,10)
        // console.log(Interval);
    }
    btnStop.onclick = function () {
        clearInterval(Interval)
      
    }
    btnReset.onclick = function () {
        clearInterval(Interval)
        ten = "00"
        sec = "00"
        min = "00"
        appednSecond.innerHTML = sec
        appendTens.innerHTML = ten
        appendMin.innerHTML = min
    }
    btnLap.onclick =function () {
        
    }
    

    function startTimer() {
        ten++;
        if (ten<9) {
            appendTens.innerHTML = '0'+ten
        }
        if (ten>9) {
            appendTens.innerHTML = ten
        }
        if (ten>99) {
            sec++
            appednSecond.innerHTML = "0" + sec
            ten = 0
            appendTens.innerHTML = "0" +0
        }
        if (sec>9) {
            appednSecond.innerHTML = sec
        }
        if (sec>60) {
            min++
            appendMin.innerHTML = "0" + min
            sec = 0
            ten = 0
            appendTens.innerHTML = "0" + 0
            appednSecond.innerHTML = "0"+0
        }

    }
     

}