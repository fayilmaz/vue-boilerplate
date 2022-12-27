<template>
  <button :class="[...classes]">
    {{ text }}
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ButtonVue",
  props: {
    active: {
      default: false,
      type: Boolean,
    },
    color: {
      default: "",
      type: String,
    },
    outline: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    text: {
      default: "",
      type: String,
    },
    size: {
      default: "",
      type: String,
    },
    shape: {
      default: "",
      type: String,
    },
    customClass: {
      default: "",
      type: String,
    },
  },
  setup(props) {
    const buttonComponentClasses = [
      props.customClass ? props.customClass : "",
      "btn",
      props.disabled ? "btn-disabled" : "",
      props.loading ? "loading" : "",
      props.active ? "btn-active" : "",
      props.outline ? "btn-outline" : "",
      props.color === "primary" ? "btn-primary" : "",
      props.color === "secondary" ? "btn-secondary" : "",
      props.color === "accent" ? "btn-accent" : "",
      props.color === "ghost" ? "btn-ghost" : "",
      props.color === "link" ? "btn-link" : "",
      props.color === "info" ? "btn-info" : "",
      props.color === "success" ? "btn-success" : "",
      props.color === "warning" ? "btn-warning" : "",
      props.color === "error" ? "btn-error" : "",
      props.size === "xs" ? "btn-xs" : "",
      props.size === "sm" ? "btn-sm" : "",
      props.size === "lg" ? "btn-lg" : "",
      props.shape === "circle" ? "btn-circle" : "",
      props.shape === "square" ? "btn-square" : "",
    ];

    const classes = computed(() => buttonComponentClasses);

    return { classes };
  },
};
</script>
