<script setup lang="ts">
import type { ButtonProps } from './types'
import { buttonProps } from './types'

const props: ButtonProps = defineProps(buttonProps)

const emit = defineEmits(['click', 'change'])

const onClick = (event: Event) => emit('click', event)
</script>

<template>
  <button @click="onClick($event)">Use Button</button>
</template>
