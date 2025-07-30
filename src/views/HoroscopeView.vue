<template>
  <div id="constellation">
    <ZodiacSign v-for="sign in signs" :key="sign" :sign="sign" class="zodiac-signs" />
  </div>
</template>

<script setup lang="ts">

import ZodiacSign from '@/components/ZodiacSign.vue'

const signs: string[] = [
  'Aries',
  'Taurus',
  'Gemini'
]

</script>
