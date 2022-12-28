<template>
  <span v-if="label !== {} && (label.top || label.alt)">
    <label v-if="labelPosition === 'top'" class="label justify-center w-35">
      <span v-if="label.top" class="label-text w-[9rem]">{{ label.top }}</span>
      <span v-if="label.alt" class="label-text-alt w-[8rem]">{{
        label.alt
      }}</span>
    </label>
    <textarea
      :class="[...classes]"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :cols="cols"
      v-model="value"
    ></textarea>
    <label v-if="labelPosition === 'bottom'" class="label">
      <span v-if="label.top" class="label-text w-[9rem]">{{ label.top }}</span>
      <span v-if="label.alt" class="label-text-alt w-[8rem]">
        {{ label.alt }}
      </span>
    </label>
  </span>

  <textarea
    v-else
    :class="[...classes]"
    :required="required"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    :cols="cols"
    v-model="value"
  ></textarea>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "TextInput",
  props: {
    bordered: {
      default: true,
      type: Boolean,
    },
    disabled: {
      default: () => false,
      type: Boolean,
    },
    required: {
      default: () => false,
      type: Boolean,
    },
    color: {
      default: "primary",
      type: String,
    },
    content: {
      default: "",
      type: String,
    },
    ghost: {
      default: false,
      type: Boolean,
    },
    width: {
      default: "",
      type: String,
    },
    height: {
      default: "",
      type: String,
    },
    label: {
      default: () => {
        return {};
      },
      type: Object,
    },
    labelPosition: {
      default: "",
      type: String,
    },
    customClass: {
      default: "",
      type: String,
    },
    placeHolder: {
      default: () => "",
      type: String,
    },
    rows: {
      default: () => "0",
      type: String,
    },
    cols: {
      default: () => "0",
      type: String,
    },
  },
  setup(props) {
    const textAreaComponentClasses = [
      props.customClass ? props.customClass : "",
      "textarea",
      props.disabled ? "" : "",
      props.bordered ? "textarea-bordered" : "",
      props.ghost ? "textarea-ghost" : "",
      props.color === "primary" ? "textarea-primary" : "",
      props.color === "secondary" ? "textarea-secondary" : "",
      props.color === "accent" ? "textarea-accent" : "",
      props.color === "info" ? "textarea-info" : "",
      props.color === "success" ? "textarea-success" : "",
      props.color === "warning" ? "textarea-warning" : "",
      props.color === "error" ? "textarea-error" : "",
    ];

    const value = ref("");
    const classes = computed(() => textAreaComponentClasses);
    return { classes, value };
  },
};
</script>
