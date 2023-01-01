
var start = document.getElementById(`start`)
var stop = document.getElementById(`stop`)
var clean = document.getElementById(`clean`)
var x = 0
var y = 0
var z = 0
var w = 0

start.addEventListener(`click`, clicar)
stop.addEventListener(`click`, stopf)
clean.addEventListener(`click`, cleanf)


function clicar(){

    start.setAttribute(`disabled`, ``)

    tempo = setInterval(function milisegundosf(){
        
        var milisegundos = document.getElementById(`milisegundos`)
        var segundos = document.getElementById(`segundos`)
        var minutos = document.getElementById(`minutos`)
        var horas = document.getElementById(`horas`)

        
        if(y == 59 & x == 59 && w == 99) {
            

            w = 0
            x = 0
            y = 0

            w = w + 1
            z = z + 1

            milisegundos.innerHTML = w
            segundos.innerHTML = x
            minutos.innerHTML = y
            horas.innerHTML = z

        } else {
        
        
        if(x == 59 && w == 99) {
            w = 0
            x = 0

            w = w + 1
            y = y + 1

            milisegundos.innerHTML = w
            segundos.innerHTML = x
            minutos.innerHTML = y

        } else {

        
        if(w == 99) {
            w = 0

            x = x + 1
            w = w + 1

            milisegundos.innerHTML = w
            segundos.innerHTML = x
        } 

        w = w + 1

        milisegundos.innerHTML = w

    } } }, 10) 

}

function stopf() {

    clearInterval(tempo)
    start.removeAttribute("disabled") 

}

function cleanf() {

    x = 0
    y = 0
    z = 0
    w = 0

    milisegundos.innerHTML = w
    segundos.innerHTML = x
    minutos.innerHTML = y
    horas.innerHTML = z

    clearInterval(tempo)
    start.removeAttribute("disabled") 

}






