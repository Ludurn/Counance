<template>
  <div id="home">
    <div id="split-1">
      <figure id="couple-invest-fig">
        <img alt="Vue logo" width="100%" src="@/assets/img/couple_investing.png">
      </figure>
    </div>
    <div id="split-2">
      <div>
        <h1 class="Big-Title">Let Your Love <br> Be Wealth</h1>
        <p>Start today with [proj name] to begin your journey toward a peaceful financial life.</p>
      </div>
      <LinkButton
        :route="'/route'"
        :label="'START NOW'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import LinkButton from '@/components/LinkButton.vue'

export default {
  components: {
    LinkButton
  }
}
</script>
