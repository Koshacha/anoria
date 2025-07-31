<script setup lang="ts"></script>

<template>
  <section
    class="my-24"
    :class="{
      'text-center': !$slots.right,
      'grid grid-cols-1 md:grid-cols-2 gap-12': $slots.right,
    }"
  >
    <div>
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-relaxed max-w-3xl mx-auto"
      >
        <slot name="title" />
      </h1>
      <p class="text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
        <slot name="description" />
      </p>
      <slot name="cta" />
    </div>
    <div v-if="$slots.right">
      <div class="border border-gray-200 rounded-lg">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
