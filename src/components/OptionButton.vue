<template>
    <div class="option-button">
        {{ props.label }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ label: string }>()

</script>
