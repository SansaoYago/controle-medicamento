/*
    Funções atalho de procedimentos, com ou sem parametros!
*/
    


//Variáveis
const campo = document.querySelector("#time")

const resp = document.querySelector('h3')

const btn = document.querySelector('button')

const tempo = new Date()
const hora = tempo.getHours()
const minuto = tempo.getMinutes()
const time = [hora, minuto].join(':')
const diaSem = tempo.getDay()

let  med1, med2, reme1, reme2, color, nomeMed1, nomeMed2, diaS

//Entrada de dados
switch(diaSem) {
case 0:
    diaS = 'Domingo'
    break
case 1:
    diaS = "Segunda-Feira"
    break
case 2:
    diaS = 'Terça-Feira'
    break
case 3:
    diaS = 'Quarta-Feira'
    break
case 4:
    diaS = 'Quinta-Feira'
    break
case 5:
    diaS = 'Sexta-Feira'
    break
case 6:
    diaS = 'Sábado'
    break
default:
    console.log('Dia da semana inválido')
    break
}

med1 = 30, med2 = 30
reme1 = document.querySelector("#pri")
reme2 = document.querySelector("#seg")
nomeMed1 = "A-S:"
nomeMed2 = "Atovastatina:"

//Processamento de dados
if (btn.style.background == "") {
btn.style.background = btnColor("rgba(245, 57, 57, 0.833)")
resp.innerHTML = `Hora de tomar o medicamento`
}

reme1.innerHTML = "<strong>"+nomeMed1+ "</strong> " + med1+ " unidades"
reme2.innerHTML = "<strong>"+nomeMed2+ "</strong> " + med2 + " unidades"


function btnColor(cor) {
 btn.style.background = cor
}

btn.addEventListener('click', clicar)

function clicar() {
med1 += - 1
med2 += -1
reme1.innerHTML = `<strong>${nomeMed1}</strong> ${med1} unidades`
reme2.innerHTML = `<strong>${nomeMed2}</strong> ${med2} unidades`

btn.style.background = btnColor("#B8FFC6")

resp.innerText = `Não há medicamentos pendentes`

}

//Saída de dados

campo.innerHTML = `${diaS}<br>${time}`


