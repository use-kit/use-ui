<script setup lang="ts">
defineOptions({
  name: 'UBadge',
})
</script>

<template>
  <div
    class="border border-gray-300 dark:border-gray-700 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center"
  >
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
      <span class="text-xs text-gray-800 dark:text-gray-100 font-normal">Badge</span>
    </div>
  </div>

  <div class="bg-gray-200 dark:bg-gray-800 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-gray-600 dark:bg-gray-400 mr-1" />
      <span class="text-xs text-gray-600 dark:text-gray-400 font-normal">Badge</span>
    </div>
  </div>

  <div class="bg-indigo-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
      <span class="text-xs text-indigo-700 font-normal">Badge</span>
    </div>
  </div>

  <div class="bg-yellow-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-yellow-500 mr-1" />
      <span class="text-xs text-yellow-500 font-normal">Badge</span>
    </div>
  </div>

  <div class="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-red-500 mr-1" />
      <span class="text-xs text-red-500 font-normal">Badge</span>
    </div>
  </div>

  <div class="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-green-500 mr-1" />
      <span class="text-xs text-green-500 font-normal">Badge</span>
    </div>
  </div>

  <div class="bg-blue-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center">
      <div class="h-1 w-1 rounded-full bg-blue-500 mr-1" />
      <span class="text-xs text-blue-500 font-normal">Badge</span>
    </div>
  </div>

  <div
    class="border border-gray-300 dark:border-gray-700 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center"
  >
    <span class="text-xs text-gray-800 dark:text-gray-100 font-normal">Badge</span>
  </div>

  <div class="bg-gray-500 dark:bg-gray-800 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
    <span class="text-xs text-white font-normal">Badge</span>
  </div>

  <div class="bg-indigo-700 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
    <span class="text-xs text-white font-normal">Badge</span>
  </div>

  <div class="bg-yellow-300 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
    <span class="text-xs text-white font-normal">Badge</span>
  </div>

  <div class="bg-red-400 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
    <span class="text-xs text-white font-normal">Badge</span>
  </div>

  <div class="bg-green-400 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
    <span class="text-xs text-white font-normal">Badge</span>
  </div>

  <div class="bg-blue-400 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
    <span class="text-xs text-white font-normal">Badge</span>
  </div>

  <div class="bg-indigo-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center mr-8">
    <div class="flex items-center justify-around h-full w-full">
      <span class="text-xs text-indigo-700 font-normal">Badge</span>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="12" height="12"
          viewBox="0 0 24 24" stroke-width="2" stroke="#667EEA" fill="none" stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  </div>

  <div class="bg-indigo-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
    <div class="flex items-center justify-around h-full w-full">
      <span class="text-xs text-indigo-700 font-normal">Badge</span>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="12" height="12"
          viewBox="0 0 24 24" stroke-width="2" stroke="#667EEA" fill="none" stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  </div>
</template>
