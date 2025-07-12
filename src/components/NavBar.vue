<template>
  <div id="nav-bar">
    <div @click="showNavBar()" id="nav-icon"></div>
  </div>
</template>

<script>
export default {
  methods: {
    showNavBar () {
      alert('NAV BARRR')
    }
  }
}
</script>
