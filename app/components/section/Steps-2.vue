<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

defineProps<{
  steps: {
    title: string;
    description: string;
    icon?: string;
  }[];
}>();

const smallerThanMd = breakpoints.smaller("md");

const arrowIcon = computed(() =>
  smallerThanMd.value ? "lucide:arrow-down" : "lucide:arrow-right"
);
</script>

<template>
  <section
    id="why-us"
    class="mb-8 md:mb-16 gradiente text-white py-16 lg:py-20"
  >
    <app-container>
      <app-heading>
        <template #chip
          ><span class="text-white/80">Как мы работаем</span></template
        >
        Процесс работы
      </app-heading>
      <div class="gap-8 row-gap-0 flex flex-col md:flex-row">
        <template v-for="(step, index) in steps" :key="index">
          <div
            class="relative text-center text-gray-900 p-8 bg-white rounded-lg w-full md:max-w-xs shadow-sm"
          >
            <div class="">
              <div
                class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 sm:w-24 sm:h-24"
              >
                <icon
                  :name="step.icon ?? 'lucide:check'"
                  class="w-12 h-12 text-primary sm:w-14 sm:h-14"
                />
              </div>
              <h6 class="mb-2 text-2xl font-extrabold text-balance">
                {{ step.title }}
              </h6>
              <p class="max-w-md mb-3 text-gray-700 sm:mx-auto">
                {{ step.description }}
              </p>
            </div>
          </div>
          <div
            v-if="index < steps.length - 1"
            class="h-24 flex items-center justify-center md:h-auto"
          >
            <icon :name="arrowIcon" class="w-8 h-8 text-white" />
          </div>
        </template>
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
