const inputTarefa = document.querySelector('.input-tarefa');
const buttonTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function createLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(event){
    if (event.keyCode === 13){
        if (!inputTarefa.value) return;
        createTask(inputTarefa.value);
    }
});

function clearInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function createButtonClear(li){
    li.innerText += ' ';
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar';
    buttonClear.setAttribute('class', 'apagar');
    li.appendChild(buttonClear);
}

function createTask(input){
    const li = createLi();
    li.innerText = input;
    tarefas.appendChild(li);
    clearInput();
    createButtonClear(li);
    saveTasks();
}

buttonTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    createTask(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const element = e.target;

    if(element.classList.contains('apagar')){
        element.parentElement.remove();
        saveTasks();
    }
});


function saveTasks(){
    const liTasks = tarefas.querySelectorAll('li');
    const listTasks = [];

    for (let tarefa of liTasks){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listTasks.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listTasks);
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTasksSave(){
    const tasks = localStorage.getItem('tarefas');
    const listTasks = JSON.parse(tasks);

    for(let tarefa of listTasks){
        createTask(tarefa);
    }
}

addTasksSave();