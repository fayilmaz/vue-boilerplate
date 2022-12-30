<template>
  <div class="mt-2 mb-2">
    <p class="text-red-500 text-left">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ErrorDisplay",
  props: {
    error: {
      default: "",
      type: String,
    },
  },
};
</script>
