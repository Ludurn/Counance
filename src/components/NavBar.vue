<template>
  <div id="nav-bar">
    <div @click="toggleNavBar()" id="nav-icon"></div>
      <div class="nav-options" v-for="(route, i) in routes" :key="i">
        <Transition name="fade">
          <LinkButton v-if="show" :route="route.path" :label="route.name" />
        </Transition>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LinkButton from './LinkButton.vue'

export default defineComponent({
  components: {
    LinkButton
  },
  data () {
    return {
      routes: [
        { name: 'INTRO', path: '/' },
        { name: 'HOME', path: '/page1' },
        { name: 'DASHBOARD', path: '/page2' }
      ],
      show: false
    }
  },
  methods: {
    toggleNavBar () {
      this.show = !this.show
    }
  }
})
</script>
