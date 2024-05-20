<template>
<form @submit.prevent="submit">
      <label for="name">Name : </label>
      <input type="text" id="name" name="name" v-model="name" maxLenght="250" required>
      <label for="description">Description : </label>
      <textarea type="text" id="description" name="description" maxLenght="1000" v-model="description"/>
      <label for="status">Status : </label>
      <select id="status" name="status" v-model="status">
        <option value="TO DO">To Do</option>
        <option value="IN PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
      <button type="submit">{{ task && task.name && task.description? "Edit Task" : "Add Task"}}</button>
    </form>
</template>
<script setup lang="ts">
	import {ref} from 'vue'
	import type { Task} from '@types/Task'
		const name = ref('')
		const description = ref('')
  		const status = ref('TO DO');

		const emit = defineEmits(['submit'])
		const props = defineProps<{task?:Task}>()

		if(task && task.name && task.description){
			name.value = task.value.name
			description.value = task.value.description
			status.value = task.value.status
		}

		function submit(){
			emit('submit', id, name, description, status)
		}
</script>