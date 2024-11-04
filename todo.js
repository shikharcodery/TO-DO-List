
function addTadk(){
    
    const taskText = taskInput.value
    if (taskText == ""){return}

    const listItem = document.createElement('li')
    listItem.className = "task"
    const taskSpan = document.createElement('span')
     taskSpan.textContent = taskText

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "delete"
    deleteButton.className = "square"

    listItem.appendChild(taskSpan)
    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem)
    taskInput.value = ""
   
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
      });
}





