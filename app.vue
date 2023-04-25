<script setup lang="ts">
const page = ref(0)

const { data: tasks, error, pending } = await useLazyAsyncData(
  () => $fetch('/api/tasks/', {
    params: { page: page.value },
  }),
  {
    watch: [page],
  },
)

if (error.value)
  showError({ statusMessage: error.value.message })
</script>

<template>
  <div class="ml-auto mr-auto max-w-2xl min-h-full pt-8 pb-5 px-5">
    <Header />
    <NuxtPage :tasks="tasks" :page="page" :loading="pending" @change-page="page = $event" />
  </div>
</template>
