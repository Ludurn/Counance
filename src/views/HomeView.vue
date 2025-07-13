<template>
  <div id="home">
    <div id="split-1">
      <figure id="counance-fig">
        <img alt="Vue logo" width="100%" src="@/assets/img/counance-icon.png">
      </figure>
    </div>
    <div id="split-2">
      <div>
        <h1 class="Big-Title">Let Your <span class="pink">Love</span> <br> Be <span class="gold">Wealth</span></h1>
        <p>Start today with <span class="pink">Cou</span><span class="gold">nance</span> to begin your journey toward a peaceful financial life.</p>
      </div>
      <LinkButton
        :route="'/entry-flow'"
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
