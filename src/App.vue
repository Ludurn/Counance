<template>
  <nav>
    <NavBar
    />
  </nav>
  <router-view/>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
