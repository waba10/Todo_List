window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            let boton = document.getElementById("delete");
            let eliminar = document.createElement("button");
            eliminar.innerText = "eliminar";
            let marcar = document.createElement("button");
            marcar.innerText = "marcar";
            element.addEventListener("click", () => {
                element.classList.add("delete");
                boton.addEventListener("click", () => {
                    let parent = element.parentNode;
                    console.log("entro 1");
                    if (parent) {
                        console.log("entro en el remove");
                        parent.removeChild(element);
                        parent.removeChild(eliminar);
                        parent.removeChild(marcar);
                    }
                })
            });
            eliminar.addEventListener("click", function () {
                console.log(element);
                let parent = element.parentNode;
                console.log("entro 2");
                if (parent) {
                    parent.removeChild(marcar);
                    parent.removeChild(element);
                    parent.removeChild(eliminar);

                }
            });
            marcar.addEventListener("click", function () {
                element.style.textDecoration = "line-through";
            })
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            /*
            element.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentNode;
               if(parent){
                   parent.removeChild(this);
               }
            });*/
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(eliminar, this.listHTML.childNodes[0]);
                this.listHTML.insertBefore(marcar, this.listHTML.childNodes[0]);
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
                this.listHTML.appendChild(marcar);
                this.listHTML.appendChild(eliminar);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}