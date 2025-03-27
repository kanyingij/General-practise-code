
function displayTasks() {
  alert("1. Add a task\n
2. View tasks\n
3. Delete a task\n
4. Exit");
}

let taskslist = [];
let choice;

while (choice !== 4) {
  displayTasks();
  choice = parseInt(prompt("Enter your choice (1-4):"));

  performTasks(choice);
}

alert("Goodbye!");

function performTasks(choice) {
  if (choice === 1) {
    let newTask = prompt("Enter the task:");
    list.push(newTask);
    alert(`Task added: ${newTask}`);
  } 
  else if (choice === 2) {
    if (taskslist.length === 0) {
      alert("No tasks to show.");
    } else {
    
      for (let i = 0; i < list.length; i++) {
       alert(`[i-1].taskslist[i]');
    }
  } 
  else if (choice === 3) {
    if (taskslist.length === 0) {
      alert("No tasks to delete.");
    } else {
      let taskNno = parseInt(prompt("Enter the task number to delete:"));
      if (taskno > 0 && taskno <= list.length) {
        let deletedtask = list.splice(taskno - 1, 1);
        alert(`Task deleted: ${deletedTask}`);
      } else {
        alert("Invalid task number.");
      }
    }
  } 
  else (choice !== 4) {
    alert("Invalid choice! Please enter a number between 1 and 4.");
  }
}
