<script lang="ts" setup>
const props = defineProps<{
  width: number;
  height: number;
  strokeColor: string;
  strokeWidth: number;
}>();

const strokeShapeStyle = computed(() => {
  return `fill: none; stroke-width: ${props.strokeWidth}; stroke: ${props.strokeColor}; stroke-opacity: 1;`;
});
</script>

<template>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg"
    viewBox="-8 -8 272 272" style="-webkit-print-color-adjust: exact;" fill="none" version="1.1">
    <g rx="0" ry="0">
      <g>
        <g class="fills">
          <path rx="0" ry="0" d="M0.000,251.124L256.000,251.124L0.000,251.124Z" />
        </g>
        <g class="strokes">
          <g class="stroke-shape">
            <path rx="0" ry="0" d="M0.000,251.124L256.000,251.124L0.000,251.124Z" :style="strokeShapeStyle" />
          </g>
        </g>
      </g>
      <g>
        <g class="fills">
          <path rx="0" ry="0" d="M248.006,0.000L248.006,256.000L248.006,0.000Z" />
        </g>
        <g class="strokes">
          <g class="stroke-shape">
            <path rx="0" ry="0" d="M248.006,0.000L248.006,256.000L248.006,0.000Z" :style="strokeShapeStyle" />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>