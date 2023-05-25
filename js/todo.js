

// APP START
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.msg');
const ul = document.querySelector('.list-group');
const clear = document.querySelector('.btn-dark');

// GENERAL LISTENER
loadAllEvent();

function loadAllEvent(){
    // add task
    form.addEventListener('submit',addTask);
    // clear task
    clear.addEventListener('click',clearList);
    // delete task
    ul.addEventListener('click',deleteTask);
}

// add task function
function addTask(e){
    if (taskInput.value === ''){
        msg.innerHTML = 'Please fill in a task';
        msg.classList.add('error');

        setTimeout(function(){
            msg.innerHTML = '';
        msg.classList.remove('error');
        },1000);
    }else{
        // create a list
        const lis = document.createElement('li');
        lis.className = 'list-group-item';
        lis.appendChild(document.createTextNode(taskInput.value));

        // create link
        const link = document.createElement('a');
        link.className = 'float-end text-danger';
        link.innerHTML = '<i class="bi bi-trash"></i>'

        lis.appendChild(link);
        ul.appendChild(lis);

        // message
        msg.innerHTML = 'A task added successfully'
        msg.classList.add('success');

        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('success');
        },1000);

        // clear input field
        taskInput.value = '';        
    }

    e.preventDefault();
}

// clear task function

function clearList(e){
    e.preventDefault();
    ul.innerText = '';
    // message
    msg.innerHTML = 'Task cleared successfully';
    msg.classList.add('success');

    setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('success');
        },1000);
}

// delete a particular task function

function deleteTask(e){
    if (e.target.parentElement.classList.contains('float-end')){
        e.target.parentElement.parentElement.remove()
        // message
        msg.innerHTML = 'Task deleted successfully';
        msg.classList.add('success');
        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('success');
        },1000);

    }
}
