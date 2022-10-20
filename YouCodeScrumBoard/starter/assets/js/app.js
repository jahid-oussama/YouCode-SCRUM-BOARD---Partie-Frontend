/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    const form = document.getElementById("form");
    form.addEventListener('submit', (e) => {

        // to stop reload fo page
        e.preventDefault();
        var title = document.getElementById("title").value;
        var priority = document.getElementById("priority").value;
        var status = document.getElementById("status").value;
        var date = document.getElementById("date").value;
        var description = document.getElementById("description").value;
        var type = document.querySelector('input[name="type"]:checked').value;
        var task = {
            title: title,
            priority: priority,
            status: status,
            date: date,
            description: description,
            type: type
        }
        tasks.push(task);

        reloadTasks()


    })


}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    let cont_todo = 0,
        cont_inpr = 0,
        cont_done = 0,
        cont_all = 0;

    // Remove tasks elements
    document.querySelector("#to-do-tasks").innerHTML = '';
    const Todo = document.querySelector("#to-do-tasks");

    document.querySelector("#done-tasks").innerHTML = '';
    const dt = document.querySelector("#done-tasks");

    document.querySelector("#in-progress-tasks").innerHTML = '';
    const inp = document.querySelector("#in-progress-tasks");

    tasks.forEach((task) => {
        cont_all++;
        if (task.status === "To Do") {
            cont_todo++;
            Todo.innerHTML += `<button class="w-100 border-0 " >
            <div class="">
                <i class=""></i> 
            </div>
            <div class="row"> 
                <div class="col-1 py-3"><i class="bi bi-question-circle text-green fs-4"></i> </div>
                <div class="col-11 py-3">
            <div class="text-start">
                <div class="fs-5 fw-bold">${task.title}</div>
                <div class="">
                    <div class="fs-6 text-secondary ">#${cont_all} ${task.date}</div>
                    <div class="fs-6 d-inline-block text-truncate" title="${task.description}" style="max-width:16rem">${task.description}</div>
                </div>
                <div class="">
                    <span class="btn btn-primary btn-sm lh-1 rounded-pill">${task.priority}</span>
                    <span class="btn btn-secondary btn-sm lh-1 rounded-pill ">${task.type}</span>
                </div>
            </div>
        </div>
        </div>
        </button>`;

        } if (task.status === "Done") {
            dt.innerHTML += `<button class="w-100 border-0 " >
        <div class="">
            <i class=""></i> 
        </div>
        <div class="row"> 
            <div class="col-1 py-3"><i class="bi bi-question-circle text-green fs-4"></i> </div>
            <div class="col-11 py-3">
        <div class="text-start">
            <div class="fs-5 fw-bold">${task.title}</div>
            <div class="">
                <div class="fs-6 text-secondary ">#${cont_all} ${task.date}</div>
                <div class="fs-6 d-inline-block text-truncate" title="${task.description}" style="max-width:16rem">${task.description}</div>
            </div>
            <div class="">
                <span class="btn btn-primary btn-sm lh-1 rounded-pill">${task.priority}</span>
                <span class="btn btn-secondary btn-sm lh-1 rounded-pill ">${task.type}</span>
            </div>
        </div>
    </div>
    </div>
    </button>`;
        } if (task.status === "In Progress") {
            inp.innerHTML += `<button class="w-100 border-0 " >
        <div class="">
            <i class=""></i> 
        </div>
        <div class="row"> 
            <div class="col-1 py-3"><i class="bi bi-question-circle text-green fs-4"></i> </div>
            <div class="col-11 py-3">
        <div class="text-start">
            <div class="fs-5 fw-bold">${task.title}</div>
            <div class="">
                <div class="fs-6 text-secondary ">#${cont_all} ${task.date}</div>
                <div class="fs-6 d-inline-block text-truncate" title="${task.description}" style="max-width:16rem">${task.description}</div>
            </div>
            <div class="">
                <span class="btn btn-primary btn-sm lh-1 rounded-pill">${task.priority}</span>
                <span class="btn btn-secondary btn-sm lh-1 rounded-pill ">${task.type}</span>
            </div>
        </div>
    </div>
    </div>
    </button>`;
        }




    })
    document.getElementById("to-do-tasks-count").innerText = cont_todo;

    // Set Task count
}
reloadTasks()
createTask()