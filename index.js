/*const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const millessimo = document.querySelector("#millessimos")
const iniciarBtn = document.querySelector("#iniciar")
const pausarBtn = document.querySelector("#pausar")
const  continuarBtn = document.querySelector("#continuar")
const resetarBtn = document.querySelector("#resetar")

let interval;
let minuts = 0;
let sec = 0;
let mili = 0;
let pause = false;

iniciarBtn.addEventListener('click', conometrar)
pausarBtn.addEventListener('click', stopInterval)
continuarBtn.addEventListener('click', continuarCono)
resetarBtn.addEventListener('click', resetTime)

function conometrar(){
    interval = setInterval(() => {
        if (!pause){

            mili += 10

            if(mili === 1000){
                sec ++;
                mili = 0;
            }

            if (sec === 60){
                minuts ++;
                sec = 0;
            }

            minutos.textContent  = formatTime(minuts)
            segundos.textContent = formatTime(sec)
            millessimo.textContent = formatTime2(mili);
        }
    }, 10)

    iniciarBtn.style.display ='none'
    pausarBtn.style.display = 'block'
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatTime2(time){
    return time < 100 ? `0${time}` : time
}

function stopInterval(){
    pause = true

    continuarBtn.style.display ='block'
    pausarBtn.style.display = 'none'
}

function continuarCono(){
    pause = false

    continuarBtn.style.display ='none'
    pausarBtn.style.display = 'block'
}

function resetTime(){
    clearInterval(interval);

    minuts = 0;
    sec = 0;
    mili = 0;

    minutos.textContent  = '00'
    segundos.textContent = '00'
    millessimo.textContent = '000'

    iniciarBtn.style.display ='block'
    pausarBtn.style.display = 'none'
    continuarBtn.style.display = 'none'
}*/

const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const millessimo = document.querySelector('#millessimos')
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const continuar = document.querySelector('#continuar');
const resetar = document.querySelector('#resetar')

let min = 0;
let sec = 0;
let mili = 0;
let pause = false;

iniciar.addEventListener('click', conometar)
pausar.addEventListener('click', () =>{
    pause = true
    pausar.style.display = 'none'
    continuar.style.display = 'block'
})
continuar.addEventListener('click', () =>{
    pause = false
    continuar.style.display = 'none'
     pausar.style.display = 'block'
})
resetar.addEventListener('click', () =>{
    clearInterval(interval)

    millessimo.textContent = '000'
    segundos.textContent = '00'
    minutos.textContent = '00'

    min = 0;
    sec = 0;
    mili = 0;

    continuar.style.display = 'none'
    pausar .style.display = 'none'
    iniciar.style.display = 'block'
})

function conometar(){
   interval = setInterval(() => {
       
        if(!pause){
            mili += 10

        if(mili >= 1000){
            sec ++
            mili = 0
        }else if(sec === 60){
            min ++
            sec = 0
        }
    }
        millessimo.textContent = zeroMiles(mili)
        segundos.textContent = adicionarZero(sec)
        minutos.textContent = adicionarZero(min)
    }, 10);

    iniciar.style.display = 'none'
    pausar.style.display = 'block'
}

function adicionarZero(numero){
   if(numero < 10){
    numero = '0'+ numero
   }
   return numero
}

function zeroMiles(numero){
    if(numero < 100){
        numero = '0'+ numero
    }
    return numero
}

