<script setup lang="ts">
defineOptions({
  name: 'UPopover',
})

function showPopover() {
  document.getElementById('popover')?.classList.toggle('opacity-0')
}

function dropdownFunction(flag: number) {
  let upIcon
  let downIcon
  if (flag === 1) {
    upIcon = document.getElementById('upIcon1')
    downIcon = document.getElementById('downIcon1')
    upIcon?.classList.toggle('hidden')
    downIcon?.classList.toggle('hidden')
  }
  else if (flag === 2) {
    upIcon = document.getElementById('upIcon2')
    downIcon = document.getElementById('downIcon2')
    upIcon?.classList.toggle('hidden')
    downIcon?.classList.toggle('hidden')
  }
  else if (flag === 3) {
    upIcon = document.getElementById('upIcon3')
    downIcon = document.getElementById('downIcon3')
    upIcon?.classList.toggle('hidden')
    downIcon?.classList.toggle('hidden')
  }
}
</script>

<template>
  <div class="pb-56 bg-gray-300 flex flex-col items-center">
    <div class="h-40" />
    <div class="container mx-auto px-3 lg:px-24">
      <div class="relative">
        <p class="text-gray-800 cursor-pointer pb-32" @click="showPopover()">
          Popover
        </p>
        <!-- Code block starts -->
        <div id="popover" class="transition duration-150 ease-in-out -mt-16 absolute top-0 left-0 ml-20 w-full sm:w-1/2">
          <div class="w-full bg-white rounded shadow-2xl">
            <div class="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
              <svg class="absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                      <g id="Group-2" transform="translate(24.000000, 0.000000)">
                        <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p class="text-base text-gray-800 font-normal leading-normal tracking-normal opacity-50">
                Add person by name or title
              </p>
            </div>
            <div class="w-full h-full px-4 xl:px-8 pt-3 pb-5">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="mr-4 w-12 h-12 rounded shadow">
                    <img class="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_0.png" alt="avatar">
                  </div>
                  <div>
                    <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
                      Andres Berlin
                    </h3>
                    <p class="text-gray-600 text-xs leading-3">
                      Manager Sales
                    </p>
                  </div>
                </div>
                <div class="relative font-normal text-sm flex items-center text-gray-600" @click="dropdownFunction(1)">
                  <select class="w-full appearance-none pr-8 py-1 pl-2">
                    <option>Can view</option>
                    <option>Can edit</option>
                  </select>
                  <svg id="downIcon1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <svg id="upIcon1" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up pointer-events-none absolute right-0 mr-2" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                </div>
              </div>
              <div class="py-6 flex justify-between items-center">
                <div class="flex items-center">
                  <div class="mr-4 w-12 h-12 rounded shadow">
                    <img class="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_1.png" alt="avatar">
                  </div>
                  <div>
                    <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
                      Andres Berlin
                    </h3>
                    <p class="text-gray-600 text-xs leading-3">
                      Manager Sales
                    </p>
                  </div>
                </div>
                <div class="relative font-normal text-sm flex items-center text-gray-600" @click="dropdownFunction(2)">
                  <select class="w-full appearance-none pr-8 py-1 pl-2">
                    <option>Can edit</option>
                    <option>Can view</option>
                  </select>
                  <svg id="downIcon2" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <svg id="upIcon2" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up pointer-events-none absolute right-0 mr-2" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="mr-4 w-12 h-12 rounded shadow">
                    <img class="w-full h-full overflow-hidden object-cover object-center rounded" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar">
                  </div>
                  <div>
                    <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
                      Andres Berlin
                    </h3>
                    <p class="text-gray-600 text-xs leading-3">
                      Manager Sales
                    </p>
                  </div>
                </div>
                <div class="relative font-normal text-sm flex items-center text-gray-600" @click="dropdownFunction(3)">
                  <select class="w-full appearance-none pr-8 py-1 pl-2">
                    <option>Can view</option>
                    <option>Can edit</option>
                  </select>
                  <svg id="downIcon3" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <svg id="upIcon3" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up pointer-events-none absolute right-0 mr-2" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                </div>
              </div>
              <hr class="my-5 border-t border-gray-200">
              <label for="link" class="text-gray-600 text-xs font-normal">Anyone with a link can view</label>
              <div class="flex items-stretch mt-2">
                <div class="relative w-full">
                  <div class="absolute text-gray-500 flex items-center px-2 border-r h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </div>
                  <input id="link" class="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border" value="https://alphad.co/Q4XY3HWXN95">
                  <button class="absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-indigo-700 rounded-r text-white px-5 h-10 text-sm">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Code block ends -->
      </div>
    </div>
  </div>
</template>
