<script setup lang="ts">
const { contacts } = useAppConfig();
</script>

<template>
  <section class="max-w-6xl mx-auto">
    <app-heading>
      <template #subtitle>Хотите обсудить ваш кейс?</template>
      Оставить заявку
    </app-heading>

    <div class="rounded-2xl p-8 border border-gray-200 relative">
      <div
        class="arrow absolute top-0 right-0 translate-x-20 -translate-y-10 w-96 h-96"
      >
        {{ " " }}
      </div>
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="contacts-card rounded-2xl shadow-sm p-8 text-white">
          <h2 class="text-2xl font-bold mb-6">Контакты для связи</h2>

          <div class="space-y-6">
            <div class="flex items-center">
              <div class="w-6 h-6 mr-4 flex-shrink-0">
                <icon name="lucide:phone" class="w-6 h-6" />
              </div>
              <span class="text-lg">{{ contacts.phone }}</span>
            </div>

            <div class="flex items-center">
              <div class="w-6 h-6 mr-4 flex-shrink-0">
                <icon name="lucide:mail" class="w-6 h-6" />
              </div>
              <span class="text-lg">{{ contacts.email }}</span>
            </div>

            <div class="flex items-start">
              <div class="w-6 h-6 mr-4 flex-shrink-0 mt-1">
                <icon name="lucide:map" class="w-6 h-6" />
              </div>
              <div>
                <span class="text-lg">{{ contacts.address }}</span>
              </div>
            </div>
          </div>
        </div>

        <form-contact />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-card {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700'%3E%3Cdefs%3E%3ClinearGradient gradientTransform='rotate(150, 0.5, 0.5)' x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='ffflux-gradient'%3E%3Cstop stop-color='hsl(216, 100%25, 72%25)' stop-opacity='1' offset='0%25'%3E%3C/stop%3E%3Cstop stop-color='hsl(227, 100%25, 50%25)' stop-opacity='1' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter id='ffflux-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005 0.003' numOctaves='2' seed='5' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeGaussianBlur stdDeviation='20 0' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' edgeMode='duplicate' result='blur'%3E%3C/feGaussianBlur%3E%3CfeBlend mode='color-burn' x='0%25' y='0%25' width='100%25' height='100%25' in='SourceGraphic' in2='blur' result='blend'%3E%3C/feBlend%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='url(%23ffflux-gradient)' filter='url(%23ffflux-filter)'%3E%3C/rect%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.arrow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 800 800'%3E%3Cg stroke-width='6' stroke='hsl(227, 71%25, 57%25)' fill='none' stroke-linecap='round' stroke-linejoin='round' transform='matrix(1,0,0,1,190,-283)'%3E%3Cpath d='M208.6490020751953 290.5Q841.6490020751953 374.5 427.6490020751953 509.5 ' marker-end='url(%23SvgjsMarker1764)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmarker markerWidth='10' markerHeight='10' refX='5' refY='5' viewBox='0 0 10 10' orient='auto' id='SvgjsMarker1764'%3E%3Cpolyline points='0,5 5,2.5 0,0' fill='none' stroke-width='1.6666666666666667' stroke='hsl(227, 71%25, 57%25)' stroke-linecap='round' transform='matrix(1,0,0,1,1.6666666666666667,2.5)' stroke-linejoin='round'%3E%3C/polyline%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}
</style>
