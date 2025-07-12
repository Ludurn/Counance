<template>
  <div id="foremost">
    <NavBar/>
    <div id="rt-view">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
  <footer>
    <hr>
  </footer>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
