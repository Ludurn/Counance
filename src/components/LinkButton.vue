<template>
    <div @click="redirect" class="link-button">
      {{ label }}
    </div>
</template>

<script lang="ts">

export default {
  props: ['route', 'label'],
  methods: {
    redirect () {
      this.$router.push(this.route)
    }
  }
}
</script>
