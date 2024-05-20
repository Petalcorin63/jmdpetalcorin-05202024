import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types/Task'
import {uuid} from 'vue-uuid'

export const useTasksStore = defineStore('counter', () => {
  const taskList = ref<Array<Task>>([])

  function addTask(task:Task){
    if(task && task.name && task.description){
    taskList.value.push(task)
    }
  }

  function deleteTask(id:string){
    if(id !== ""){
    taskList.value = task.value.filter((i) => {
        return i.id !== task.id
      })
    }
  }

  function createTask(name:string,status:string, description:string){
    if(name && description){
    taskList.value.push({
      id: uuid.v4(), 
      name: name, 
      status: status, 
      description: description
    })
    }
  }

  function updateTask(task:Task){
    if(task && 
        task.name && 
        task.description && 
        taskList.some((i) => { return i.id === task.id})
      ){
      taskList.value.with(taskList.findIndex((i) => {
        return i.id === task.id
      }), task)
    }
  }

  return { taskList, updateTask, addTask, createTask, deleteTask}
})
