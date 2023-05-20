todos = [
    {
        name: "buy eggs",
        id: "1",
        done: false

    },
    {
        name: "buy books",
        id: "2",
        done: false

    },
    {
        name: "sleep",
        id: "3",
        done: true

    }

]

const todoContainer = document.getElementById("todo-container")

function render(){
    todoContainer.innerHTML=""
    todos.forEach(item =>{
        todoContainer.appendChild(getTodo(item))
    })
}

function getTodo(item){

    // {
    //     name: "buy eggs",
    //     id: "1",
    //     done: false

    // }
    // <div class="todo">
    //             <input id="1" type="checkbox">
    //             <label for="1" > do assignment</label>
    //         </div>

    

    const container = document.createElement("div")
    container.classList.add("todo")

    const input = document.createElement("input")
    input.id = item.id;
    input.checked= item.done
    input.type= "checkbox"
    container.appendChild(input)

    const label = document.createElement("label")
    label.htmlFor = item.id ;
    label.innerText = item.name 
    if(item.done){
        label.classList.add("cut")
    }
    container.appendChild(label)

    input.addEventListener("change", ()=>{
        item.done = !item.done
        render()
    })

    return container
}


render()