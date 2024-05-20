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

  const doneTaskList = computed(()=>{
    return taskList.value.filter(item => item.status === "DONE")
  })

  const inTaskList = computed(()=>{
    return taskList.value.filter(item => item.status === "IN PROGRESS")
  })

  const todoTaskList = computed(()=>{
    return taskList.value.filter(item => item.status === "TO DO")
  })

  function deleteTask(id:string){
    if(id !== ""){
    taskList.value = taskList.value.filter((i) => {
        return i.id !== id
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
        taskList.value.some((i) => { return i.id === task.id})
      ){
      taskList.value.with(taskList.value.findIndex((i) => {
        return i.id === task.id
      }), task)
    }
  }

  return { taskList, updateTask, addTask, createTask, deleteTask, inTaskList, todoTaskList, doneTaskList}
})
