<template>
<div draggable @dragstart="drag($event)">
	<strong>{{ task.name }}</strong>
	<p>{{ task.description }}</p>
	<button @click="editTask(task)">Edit</button>
	<button @click="deleteTask('todo', index)">Delete</button>
</div>
</teamplate>
<script setup lang="ts">
	import {ref} from 'vue'
	import type { Task} from '@types/Task'
	
		const emit = defineEmits(['edit','delete','dragstart'])
		const props = defineProps<{task:Task , index:number}>()

		function drag(event){
			emit('dragstart', 'todo', props.index, event);
		}

		function editTask(){
			emit('edit', props.task);
		}

		function deleteTask(){
			emit('delete', 'TO DO', props.index);
		}
</scritp>