// 1. GLOBAL VARIABLES
        // State variable holding our task objects
        

        let total = 0;
        let completed = 0;
        let pending = 0;

        
    

        // DOM element references
        const taskInput = document.getElementById('task-input');
        const addButton = document.getElementById('add-button');
        const taskListContainer = document.getElementById('task-list');
        const statTotal = document.getElementById('stat-total');
        const statCompleted = document.getElementById('stat-completed');
        const statPending = document.getElementById('stat-pending');
        
        

        

      addButton.addEventListener('click', addtask);
      taskInput.addEventListener('click', addtask);

      function addtask(){
        let text = task-input.value;
        if (text === ""){
            alert("task name can't be empty");
            return;
        }
             console.log(text);
           
            
           
            
      }
        
        