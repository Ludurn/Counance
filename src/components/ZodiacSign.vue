<template>
  <canvas ref="canvas" width="480" height="480"></canvas>
</template>

<script setup lang="ts">

import { defineProps, ref, onMounted } from 'vue'

const props = defineProps<{ sign: string }>()

const canvas = ref<HTMLCanvasElement | null>(null)

interface ZodiacSign {
  name: string

  drawSign(): void
}

const Aries: ZodiacSign = {
  name: 'Aries',

  drawSign: () => {
    if (!canvas.value) return
    const ctx = canvas.value.getContext('2d')
    if (ctx === null) return

    ctx.clearRect(0, 0, 480, 480)
    ctx.strokeStyle = '#ffffff'
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()

    ctx.moveTo(50, 210)
    ctx.lineTo(165, 95)
    ctx.lineTo(370, 270)
    ctx.lineTo(420, 350)
    ctx.lineTo(410, 405)

    ctx.stroke()
    ctx.closePath()
  }
}

const Taurus: ZodiacSign = {
  name: 'Taurus',

  drawSign: () => {
    if (!canvas.value) return
    const ctx = canvas.value.getContext('2d')
    if (ctx === null) return

    ctx.clearRect(0, 0, 480, 480)
    ctx.strokeStyle = '#ffffff'
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()

    ctx.moveTo(140, 90)
    ctx.lineTo(265, 245)
    ctx.lineTo(275, 270)
    ctx.lineTo(280, 300)
    ctx.lineTo(325, 350)
    ctx.lineTo(405, 390)
    ctx.lineTo(425, 415)
    ctx.moveTo(80, 165)
    ctx.lineTo(215, 255)
    ctx.lineTo(250, 290)
    ctx.lineTo(280, 300)

    ctx.stroke()
    ctx.closePath()
  }
}

const Gemini: ZodiacSign = {
  name: 'Gemini',

  drawSign: () => {
    if (!canvas.value) return
    const ctx = canvas.value.getContext('2d')
    if (ctx === null) return

    ctx.clearRect(0, 0, 480, 480)
    ctx.strokeStyle = '#ffffff'
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()

    ctx.moveTo(125, 90)
    ctx.lineTo(190, 95)
    ctx.lineTo(300, 200)
    ctx.lineTo(380, 235)
    ctx.lineTo(330, 335)
    ctx.lineTo(230, 275)
    ctx.lineTo(170, 250)
    ctx.lineTo(80, 205)
    ctx.lineTo(85, 150)
    ctx.lineTo(125, 90)
    ctx.moveTo(380, 235)
    ctx.lineTo(425, 230)
    ctx.moveTo(330, 335)
    ctx.lineTo(320, 385)

    ctx.stroke()
    ctx.closePath()
  }
}

onMounted(() => {
  const signDrawers = {
    [Aries.name]: Aries.drawSign,
    [Taurus.name]: Taurus.drawSign,
    [Gemini.name]: Gemini.drawSign
  }

  const draw = signDrawers[props.sign]
  if (draw) {
    draw()
  }
})

</script>
