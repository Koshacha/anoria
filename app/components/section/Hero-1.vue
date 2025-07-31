<template>
  <section class="text-center my-24">
    <h1
      class="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-relaxed max-w-3xl mx-auto"
    >
      <slot name="title" />
    </h1>
    <p class="text-2xl text-gray-600 max-w-2xl mx-auto">
      <slot name="description" />
    </p>
  </section>
</template>
