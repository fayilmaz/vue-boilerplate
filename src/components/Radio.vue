<template>
  <span v-if="checked">
    <label v-if="label" class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        type="radio"
        :class="[...classes]"
        :name="name"
        :disabled="disabled"
        checked="checked"
        :required="required"
        :value="value"
        :id="id"
        v-model="staticChecked"
      />
    </label>
    <input
      v-else
      type="radio"
      :class="[...classes]"
      :name="name"
      :disabled="disabled"
      checked="checked"
      :required="required"
      :value="value"
      :id="id"
      v-model="staticChecked"
    />
  </span>
  <span v-else>
    <label v-if="label" class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        type="radio"
        :class="[...classes]"
        :name="name"
        :disabled="disabled"
        :required="required"
        :value="value"
        :id="id"
        v-model="isChecked"
      />
    </label>
    <input
      v-else
      type="radio"
      :class="[...classes]"
      :name="name"
      :disabled="disabled"
      :required="required"
      :value="value"
      :id="id"
      v-model="isChecked"
    />
  </span>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "RadioComponent",
  props: {
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
      default: "radio-md",
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
    value: {
      type: String,
      default: "",
    },
    checked: {
      default: false,
      type: Boolean,
    },
    name: {
      default: "radio",
      type: String,
    },
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const radioComponentClasses = [
      props.customClass ? props.customClass : "",
      "radio",
      props.disabled ? "" : "",
      props.color === "primary" ? "radio-primary" : "",
      props.color === "secondary" ? "radio-secondary" : "",
      props.color === "accent" ? "radio-accent" : "",
      props.color === "info" ? "radio-info" : "",
      props.color === "success" ? "radio-success" : "",
      props.color === "warning" ? "radio-warning" : "",
      props.color === "error" ? "radio-error" : "",
      props.size === "xs" ? "radio-xs" : "",
      props.size === "sm" ? "radio-sm" : "",
      props.size === "md" ? "radio-md" : "",
      props.size === "lg" ? "radio-lg" : "",
    ];

    const classes = computed(() => radioComponentClasses);
    const staticChecked = ref(true);
    const isChecked = ref(false);

    return {
      classes,
      isChecked,
      staticChecked,
    };
  },
};
</script>
