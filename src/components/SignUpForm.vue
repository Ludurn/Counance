<template>
    <form id="entry-form">
        <FormInput v-for="(input, i) in inputs" :key="i" :label="input.label" :type="input.type" :name="input.name" :placeholder="input.placeholder" />
        <input class="submit" type="submit" name="sign-up" value="SUBMIT" />
    </form>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue'

const inputs: Array<{ label: string, type: string, name: string, placeholder: string}> = [
  {
    label: 'Username',
    type: 'text',
    name: 'name-input',
    placeholder: 'Your username'
  },
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
  },
  {
    label: 'Confirm password',
    type: 'password',
    name: 'email-input',
    placeholder: 'Your password'
  }
]
</script>
