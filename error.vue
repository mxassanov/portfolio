<script lang="ts" setup>
defineProps<{
  error: { [key: string]: unknown }
}>()

function handleError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <div
    class="mt-40 rounded-2xl p-1 text-center"
  >
    <div class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8">
      <div class="mt-16">
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
          Ошибка
        </h3>

        <p class="mt-2 text-sm text-gray-500">
          {{ error.message }}
        </p>
      </div>
      <div
        class="mt-8 inline-flex items-center gap-2 text-orange-300 sm:mt-12 lg:mt-16 hover:text-gray-400 hover:cursor-pointer" @click="handleError"
      >
        <p class="font-medium sm:text-md">
          Нажмите для перезагрузки
        </p>
      </div>
    </div>
  </div>
</template>
