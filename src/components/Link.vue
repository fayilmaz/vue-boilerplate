<template>
  <a :class="[...classes]" :href="href">{{ content }} </a>
</template>

<script>
import { computed } from "vue";
export default {
  name: "LinkComponent",
  props: {
    color: {
      default: "",
      type: String,
    },
    content: {
      default: "link",
      type: String,
    },
    href: {
      default: "",
      type: String,
    },
    underline: {
      default: false,
      type: Boolean,
    },
    customClass: {
      default: "",
      type: String,
    },
  },
  setup(props) {
    const linkComponentClasses = [
      props.customClass ? props.customClass : "",
      "link",
      props.underline ? "" : "link-hover",
      props.color === "primary" ? "link-primary" : "",
      props.color === "secondary" ? "link-secondary" : "",
      props.color === "accent" ? "link-accent" : "",
      props.color === "info" ? "link-info" : "",
      props.color === "success" ? "link-success" : "",
      props.color === "warning" ? "link-warning" : "",
      props.color === "error" ? "link-error" : "",
    ];

    const classes = computed(() => linkComponentClasses);

    return { classes };
  },
};
</script>
