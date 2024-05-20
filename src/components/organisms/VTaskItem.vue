<template>
<div draggable @dragstart="drag($event)">
	<strong>{{ props.task.name }}</strong>
	<p>{{ props.task.description }}</p>
	<button @click="editTask()" >Edit</button>
	<button @click="deleteTask()" >Delete</button>
</div>
</template>
<script setup lang="ts">
	import {ref} from 'vue'
	import type { Task} from '@types/Task'
	
		const emit = defineEmits(['edit','deleteTask','dragstart']);
		const props = defineProps<{task:Task , index:number}>();
		function drag(event){
			emit('dragstart', props.task.status, props.index, event)
		}

		function editTask(){
			emit('edit', props.task)
		}

		function deleteTask(){
			emit('deleteTask', props.task.id)
		}
</script>
<style scoped>
	div{
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}
</style>