<script setup lang="ts">
defineProps<{
  reasons: string[];
}>();
</script>

<template>
  <section class="gradiente w-full">
    <app-container>
      <div class="text-gray-50 py-16 md:py-20">
        <app-heading class="text-shadow-lg">
          <slot name="title" />
        </app-heading>
        <div class="grid gap-8 row-gap-8 md:grid-cols-3">
          <div v-for="(reason, index) in reasons" :key="index">
            <div class="max-sm:flex items-center justify-center">
              <span
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10"
              >
                <icon name="lucide:check" class="h-8 w-8 text-white" />
              </span>
            </div>
            <div
              class="mt-6 max-sm:text-center text-balance max-w-xs max-sm:mx-auto"
            >
              <h3 class="text-lg font-semibold leading-8 text-white">
                {{ reason }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>

<style scoped>
.gradiente {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700' opacity='0.92'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(158, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='ffflux-gradient'%3E%3Cstop stop-color='%231a4eff' stop-opacity='1' offset='0%25'%3E%3C/stop%3E%3Cstop stop-color='hsl(252, 100%25, 50%25)' stop-opacity='1' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='ffflux-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005 0.003' numOctaves='1' seed='287' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeGaussianBlur stdDeviation='40 21' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' edgeMode='duplicate' result='blur'%3E%3C/feGaussianBlur%3E%3CfeBlend mode='color-dodge' x='0%25' y='0%25' width='100%25' height='100%25' in='SourceGraphic' in2='blur' result='blend'%3E%3C/feBlend%3E%3CfeColorMatrix type='saturate' values='3' x='0%25' y='0%25' width='100%25' height='100%25' in='blend' result='colormatrix'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='url(%23ffflux-gradient)' filter='url(%23ffflux-filter)'%3E%3C/rect%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
