<template>
  <div class="max-w-2xl mx-auto mb-16 text-center">
    <span
      v-if="$slots.chip"
      class="font-bold tracking-wider uppercase text-primary"
    >
      <slot name="chip" />
    </span>
    <h2 class="text-4xl font-bold lg:text-5xl" v-bind="$attrs">
      <slot />
    </h2>
    <p
      v-if="$slots.subtitle"
      class="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
    >
      <slot name="subtitle" />
    </p>
  </div>
</template>
