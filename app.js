document.getElementById('formTask').addEventListener('submit',saveTask)

function saveTask (e){
    //alert('ok')
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    //console.log(title, description)

    //const task = {
    //   title: title,
    //    description: description
    //}

    const task = {
        title,
        description
    }
    //console.log(task)
    //localStorage.setItem('tasks',task)
    //localStorage.setItem('tasks',JSON.stringify(task))
    //console.log(localStorage.getItem('tasks'))
    //console.log(JSON.parse(localStorage.getItem('tasks')))
    
    if (localStorage.getItem('tasks')=== null) {
        let tasks = []
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    getTasks()

    e.preventDefault()
}

function getTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksView = document.getElementById('tasks')
    tasksView.innerHTML = ''

    

    for (i=0; i < tasks.length ;i++){
        let title = tasks[i].title
        let description = tasks[i].description

        tasksView.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a href="#" class="btn btn-danger" onclick="deleteTask('${title}')">Delete</a>
            </div>
        </div>
        `
    }
}

function deleteTask(title){
    //console.log(title)
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for (i=0; i<tasks.length; i++) {
        if (tasks[i].title == title){
            tasks.splice(i,1)
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
    getTasks()
}
getTasks()