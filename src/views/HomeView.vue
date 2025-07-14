<template>
    <div id="feature-box">
        <div id="feature-info">
            <h1 class="regular-title">FOR A BETTER FUTURE</h1>
            <p>
                One of the biggest fight trigger between couples are financial troubles.
                It lacked money to pay the bills? The fault slips above the wasteful partner.
                Remained money by the end of the month? Instead of grasp, the couple would arrange
                another reason to discuss how to invest or spend that quantity.
                <br>
                <br>
                There is a way? Yes, through the following tools that our solution offers, your life
                will count with multiples strategies to overcome future financial headaches.
                <br>
                <br>
                To start off, select one of them and see more details about each.
            </p>
            <transition name="fade">
              <p v-if="desc">
                {{ desc }}
              </p>
            </transition>
        </div>
        <div id="feature-display">
            <AppFeature @mouseenter="showDescription(feature.description)" @mouseleave="clearDescription" :id="i" :name="feature.name" :route="feature.path" v-for="(feature, i) in features" :key="i" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppFeature from '@/components/AppFeature.vue'

const features = [
  {
    name: 'Horoscope',
    path: '/horoscope',
    description: 'Horoscope: See what to expect about your financial future.'
  },
  {
    name: 'Retirement',
    path: '/retirement',
    description: 'Retirement: Calculate the time to reach your desired retirement.'
  },
  {
    name: 'Compounding',
    path: '/compounding',
    description: 'Compounding: Discover how your money grows over time with the power of compounding.'
  },
  {
    name: 'Infladjust', // or Money Aging
    path: '/infladjust',
    description: 'Infladjust: See how inflation affects your future value, and adjust your goals accordingly.'
  }
]

const desc = ref('')

function showDescription (description: string) {
  desc.value = description
}

function clearDescription () {
  desc.value = ''
}

</script>
