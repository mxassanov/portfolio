<template>
  <header>
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 font-normal">
      <div class="flex h-16 items-center justify-center">
        <nav>
          <ul class="flex items-center gap-6 text-lg">
            <li>
              <NuxtLink
                class="text-gray-900 transition hover:underline" active-class="underline" to="/"
              >
                Домой
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-900 transition hover:underline" active-class="underline" to="/tasks/"
              >
                Задачи
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
