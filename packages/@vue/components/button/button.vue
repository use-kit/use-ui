<script setup lang="ts">
import type { ButtonProps } from './types'
import { buttonProps } from './types'

const props: ButtonProps = defineProps(buttonProps)

const emit = defineEmits(['click', 'change'])

const onClick = (event: Event) => emit('click', event)
</script>

<template>
  <button color-rose-400 color-red-400 @click="onClick($event)">Use Button</button>
</template>
