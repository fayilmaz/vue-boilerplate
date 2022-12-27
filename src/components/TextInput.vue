<template>
  <input
    :class="[...classes]"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    v-model="value"
    type="text"
  />
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
export default {
  name: "TextInput",
  props: {
    bordered: {
      default: true,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    required: {
      default: false,
      type: Boolean,
    },
    color: {
      default: "",
      type: String,
    },
    size: {
      default: "",
      type: String,
    },
    label: {
      default: "",
      type: String,
    },
    customClass: {
      default: "",
      type: String,
    },
    placeHolder: {
      default: "",
      type: String,
    },
  },
  setup(props) {
    const textInputComponentClasses = [
      props.customClass ? props.customClass : "",
      "input",
      props.disabled ? "" : "",
      props.bordered ? "input-bordered" : "",
      props.color === "primary" ? "input-primary" : "",
      props.color === "secondary" ? "input-secondary" : "",
      props.color === "accent" ? "input-accent" : "",
      props.color === "info" ? "input-info" : "",
      props.color === "success" ? "input-success" : "",
      props.color === "warning" ? "input-warning" : "",
      props.color === "error" ? "input-error" : "",
      props.size === "xs" ? "input-xs" : "",
      props.size === "sm" ? "input-sm" : "",
      props.size === "lg" ? "input-lg" : "",
    ];

    const classes = computed(() => textInputComponentClasses);
    const value = ref("");
    return { textInputComponentClasses, classes, value };
  },
};
</script>

<style></style>
