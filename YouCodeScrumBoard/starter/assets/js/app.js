

function createTask() {


    document.getElementById("save").style.display = "block"
    document.getElementById("update").style.display = "none"

}

function saveTask() {

    const form = document.getElementById("form");
    form.addEventListener('submit', (e) => {


        e.preventDefault();
        let title = document.getElementById("title").value;
        let priority = document.getElementById("priority").value;
        let status = document.getElementById("status").value;
        let date = document.getElementById("date").value;
        let description = document.getElementById("description").value;
        let type = document.querySelector('input[name="type"]:checked').value;
        let task = {
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

function editTask(index) {

    $("#modal-task").modal("show")

    document.getElementById("title").value = tasks[index - 1].title;
    document.getElementById("priority").value = tasks[index - 1].priority;
    document.getElementById("status").value = tasks[index - 1].status;
    document.getElementById("date").value = tasks[index - 1].date;
    document.getElementById("description").value = tasks[index - 1].description;
    if (tasks[index - 1].type == "Bug") {
        document.getElementById("Bug").checked = true

    } else {
        document.getElementById("Feature").checked = true
    }
    document.getElementById("save").style.display = "none"
    document.getElementById("update").style.display = "block"

    //concatenation
    document.getElementById("update").setAttribute("onclick", "updateTask(" + (index - 1) + ")")


}

function updateTask(index) {


    let title = document.getElementById("title").value;
    let priority = document.getElementById("priority").value;
    let status = document.getElementById("status").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;
    let type = document.querySelector('input[name="type"]:checked').value;
    let task = {
        title: title,
        priority: priority,
        status: status,
        date: date,
        description: description,
        type: type
    }
    tasks[index] = task
    reloadTasks()


}

function deleteTask(index) {


    tasks.splice(index - 1, 1);
    reloadTasks();

}


function reloadTasks() {
    let cont_todo = 0,
        cont_inpr = 0,
        cont_done = 0,
        cont_all = 0,
        icon = '';

    // Remove tasks elements
    document.querySelector("#to-do-tasks").innerHTML = '';
    const Todo = document.querySelector("#to-do-tasks");

    document.querySelector("#done-tasks").innerHTML = '';
    const dt = document.querySelector("#done-tasks");

    document.querySelector("#in-progress-tasks").innerHTML = '';
    const inp = document.querySelector("#in-progress-tasks");
    /// talle for (let i=0; i<tasks.length;i++)
    tasks.forEach((task) => {
        cont_all++;
        let parent;
        if (task.status === "To Do") {
            icon = `bi bi-question-circle-fill`;
            parent = Todo;
            cont_todo++;

        } if (task.status === "Done") {
            icon = `bi bi-check2-square`;
            parent = dt;
            cont_done++;

        } if (task.status === "In Progress") {
            parent = inp;
            cont_inpr++;
            icon = `spinner-border spinner-border-sm `;

        }


        //template 
        let content = `<button class="w-100 border-0 " >
        <div class="">
            <i class=""></i> 
        </div>
        <div class="row"> 
            <div class="col-1 py-3"><i class="bi ${icon} text-green fs-4"></i>
            <i class="bi bi-pencil-square text-primary fs-4" onclick="editTask(${cont_all})"></i>
            <i class="bi bi-x-circle-fill text-danger fs-4" onclick="deleteTask(${cont_all})"></i> 
            </div>
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

        //condition 
        // if (task.status === "To Do") {
        //     cont_todo++;
        //     Todo.innerHTML += content;

        // } if (task.status === "Done") {
        //     cont_done++;
        //     dt.innerHTML += content;
        // } if (task.status === "In Progress") {
        //     cont_inpr++;
        //     inp.innerHTML += content;
        // }

        parent.innerHTML += content;




    })
    document.getElementById("to-do-tasks-count").innerText = cont_todo;
    document.getElementById("in-progress-tasks-count").innerText = cont_inpr;
    document.getElementById("done-tasks-count").innerText = cont_done;

    // to clean the form
    document.getElementById('form').reset();

    // Set Task count
}
reloadTasks()
saveTask()
