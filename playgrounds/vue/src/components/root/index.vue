<template>
  <div class="content">
    <div class="icon-content">
      <a href="https://github.com/use-kit" target="_blank">
        <img src="/use.svg" class="logo use" alt="Vite logo">
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo vue" alt="Vue logo">
      </a>
    </div>

    <h2>🎉🎉 Use UI 🎈🎈</h2>
  </div>
</template>

<style scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.use:hover {
  filter: drop-shadow(0 0 2em #ebdd65);
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

h2 {
  text-align: center;
}
</style>
