

function sortearValor() {
    let valor = Math.floor(Math.random() * 3) + 1;
    return parseInt(valor);
}

let qtd = 3

let sistema = document.createElement("div");
let div = document.querySelector("#div")



function getAttended() {
    let el1 = document.querySelector("#el1");
    let s1 = document.querySelector("#s1");

    function addHidden() {
        s1.classList.remove("fade-in")
        s1.classList.add("fade-out")
    }

    el1.classList.add("fade-out")
    s1.classList.remove("hidden")
    s1.classList.add("fade-in")
    setTimeout(addHidden, 10000)
};
function getAttended2() {
    let el2 = document.querySelector("#el2");
    let s2 = document.querySelector("#s2");
    function addHidden() {
        s2.classList.remove("fade-in")
        s2.classList.add("fade-out")
    }

    el2.classList.add("fade-out")
    s2.classList.remove("hidden")
    s2.classList.add("fade-in")
    setTimeout(addHidden, 4000)
};
function getAttended24() {
    let el2 = document.querySelector("#el2");
    let s1 = document.querySelector("#s1");
    function addHidden() {
        s2.classList.remove("fade-in")
        s2.classList.add("fade-out")
    }

    el2.classList.add("fade-out")
    s1.classList.remove("hidden")
    s1.classList.add("fade-in")
    setTimeout(addHidden, 10000)
};
function getAttended3() {
    let el3 = document.querySelector("#el3");
    let s3 = document.querySelector("#s3");
    function addHidden() {
        s3.classList.remove("fade-in")
        s3.classList.add("fade-out")
    }

    el3.classList.add("fade-out")
    s3.classList.remove("hidden")
    s3.classList.add("fade-in")
    setTimeout(addHidden, 14000)
};

function getAttended4() {
    let el4 = document.querySelector("#el4");
    let s4 = document.querySelector("#s4");
    function addHidden() {
        s4.classList.remove("fade-in")
        s4.classList.add("fade-out")
    }

    el4.classList.add("fade-out")
    s4.classList.remove("hidden")
    s4.classList.add("fade-in")
    setTimeout(addHidden, 10000)
};

function arrive1Customer() {
    let fila = document.querySelector(".fila")
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('element');
    customerDiv.id = "el1"
    fila.appendChild(customerDiv);
    setTimeout(call1Server, 1000)

}


function arrive2Customer() {
    let fila = document.querySelector(".fila")
    const el1 = document.querySelector("#el1")
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('element');
    customerDiv.id = "el2"
    fila.insertBefore(customerDiv, el1)
    call2Server()
    setTimeout(getAttended2, 9000)

}
function arrive24Customer() {
    let fila = document.querySelector(".fila")
    const el1 = document.querySelector("#el1")
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('element');
    customerDiv.id = "el2"
    fila.insertBefore(customerDiv, el1)
    call2Server()
    setTimeout(getAttended2, 9000)

}
function arrive3Customer() {
    let fila = document.querySelector(".fila")
    const el2 = document.querySelector("#el2")
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('element');
    customerDiv.id = "el3"
    fila.insertBefore(customerDiv, el2)
    setTimeout(call3Server, 4000)
    setTimeout(getAttended3, 14000)

}

function arrive4Customer() {
    let fila = document.querySelector(".fila")
    const el3 = document.querySelector("#el3")
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('element');
    customerDiv.id = "el4"
    fila.insertBefore(customerDiv, el3)
    setTimeout(call4Server, 4000)
    setTimeout(getAttended4, 9000)

}


function call4Server() {
    const sistema = document.querySelectorAll(".sistema")
    let sistema1 = sistema[0];
    const elDiv = document.createElement('div')
    elDiv.classList.add("element")
    elDiv.classList.add("hidden")
    elDiv.id = 's4'
    const servico = document.querySelectorAll(".servico")
    let servico1 = servico[0]
    sistema1.insertBefore(elDiv, servico1)
}

function call3Server() {
    const sistema = document.querySelectorAll(".sistema")
    let sistema2 = sistema[1]
    const serverDiv = document.createElement('div');
    const elDiv = document.createElement('div')
    elDiv.classList.add("hidden")
    elDiv.classList.add("element")
    serverDiv.classList.add('servico');
    elDiv.id = 's3'
    sistema2.appendChild(elDiv)
    sistema2.appendChild(serverDiv);
    setTimeout(getAttended3, 2000)
}


function call2Server() {
    let sistema = document.querySelector(".sistema")
    const elDiv = document.createElement('div')
    elDiv.classList.add("element")
    elDiv.classList.add("hidden")
    elDiv.id = 's2'
    const servico = document.querySelector(".servico")
    sistema.insertBefore(elDiv, servico)
}

function call1Server() {

    let sistema = document.querySelector(".sistema")
    const serverDiv = document.createElement('div');
    const elDiv = document.createElement('div')
    elDiv.classList.add("hidden")
    elDiv.classList.add("element")
    serverDiv.classList.add('servico');
    elDiv.id = 's1'
    sistema.appendChild(elDiv)
    sistema.appendChild(serverDiv);
    setTimeout(getAttended, 1000)
}



switch (qtd) {
    case 1:

        setTimeout(arrive1Customer, 10000)

        break
    case 2:
        setTimeout(arrive1Customer, 4000)
        setTimeout(arrive2Customer, 8000)
        break
    case 3:
        setTimeout(arrive1Customer, 4000)
        setTimeout(arrive2Customer, 8000)
        setTimeout(arrive3Customer, 12000)
        setTimeout(arrive4Customer, 14000)


        break

}


let timer;
let isRunning = false;
let startTime;
let timeLeft = 60000;

document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById('timer');
    const resetButton = document.getElementById('resetButton');

    function showResults(qtd) {
        let container = document.querySelector(".container")
        let containerResults1 = document.querySelector("#result1")
        let containerResults2 = document.querySelector("#result2")
        let containerResults3 = document.querySelector("#result3")
        container.classList.add("hidden")
        if (qtd == 1) {
            containerResults1.classList.remove("hidden")
        }
        if (qtd == 2) {
            containerResults2.classList.remove("hidden")
        }
        if (qtd == 3) {
            containerResults3.classList.remove("hidden")
        }


    }
    function formatTime(ms) {
        let totalSeconds = Math.floor(ms / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateTimer() {
        const currentTime = Date.now();
        const timeDiff = startTime - currentTime + timeLeft;

        if (timeDiff <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = '00:00';
            isRunning = false;
            showResults(qtd);
        } else {
            timerDisplay.textContent = formatTime(timeDiff);
        }
    }

    function startTimer() {
        if (!isRunning) {
            startTime = Date.now();
            timer = setInterval(updateTimer, 1000);
            isRunning = true;
        }
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        timeLeft = 60000;
        timerDisplay.textContent = '01:00';
    }


    if (qtd) {

        setTimeout(startTimer, 1000);
    }

    resetButton.addEventListener('click', resetTimer);
});
