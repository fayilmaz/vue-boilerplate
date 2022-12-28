<template>
  <span v-if="checked">
    <label v-if="label" class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        type="checkbox"
        :class="[...classes]"
        :disabled="disabled"
        checked="checked"
        :required="required"
        :value="value"
        :id="id"
        v-model="isChecked"
      />
    </label>
    <input
      v-else
      type="checkbox"
      :class="[...classes]"
      :disabled="disabled"
      checked="checked"
      :required="required"
      :value="value"
      :id="id"
      v-model="isChecked"
    />
  </span>
  <span v-else>
    <label v-if="label" class="label cursor-pointer">
      <span class="label-text">{{ label }}</span>
      <input
        type="checkbox"
        :class="[...classes]"
        :disabled="disabled"
        :required="required"
        :value="value ? value : label ? label : ''"
        :id="id"
        v-model="isChecked"
      />
    </label>
    <input
      v-else
      type="checkbox"
      :class="[...classes]"
      :disabled="disabled"
      :required="required"
      :value="value ? value : label ? label : ''"
      :id="id"
      v-model="isChecked"
    />
  </span>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
export default {
  name: "CheckboxComponent",
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
      default: "checkbox-md",
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
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const checkboxInputComponentClasses = [
      props.customClass ? props.customClass : "",
      "checkbox",
      props.disabled ? "" : "",
      props.color === "primary" ? "checkbox-primary" : "",
      props.color === "secondary" ? "checkbox-secondary" : "",
      props.color === "accent" ? "checkbox-accent" : "",
      props.color === "info" ? "checkbox-info" : "",
      props.color === "success" ? "checkbox-success" : "",
      props.color === "warning" ? "checkbox-warning" : "",
      props.color === "error" ? "checkbox-error" : "",
      props.size === "xs" ? "checkbox-xs" : "",
      props.size === "sm" ? "checkbox-sm" : "",
      props.size === "md" ? "checkbox-md" : "",
      props.size === "lg" ? "checkbox-lg" : "",
    ];

    const classes = computed(() => checkboxInputComponentClasses);
    const isChecked = ref(props.checked ? true : false);

    return {
      classes,
      isChecked,
    };
  },
};
</script>
