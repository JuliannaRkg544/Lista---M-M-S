
let qtd;
qtd = parseInt(prompt("Quantas pessoas tem na fila?"));

let sistema = document.createElement("div");
let div = document.querySelector("#div")



function getAttended() {
    let el1 = document.querySelector("#el1");
    let el2 = document.querySelector("#el2");
    let s1 = document.querySelector("#s1");
    let s2 = document.querySelector("#s2");
    alert("na func")

    el1.classList.add("fade-out")
    s1.classList.remove("hidden")
    s1.classList.add("fade-in")
};

switch (qtd) {
    case 1:
        sistema.innerHTML = `
        <div class="sistema">
            <div id="s1" class="element hidden"> </div>
            <div class="servico"></div>
        </div>
        <div class="fila">
            <div id="el1" class="element" > </div>
            <div class="slash"></div>
            <div class="slash"></div>
            <div class="slash"></div>
            <div class="slash"></div>
            <div class="slash"></div>
            <div class="slash"></div>
        </div>
     `

        document.body.insertBefore(sistema, div)


        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let s1 = document.querySelector("#s1");


            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.classList.add("fade-out")

            }, 10000)


        }), 1000)

        break
    case 2:
        sistema.innerHTML = `
            <div class="sistema">
            <div id="s1" class="element hidden"> </div>
            <div id="s2" class="element hidden"> </div>
            <div class="servico"></div>
            </div>
            <div class="fila">
            <div id="el2" class="element"> </div>
                <div id="el1" class="element"> </div>
                <div class="slash"></div>
                <div class="slash"></div>
                <div class="slash"></div>
                <div class="slash"></div>
                <div class="slash"></div>
            </div>
         `
        document.body.insertBefore(sistema, div);
        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");


            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")
                }, 10000)
            }, 10000)


        }), 1000)
        break
    case 3:
        sistema.innerHTML = `
            <div class="sistema">
            <div id="s1" class="element hidden"> </div>
            <div id="s2" class="element hidden"> </div>
            
                <div class="servico"></div>
            </div>
            <div class="sistema">
            <div id="s3" class="element hidden"> </div>
            <div class="servico"></div>
        </div>
            <div class="fila">
            <div  id="el3" class="element"> </div>
            <div  id="el2" class="element"> </div>
            <div  id="el1" class="element"> </div>
                <div class="slash"></div>
                <div class="slash"></div>
                <div class="slash"></div>
                <div class="slash"></div>
                <div class="slash"></div>
            </div>
         `
        document.body.insertBefore(sistema, div)
        setTimeout((() => {
            let el3 = document.querySelector("#el3");
            let s3 = document.querySelector("#s3")


            el3.classList.add("fade-out")
            s3.classList.remove("hidden")
            s3.classList.add("fade-in")
            setTimeout(() => {
                s3.classList.remove("fade-in")
                s3.classList.add("fade-out")

            }, 10000)

        }), 1000)
        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");

            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")

                }, 10000)
            }, 10000)


        }), 1000)

        break
    case 4:
        sistema.innerHTML = `
                <div class="sistema">
                <div id="s1" class="element hidden"> </div>
                <div id="s2" class="element hidden"> </div>
                
                    <div class="servico"></div>
                </div>
                <div class="sistema">
                <div id="s3" class="element hidden"> </div>
                <div id="s4" class="element hidden"> </div>
                <div class="servico"></div>
            </div>
                <div class="fila">
                    <div  id="el4" class="element"></div>
                    <div  id="el2" class="element"> </div>
                    <div  id="el3" class="element"> </div>
                    <div  id="el1" class="element"> </div>
                    <div class="slash"></div>
                    <div class="slash"></div>
                    <div class="slash"></div>
                    <div class="slash"></div>
                </div>
             `
        document.body.insertBefore(sistema, div)

        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");

            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")

                }, 10000)
            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el3 = document.querySelector("#el3");
            let s3 = document.querySelector("#s3")

            let el4 = document.querySelector("#el4")
            let s4 = document.querySelector("#s4")


            el3.classList.add("fade-out")
            s3.classList.remove("hidden")
            s3.classList.add("fade-in")
            setTimeout(() => {
                s3.classList.remove("fade-in")
                s3.classList.add("fade-out")
                s3.remove()
                el4.classList.add("fade-out")
                s4.classList.remove("hidden")
                s4.classList.add("fade-in")
                setTimeout(() => {
                    s4.classList.remove("fade-in")
                    s4.classList.add("fade-out")

                }, 10000)


            }, 10000)

        }), 1000)
        break
    case 5:
        sistema.innerHTML = `
                <div class="sistema">
                <div id="s1" class="element hidden"> </div>
                <div id="s2" class="element hidden"> </div>
               
                    <div class="servico"></div>
                </div>
                <div class="sistema">
                <div id="s3" class="element hidden"> </div>
                <div id="s4" class="element hidden"> </div>
             
                <div class="servico"></div>
            </div>
                <div class="sistema">
                <div id="s5" class="element hidden"> </div>
                <div class="servico"></div>
            </div>
                <div class="fila">
                    <div  id="el4" class="element"></div>
                    <div  id="el2" class="element"> </div>
                    <div  id="el5" class="element"></div>
                    <div  id="el3" class="element"> </div>
                    <div  id="el1" class="element"> </div>
                    <div class="slash"></div>
                    <div class="slash"></div>
                    <div class="slash"></div>
                </div>
             `
        document.body.insertBefore(sistema, div)
        setTimeout((() => {
            let el5 = document.querySelector("#el5");
            let s5 = document.querySelector("#s5");


            el5.classList.add("fade-out")
            s5.classList.remove("hidden")
            s5.classList.add("fade-in")
            setTimeout(() => {
                s5.classList.remove("fade-in")
                s5.classList.add("fade-out")

            }, 10000)


        }), 1000)

        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");

            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")

                }, 10000)
            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el3 = document.querySelector("#el3");
            let s3 = document.querySelector("#s3")

            let el4 = document.querySelector("#el4")
            let s4 = document.querySelector("#s4")


            el3.classList.add("fade-out")
            s3.classList.remove("hidden")
            s3.classList.add("fade-in")
            setTimeout(() => {
                s3.classList.remove("fade-in")
                s3.classList.add("fade-out")
                s3.remove()
                el4.classList.add("fade-out")
                s4.classList.remove("hidden")
                s4.classList.add("fade-in")
                setTimeout(() => {
                    s4.classList.remove("fade-in")
                    s4.classList.add("fade-out")

                }, 10000)


            }, 10000)

        }), 1000)
        break
    case 6:
        sistema.innerHTML = `
        <div class="sistema">
        <div id="s1" class="element hidden"> </div>
        <div id="s2" class="element hidden"> </div>
       
            <div class="servico"></div>
        </div>
        <div class="sistema">
        <div id="s3" class="element hidden"> </div>
        <div id="s4" class="element hidden"> </div>
     
        <div class="servico"></div>
    </div>
        <div class="sistema">
        <div id="s5" class="element hidden"> </div>
        <div id="s6" class="element hidden"> </div>
        <div class="servico"></div>
    </div>
                    <div class="fila">
                    <div  id="el6" class="element"></div>
                    <div  id="el4" class="element"></div>
                    <div  id="el2" class="element"> </div>
                    <div  id="el5" class="element"></div>
                    <div  id="el3" class="element"> </div>
                    <div  id="el1" class="element"> </div>
                        <div class="slash"></div>
                        <div class="slash"></div>
                    </div>
                 `
        document.body.insertBefore(sistema, div)
        setTimeout((() => {
            let el5 = document.querySelector("#el5");
            let s5 = document.querySelector("#s5");
            let el6 = document.querySelector("#el6");
            let s6 = document.querySelector("#s6");


            el5.classList.add("fade-out")
            s5.classList.remove("hidden")
            s5.classList.add("fade-in")
            setTimeout(() => {
                s5.classList.remove("fade-in")
                s5.remove()
                el6.classList.add("fade-out")
                s6.classList.remove("hidden")
                s6.classList.add("fade-in")
                setTimeout(() => {
                    s6.classList.remove("fade-in")
                    s6.classList.add("fade-out")

                }, 10000)

            }, 10000)


        }), 1000)

        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");

            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")

                }, 10000)
            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el3 = document.querySelector("#el3");
            let s3 = document.querySelector("#s3")

            let el4 = document.querySelector("#el4")
            let s4 = document.querySelector("#s4")


            el3.classList.add("fade-out")
            s3.classList.remove("hidden")
            s3.classList.add("fade-in")
            setTimeout(() => {
                s3.classList.remove("fade-in")
                s3.classList.add("fade-out")
                s3.remove()
                el4.classList.add("fade-out")
                s4.classList.remove("hidden")
                s4.classList.add("fade-in")
                setTimeout(() => {
                    s4.classList.remove("fade-in")
                    s4.classList.add("fade-out")

                }, 10000)


            }, 10000)

        }), 1000)
        break
    case 7:
        sistema.innerHTML = `
        <div class="sistema">
        <div id="s1" class="element hidden"> </div>
        <div id="s2" class="element hidden"> </div>
       
            <div class="servico"></div>
        </div>
        <div class="sistema">
        <div id="s3" class="element hidden"> </div>
        <div id="s4" class="element hidden"> </div>
     
        <div class="servico"></div>
    </div>
        <div class="sistema">
        <div id="s5" class="element hidden"> </div>
        <div id="s6" class="element hidden"> </div>
        <div class="servico"></div>
    </div>
    <div class="sistema">
    <div id="s7" class="element hidden"> </div>
    <div class="servico"></div>
</div>
                    <div class="fila">
                    <div  id="el6" class="element"></div>
                    <div  id="el4" class="element"></div>
                    <div  id="el2" class="element"> </div>
                    <div  id="el7" class="element"></div>
                    <div  id="el5" class="element"></div>
                    <div  id="el3" class="element"> </div>
                    <div  id="el1" class="element"> </div>
                    
                        <div class="slash"></div>
                    </div>
                     `
        document.body.insertBefore(sistema, div)
        setTimeout((() => {
            let el7 = document.querySelector("#el7");
            let s7 = document.querySelector("#s7");


            el7.classList.add("fade-out")
            s7.classList.remove("hidden")
            s7.classList.add("fade-in")
            setTimeout(() => {
                s7.classList.remove("fade-in")
                s7.classList.add("fade-out")

            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el5 = document.querySelector("#el5");
            let s5 = document.querySelector("#s5");
            let el6 = document.querySelector("#el6");
            let s6 = document.querySelector("#s6");


            el5.classList.add("fade-out")
            s5.classList.remove("hidden")
            s5.classList.add("fade-in")
            setTimeout(() => {
                s5.classList.remove("fade-in")
                s5.remove()
                el6.classList.add("fade-out")
                s6.classList.remove("hidden")
                s6.classList.add("fade-in")
                setTimeout(() => {
                    s6.classList.remove("fade-in")
                    s6.classList.add("fade-out")

                }, 10000)

            }, 10000)


        }), 1000)

        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");

            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")

                }, 10000)
            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el3 = document.querySelector("#el3");
            let s3 = document.querySelector("#s3")

            let el4 = document.querySelector("#el4")
            let s4 = document.querySelector("#s4")


            el3.classList.add("fade-out")
            s3.classList.remove("hidden")
            s3.classList.add("fade-in")
            setTimeout(() => {
                s3.classList.remove("fade-in")
                s3.classList.add("fade-out")
                s3.remove()
                el4.classList.add("fade-out")
                s4.classList.remove("hidden")
                s4.classList.add("fade-in")
                setTimeout(() => {
                    s4.classList.remove("fade-in")
                    s4.classList.add("fade-out")

                }, 10000)


            }, 10000)

        }), 1000)

        break

    case 8:
        sistema.innerHTML = `
        <div class="sistema">
        <div id="s1" class="element hidden"> </div>
        <div id="s2" class="element hidden"> </div>
       
            <div class="servico"></div>
        </div>
        <div class="sistema">
        <div id="s3" class="element hidden"> </div>
        <div id="s4" class="element hidden"> </div>
     
        <div class="servico"></div>
    </div>
        <div class="sistema">
        <div id="s5" class="element hidden"> </div>
        <div id="s6" class="element hidden"> </div>
        <div class="servico"></div>
    </div>
    <div class="sistema">
    <div id="s7" class="element hidden"> </div>
    <div id="s8" class="element hidden"> </div>
    <div class="servico"></div>
</div>
                    <div class="fila">
                     <div  id="el7" class="element"></div>
                     <div  id="el8" class="element"></div>
                    <div  id="el6" class="element"></div>
                    <div  id="el4" class="element"></div>
                    <div  id="el2" class="element"> </div>
                    <div  id="el5" class="element"></div>
                    <div  id="el3" class="element"> </div>
                    <div  id="el1" class="element"> </div>
                    </div>
                         `
        document.body.insertBefore(sistema, div)
        setTimeout((() => {
            let el7 = document.querySelector("#el7");
            let s7 = document.querySelector("#s7");
            let el8 = document.querySelector("#el8");
            let s8 = document.querySelector("#s8");


            el7.classList.add("fade-out")
            s7.classList.remove("hidden")
            s7.classList.add("fade-in")
            setTimeout(() => {
                s7.classList.remove("fade-in")
                s7.remove()
                el8.classList.add("fade-out")
                s8.classList.remove("hidden")
                s8.classList.add("fade-in")
                setTimeout(() => {
                    s8.classList.remove("fade-in")
                    s8.classList.add("fade-out")

                }, 10000)

            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el5 = document.querySelector("#el5");
            let s5 = document.querySelector("#s5");
            let el6 = document.querySelector("#el6");
            let s6 = document.querySelector("#s6");


            el5.classList.add("fade-out")
            s5.classList.remove("hidden")
            s5.classList.add("fade-in")
            setTimeout(() => {
                s5.classList.remove("fade-in")
                s5.remove()
                el6.classList.add("fade-out")
                s6.classList.remove("hidden")
                s6.classList.add("fade-in")
                setTimeout(() => {
                    s6.classList.remove("fade-in")
                    s6.classList.add("fade-out")

                }, 10000)

            }, 10000)


        }), 1000)

        setTimeout((() => {
            let el1 = document.querySelector("#el1");
            let el2 = document.querySelector("#el2");
            let s1 = document.querySelector("#s1");
            let s2 = document.querySelector("#s2");

            el1.classList.add("fade-out")
            s1.classList.remove("hidden")
            s1.classList.add("fade-in")
            setTimeout(() => {
                s1.classList.remove("fade-in")
                s1.remove()
                el2.classList.add("fade-out")
                s2.classList.remove("hidden")
                s2.classList.add("fade-in")
                setTimeout(() => {
                    s2.classList.remove("fade-in")
                    s2.classList.add("fade-out")

                }, 10000)
            }, 10000)


        }), 1000)
        setTimeout((() => {
            let el3 = document.querySelector("#el3");
            let s3 = document.querySelector("#s3")

            let el4 = document.querySelector("#el4")
            let s4 = document.querySelector("#s4")


            el3.classList.add("fade-out")
            s3.classList.remove("hidden")
            s3.classList.add("fade-in")
            setTimeout(() => {
                s3.classList.remove("fade-in")
                s3.classList.add("fade-out")
                s3.remove()
                el4.classList.add("fade-out")
                s4.classList.remove("hidden")
                s4.classList.add("fade-in")
                setTimeout(() => {
                    s4.classList.remove("fade-in")
                    s4.classList.add("fade-out")

                }, 10000)


            }, 10000)

        }), 1000)
        break
    default:
        alert("Tente um número menor");
}


// script.js
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById('timer');
    const resetButton = document.getElementById('resetButton');

    function formatTime(ms) {
        let totalSeconds = Math.floor(ms / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateTimer() {
        const currentTime = Date.now();
        const timeDiff = currentTime - startTime + elapsedTime;
        timerDisplay.textContent = formatTime(timeDiff);
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
        elapsedTime = 0;
        timerDisplay.textContent = '00:00:00';
    }

    // Condição que dispara o cronômetro
    const condition = true; // Altere esta condição conforme necessário

    if (qtd) {
        setTimeout(startTimer, 1000)
    }

    resetButton.addEventListener('click', resetTimer);
});
