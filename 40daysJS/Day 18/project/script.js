'use strict';
console.log('Project: TODO');

const taskList = document.getElementById('taskList');

function addTask() {
  const taskInput = document.getElementById('taskInput');

  const task = taskInput.value;

  if (task.trim() === '') return;

  const li = document.createElement('li');

  li.innerText = task;

  const completeBtn = document.createElement('button');
  completeBtn.innerText = '✅';
  completeBtn.style.marginLeft = '5px';
  completeBtn.onclick = function () {
    li.classList.toggle('completed');
  };
  li.appendChild(completeBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.style.marginLeft = '5px';
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = '';
}

function filterTasks() {
  const searchInput = document.getElementById('searchInput');

  // Add event listener to the search input
  searchInput.addEventListener('input', () => {
    const filterText = searchInput.value.toLowerCase();

    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => {
      const taskText = task.textContent.slice(0, -2).toLowerCase();
      // Exclude the last two characters (buttons)
      if (taskText.includes(filterText)) {
        task.classList.remove('hidden');
      } else {
        task.classList.add('hidden');
      }
    });
  });
}

filterTasks();
