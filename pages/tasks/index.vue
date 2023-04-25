<script lang="ts" setup>
import type Task from '~/type/Task'

const props = defineProps<{
  tasks: Task[]
  page: number
  loading: boolean
}>()
const emit = defineEmits<{ (e: 'changePage', value: number): void }>()
const defaultTasksLength = 100

function scrollToTop() {
  window.scroll({ top: 0, behavior: 'smooth' })
}

function onChangePageNext() {
  if (props.tasks.length === defaultTasksLength && !props.loading) {
    emit('changePage', props.page + 1)
    scrollToTop()
  }
}

function onChangePagePrev() {
  if (props.page !== 0 && !props.loading) {
    emit('changePage', props.page - 1)
    scrollToTop()
  }
}
</script>

<template>
  <div class="relative">
    <h2
      class="font-normal text-center leading-9 text-3xl font-['Merriweather'] mb-12 mt-20
    after:h-0.5 after:bg-orange-300 after:ml-auto after:mr-auto after:mt-2.5 after:block after:w-16"
    >
      Список задач
    </h2>
    <div v-if="tasks.length">
      <NewTask v-for="task in tasks" :key="task.id" class="mb-6 mt-6" :task="task" :loading="loading" />
      <div class="flex items-center justify-center gap-3">
        <div
          class="inline-flex h-12 w-12 items-center justify-center rounded border border-gray-100 cursor-pointer hover:text-gray-400"
          @click="onChangePagePrev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <p class="text-2xl font-semibold -mt-0.5">
          {{ page + 1 }}
        </p>

        <div
          class="inline-flex h-12 w-12 items-center justify-center rounded border border-gray-100 cursor-pointer hover:text-gray-400"
          @click="onChangePageNext"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <TopButton class="bottom-10 right-8" @click="scrollToTop" />
  </div>
</template>
