<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { animate, motion } from "motion-v";

const { variant = "primary", ...props } = defineProps<{
  variant?: "primary" | "secondary";
  class?: HTMLAttributes["class"];
}>();

const BASE_STYLES =
  "bg-primary text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors shadow-md shadow-frost-tint/30 hover:shadow-xl";

const animations = {
  transition: {
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
  },
  whilePress: { scale: 0.99 },
};
</script>

<template>
  <nuxt-link
    v-if="'to' in $attrs"
    :class="[BASE_STYLES, props.class]"
    v-bind="{ ...animations, ...$attrs }"
  >
    <slot />
  </nuxt-link>
  <motion.button
    :class="[BASE_STYLES, props.class]"
    v-bind="{ ...animations, ...$attrs }"
    v-else
  >
    <slot />
  </motion.button>
</template>
