<script setup lang="ts">
  import {useTasksStore} from '@/stores/tasks'
    const tasks = useTasksStore()
    tasks.createTask("name","Todo","description")
</script>

<template>
  <main>
    {{tasks.taskList}}
  </main>
</template>
