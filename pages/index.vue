<script lang="ts" setup>
import type Task from '~/type/Task'

defineProps<{
  tasks: Task[]
}>()

const workList = [
  'Nuxt2/3', 'Vite', 'TypeScript',
]
</script>

<template>
  <div>
    <h1
      class="font-noraml text-center leading-9 text-4xl font-['Merriweather'] mb-16 mt-16
    after:h-0.5 after:bg-orange-300 after:ml-auto after:mr-auto after:mt-2.5 after:block after:w-16"
    >
      Привет, я Магомед Гасанов.
    </h1>
    <div class="flex items-center justify-center mb-12">
      <div class="avatar">
        <div class="w-16 rounded-full mr-4">
          <img src="~/assets/images/main-page/photo.jpg" alt="photo">
        </div>
      </div>
      <a href="https://t.me/mxmxmm25" class="no-underline mr-4" target="_blank">
        <svg class="hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" /><title>Связаться со мной в телеграм</title></g></g></svg>
      </a>
      <a href="mailto:mxasssanov@gmail.com" class="no-underline">
        <svg class="hover:fill-orange-300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24px" height="24px" viewBox="0 0 256 256" xml:space="preserve">
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path d="M 45 51.648 l 45 -27.845 v -6.422 c 0 -1.595 -1.293 -2.887 -2.887 -2.887 H 2.887 C 1.293 14.494 0 15.786 0 17.381 v 6.422 L 45 51.648 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 45.789 54.688 c -0.011 0.007 -0.023 0.008 -0.033 0.015 c -0.08 0.047 -0.166 0.08 -0.253 0.111 c -0.04 0.014 -0.077 0.035 -0.118 0.046 c -0.115 0.031 -0.233 0.045 -0.353 0.048 c -0.011 0 -0.021 0.004 -0.031 0.004 c 0 0 -0.001 0 -0.001 0 s -0.001 0 -0.001 0 c -0.011 0 -0.021 -0.004 -0.031 -0.004 c -0.119 -0.003 -0.238 -0.018 -0.353 -0.048 c -0.04 -0.011 -0.078 -0.032 -0.118 -0.046 c -0.087 -0.031 -0.172 -0.064 -0.253 -0.111 c -0.011 -0.006 -0.023 -0.008 -0.033 -0.015 L 0 27.331 v 45.289 c 0 1.594 1.293 2.887 2.887 2.887 h 84.226 c 1.594 0 2.887 -1.293 2.887 -2.887 V 27.331 L 45.789 54.688 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <title>Написать мне письмо</title>
          </g>
        </svg>
      </a>
    </div>
    <p class="font-normal text-lg mb-5">
      Я фронтенд-разработчик, сейчас занимаюсь разработкой и поддержкой
      <a class="text-orange-300 hover:text-gray-800 hover:underline" href="https://05.ru" alt="Перейти на сайт" target="_blank">интернет-магазина,</a> а также
      <a class="text-orange-300 hover:text-gray-800 hover:underline" href="https://darkstore.05.ru" target="_blank">сервиса доставки продуктов.</a>
    </p>
    <div class="mb-5">
      <p class="mb-2 text-gray-400 text-sm">
        Работал в продакшене с
      </p>
      <kbd v-for="(item, i) in workList" :key="i" class="kbd kbd-md mr-1 mb-2">{{ item }}</kbd>
    </div>
    <p class="font-normal text-lg mb-2">
      Ниже я вывел описание некоторых задач, в решении которых участвовал в течении последнего времени, чтобы вы имели примерное представление о уровне их сложности и моем опыте <span class="font-normal text-sm text-gray-400 text-center">P.S. cписок неполный и отображен с помощью апи таск-менеджера</span>
    </p>
    <h2
      class="font-normal text-center leading-9 text-3xl font-['Merriweather'] mb-12 mt-20
    after:h-0.5 after:bg-orange-300 after:ml-auto after:mr-auto after:mt-2.5 after:block after:w-16"
    >
      Последние задачи из списка
    </h2>
    <div v-if="tasks.length">
      <NewTask v-for="task in tasks.slice(0, 20)" :key="task.id" class="mb-6 mt-6" :task="task" />
    </div>
  </div>
</template>
