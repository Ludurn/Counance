<template>
    <form id="entry-form">
        <FormInput v-for="(input, i) in inputs" :key="i" :label="input.label" :type="input.type" :name="input.name" :placeholder="input.placeholder" />
        <input class="submit" type="submit" name="login" value="LOG IN" />
    </form>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue'

const inputs: Array<{ label: string, type: string, name: string, placeholder: string}> = [
  {
    label: 'Email',
    type: 'email',
    name: 'email-input',
    placeholder: 'Your e-mail'
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password-input',
    placeholder: 'Your password'
  }
]
</script>
