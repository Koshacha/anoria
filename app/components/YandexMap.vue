<script setup lang="ts">
const container = useTemplateRef("container");
const scriptSrc = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A64f2edb5d4f495ea19f13c7bdead6688d189b571fb2fa1c21a5786ffa71411bf&amp;width=520&amp;height=343&amp;lang=ru_RU&amp;scroll=true&amp;id=map-container";

onMounted(() => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    container.value!.appendChild(script);
})

</script>

<template>
  <div class="w-full  md:h-60 rounded-lg overflow-hidden" ref="container"></div>
</template>
