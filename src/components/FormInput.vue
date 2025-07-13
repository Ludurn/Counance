<template>
    <div class="entry-fields">
        <label :for="props.name"> {{ props.label }} </label>
        <br/>
        <input class="entry-input" :type="props.type" :name="props.name" :placeholder="props.placeholder" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    label: string,
    type: string,
    name: string,
    placeholder: string
}>()

</script>
