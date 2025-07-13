<template>
  <div id="foremost">
    <NavBar/>
    <div id="rt-view">
      <transition name="fade" mode="out-in">
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
