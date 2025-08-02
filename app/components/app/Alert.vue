<script setup lang="ts">
import { motion } from "motion-v";

const props = defineProps<{
  type: "success" | "error";
}>();

const config = computed(() => {
  if (props.type === "success") {
    return {
      bgClass: "bg-green-100 border-green-400 text-green-800",
      icon: "lucide:check-circle",
    };
  }
  return {
    bgClass: "bg-red-100 border-red-400 text-red-800",
    icon: "lucide:alert-circle",
  };
});
</script>

<template>
  <motion.div
    :class="[
      `p-4 border rounded-lg flex items-start space-x-3`,
      config.bgClass,
    ]"
    :initial="{ opacity: 0, y: -20 }"
    :animate="{ opacity: 1, y: 0 }"
    :exit="{ opacity: 0, y: -20 }"
    :transition="{ duration: 0.4, ease: 'easeInOut' }"
  >
    <icon :name="config.icon" class="w-6 h-6 flex-shrink-0 mt-0.5" />
    <div class="flex-1">
      <slot />
    </div>
  </motion.div>
</template>
