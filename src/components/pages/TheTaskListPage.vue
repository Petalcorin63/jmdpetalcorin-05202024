<template>
  <body>
    <h1>Kanban Board</h1>
    <main>
    <VForm :task="task" @submit="submit"/>
    <section class="board">
      <section class="column" id="TO DO" @drop="drop('TO DO')" @dragover.prevent>
        <h2>To Do</h2>
        <div class="tasks" id="todo-tasks">
          <VTaskItem v-for="(task, index) in tasks.todoTaskList" :task="task" :index="index" :key="index" class="task" draggable @edit="edit" @dragstart="drag" @deleteTask="deleteTask"/>
        </div>
      </section>
      <section class="column" id="IN PROGRESS" @drop="drop('IN PROGRESS')" @dragover.prevent>
        <h2>In Progress</h2>
        <div class="tasks" id="todo-tasks">
          <VTaskItem v-for="(task, index) in tasks.inTaskList" :task="task" :index="index" :key="index" class="task" draggable @edit="edit" @dragstart="drag" @deleteTask="deleteTask"/>
        </div>
      </section>
      <section class="column" id="DONE" @drop="drop('DONE')" @dragover.prevent>
        <h2>Done</h2>
        <div class="tasks" id="todo-tasks">
          <VTaskItem v-for="(task, index) in tasks.doneTaskList" :task="task" :index="index" :key="index" class="task" draggable @edit="edit" @dragstart="drag" @deleteTask="deleteTask"/>
        </div>
      </section>
    </section>
    <h3 v-show="tasks.taskList.length === 0">No Tasks</h3>
    </main>
  </body>
</template>
<script setup lang="ts">
  import {useTasksStore} from '@/stores/tasks'
  import VForm from '@/components/organisms/VForm.vue' 
  import VTaskItem from '@/components/organisms/VTaskItem.vue' 
  import {ref} from 'vue'
  import Task from '@/types/Task'

    const tasks = useTasksStore()
    const task = ref<Task | undefined>(undefined)

    function drag(column: string, index: number, event: DragEvent) {
      event.dataTransfer?.setData('text', `${column}:${index}`);
    }

    function edit(targettask: Task) {
      task.value = targettask
    }
    function deleteTask(id:string){
      tasks.deleteTask(id);
    }

    function submit(id?:string, name:string, description:string, status:string){
      if(id && id !== 0){
        tasks.updateTask({id: id, name: name, description: description, status: status})
        task.value = undefined
      }
      else {
        tasks.createTask(name = name, status = status, description = description)
      }
    }
</script>
<style scoped>
body{
display: flex;
flex-direction: column;
align-items:center;
height: 100vh;
margin: 0px;
border-radius: 10px;
padding: 10px;
background-color: lightblue;
}

.board{
  display: flex;
}
.column{
  display: flex;
  position: relative;
  flex-direction: column;
  width: 33%;
  height: 100vh;
  align-items: center;
}

main{
display: flex;
flex-direction: column;
justify-content: center;
gap: 40px;  
}

h2{
  position: absolute;
  top: 1%;
  transform: translate(-50%, -50%);
}

h3{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

