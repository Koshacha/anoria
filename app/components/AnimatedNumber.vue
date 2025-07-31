<script setup lang="ts">
import {
  animate,
  useMotionValue,
  useTransform,
  RowValue,
  type AnimationPlaybackControlsWithThen,
} from "motion-v";

const { from, to } = defineProps<{
  from: number;
  to: number;
}>();

const count = useMotionValue(from);
const rounded = useTransform(() => Math.round(count.get()));

let controls: AnimationPlaybackControlsWithThen;

onMounted(() => {
  controls = animate(count, to, { duration: 2 });
});

onUnmounted(() => {
  controls?.stop();
});

watch(
  () => to,
  () => {
    controls?.stop();
    controls = animate(count, to, { duration: 2 });
  }
);
</script>

<template>
  <RowValue :value="rounded" />
</template>
