<script setup lang="ts">
import { UseButton } from '@use-ui/components'

const handleClick = (e: Event) => console.log('e:', e)
</script>

<template>
  <div>Start Up Test</div>
  <use-button @click="handleClick" />
</template>
