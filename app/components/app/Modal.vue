<script setup lang="ts">
import { ref } from "vue";
import { motion, AnimatePresence } from "motion-v";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

const open = ref(false);
const modal = ref<HTMLElement | null>(null);

const { activate, deactivate } = useFocusTrap(modal, { immediate: false });

const openModal = () => {
  open.value = true;
  nextTick(() => {
    activate();
  });
};

const closeModal = () => {
  open.value = false;
  deactivate();
};

onUnmounted(() => {
  deactivate();
});
</script>

<template>
  <slot name="trigger" :openModal="openModal" />

  <Teleport id="modal" to="body">
    <AnimatePresence :initial="false">
      <motion.div
        v-if="open"
        ref="modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-graphite-navy/50 px-4"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0, scale: 1.03 }"
        :transition="{ duration: 0.2, ease: 'easeInOut' }"
        @click.self="closeModal"
      >
        <motion.div
          v-if="open"
          class="modal relative w-full max-w-lg rounded-lg bg-white p-6 pt-0 shadow-lg sm:p-8 max-md:max-h-[90svh] overflow-y-auto"
          :initial="{ opacity: 0, scale: 0.95 }"
          :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.95 }"
          :transition="{ duration: 0.3, ease: 'easeInOut' }"
        >
          <div class="flex items-start justify-between py-4 sticky top-0 bg-white/80 backdrop-blur">
            <h3 class="text-xl font-semibold text-graphite-navy">
              <slot name="title" />
            </h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 self-end"
            >
              <Icon name="i-heroicons-x-mark" class="h-6 w-6" />
            </button>
          </div>
          <div class="mt-4 overflow-y-auto px-1">
            <slot name="content" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>
