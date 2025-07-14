<template>
    <div @click="redirect" class="feature" :id="`feature-${id}`"><h1 class="feature-title">{{ name }}</h1></div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ id: number, name: string, route: string }>()
const router = useRouter()

function redirect () {
  router.push(props.route)
}
</script>
