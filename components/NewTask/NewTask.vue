<script lang="ts" setup>
import type Task from '~~/type/Task'

defineProps<{
  task: Task
  loading?: boolean
}>()

const { isDesktop } = useDevice()
const root = shallowRef<HTMLElement>()
const rootHeight = ref(0)

onMounted(() => {
  rootHeight.value = root.value!.offsetHeight - (isDesktop ? 64 : 30)
})
</script>

<template>
  <div class="group relative block h-auto select-none cursor-help">
    <span class="absolute inset-0 border-2 border-dashed border-black" />
    <div
      ref="root"
      class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform duration-75 will-change-transform"
      :class="{ 'border-gray-300': loading, 'group-hover:-translate-x-2 group-hover:-translate-y-2': !!task.description }"
    >
      <div
        class="p-4 pt-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
      >
        <strong
          v-if="task.priority.name"
          class="rounded border-transparent px-3 py-1 text-[10px] font-medium border-2 sm:text-[12px] sm:py-1.5"
          :class="{ 'border-none': loading }"
          :style="{ borderColor: task.priority.color, color: !loading ? task.priority.color : 'white' }"
        >
          {{ task.priority.name }}
        </strong>
        <h2 class="mt-4 text-xl font-medium sm:text-2xl" :class="{ 'text-gray-300': loading }">
          {{ task.name }}
        </h2>
      </div>

      <div
        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-full h-full text-clip overflow-hidden"
        :class="{ 'text-white': loading }"
      >
        <p v-if="!!task.description" class="mt-2 text-sm sm:text-base" :style="{ minHeight: `${rootHeight}px` }">
          {{ task.description.slice(0, 500) }}
        </p>
        <p v-else :style="{ height: `${rootHeight}px` }">
          Нет описания
        </p>
      </div>
    </div>
  </div>
</template>
