/*const h1 = document.querySelector('.container h1');

const data = new Date();
//h1.innerHTML = data.toString();

function getDayOfWeekText(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0: diaSemanaTexto = 'domingo'; return diaSemanaTexto;
        case 1: diaSemanaTexto = 'segunda-feira'; return diaSemanaTexto;
        case 2: diaSemanaTexto = 'terça-feira'; return diaSemanaTexto;
        case 3: diaSemanaTexto = 'quarta-feira'; return diaSemanaTexto;
        case 4: diaSemanaTexto = 'quinta-feira'; return diaSemanaTexto;
        case 5: diaSemanaTexto = 'sexta-feira'; return diaSemanaTexto;
        case 6: diaSemanaTexto = 'sábado'; return diaSemanaTexto;
        default: diaSemanaTexto = ''; return diaSemanaTexto;
    }
}

function getNameMonth(numberMonth){
    let nameMonth;
    switch (numberMonth) {
        case 0: nameMonth = 'janeiro'; return nameMonth;
        case 1: nameMonth = 'fevereiro'; return nameMonth;
        case 2: nameMonth = 'março'; return nameMonth;
        case 3: nameMonth = 'abril'; return nameMonth;
        case 4: nameMonth = 'maio'; return nameMonth;
        case 5: nameMonth = 'junho'; return nameMonth;
        case 6: nameMonth = 'julho'; return nameMonth;
        case 7: nameMonth = 'agosto'; return nameMonth;
        case 8: nameMonth = 'setembro'; return nameMonth;
        case 9: nameMonth = 'outubro'; return nameMonth;
        case 10: nameMonth = 'novembro'; return nameMonth;
        case 11: nameMonth = 'dezembro'; return nameMonth;
        default: nameMonth = ''; return nameMonth;
    }
}

function zeroLeft(num){
    return num >= 10 ? num : `0${num}`;
}

function createDate(date){
    const dayWeek = date.getDay();
    const numberMonth = date.getMonth();
    
    const nameDay = getDayOfWeekText(dayWeek);
    const nameMonth = getNameMonth(numberMonth);

    return `${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`;
}


const diaSemana = data.getDay();
h1.innerHTML = createDate(data)*/

const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);