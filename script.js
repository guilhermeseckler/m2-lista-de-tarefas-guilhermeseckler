const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"}]

function renderElements (arr){
  const taskList = document.querySelector('ul');
  taskList.classList.add('tasks__list');

  const titleInput = document.querySelector('#input_title');
  const typeInput = document.querySelector('.form__input--priority');
  const addTaskButton = document.querySelector('.form__button--add-task');

  addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const type = typeInput.value;

    if (title && type) {
      const newTask = { title, type };
      arr.push(newTask);
      titleInput.value = ''; 
      typeInput.value = ''; 
      taskList.innerHTML = '';

      for (let i = 0; i < arr.length; i++) {
        const task = arr[i];
        const li = createTaskItem(task.title, task.type);
        taskList.appendChild(li);
      }
    }
  });  
  taskList.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const task = arr[i];
    const li = createTaskItem(task.title, task.type);
    taskList.appendChild(li);
  }
}

function createTaskItem (title, type) { 
  
  const taskName = document.createElement('li')
  const taskDiv = document.createElement('div')
  const taskSpan = document.createElement('span')
  const taskP = document.createElement('p')
  const deleteButton = document.createElement ('button')
  
  taskName.classList.add('task__item')
  taskDiv.classList.add('task-info__container')
  taskSpan.classList.add('task-type')
  deleteButton.classList.add('task__button--remove-task')

  taskName.appendChild(taskDiv)
  taskDiv.appendChild(taskSpan)
  taskDiv.appendChild(taskP)
  taskName.appendChild(deleteButton)
  
  taskP.textContent = title; 

  deleteButton.addEventListener('click', () => {
    const index = tasks.findIndex(task => task.title === title);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderElements(tasks);
    }
  });
  
  if (type.toLowerCase() === 'urgente') {
    taskSpan.classList.add('span-urgent')
  }  
  if (type.toLowerCase() === 'importante') {
    taskSpan.classList.add('span-important')
  }  
  if (type.toLowerCase() === 'normal') {
    taskSpan.classList.add('span-normal')
  } 
  return taskName;
}
renderElements (tasks)