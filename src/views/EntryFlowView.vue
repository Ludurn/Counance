<template>
  <div id="entry-top">
    <div id="entry-option">
      <OptionButton @click="toggleOption(i)" v-for="(option, i) in options" :key="i" :label="option.label" :class="{ 'selected': option.isSelect }" />
    </div>
    <p>Welcome to Counance! We're so glad you're here. Sign up or log in to get started.</p>
  </div>
  <h1 class="Big-Title"></h1>
  <transition name="fade" mode="out-in">
    <SignUpForm v-if="options[0].isSelect" />
    <LoginForm v-else-if="options[1].isSelect" />
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OptionButton from '@/components/OptionButton.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import LoginForm from '@/components/LoginForm.vue'

const options = ref([
  {
    label: 'Sign up',
    isSelect: true
  },
  {
    label: 'Login',
    isSelect: false
  }
])

function toggleOption (optionIndex: number) {
  options.value = options.value.map((option, index) => {
    let newIsSelect: boolean

    if (index === optionIndex) {
      newIsSelect = true
    } else {
      newIsSelect = false
    }

    return {
      ...option,
      isSelect: newIsSelect
    }
  })
}

</script>
