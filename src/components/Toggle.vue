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
import { computed, ref } from "vue";
export default {
  name: "ToggleComponent",
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
      default: "toggle-md",
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
    const ToggleComponentClasses = [
      props.customClass ? props.customClass : "",
      "toggle",
      props.disabled ? "" : "",
      props.color === "primary" ? "toggle-primary" : "",
      props.color === "secondary" ? "toggle-secondary" : "",
      props.color === "accent" ? "toggle-accent" : "",
      props.color === "info" ? "toggle-info" : "",
      props.color === "success" ? "toggle-success" : "",
      props.color === "warning" ? "toggle-warning" : "",
      props.color === "error" ? "toggle-error" : "",
      props.size === "xs" ? "toggle-xs" : "",
      props.size === "sm" ? "toggle-sm" : "",
      props.size === "md" ? "toggle-md" : "",
      props.size === "lg" ? "toggle-lg" : "",
    ];

    const classes = computed(() => ToggleComponentClasses);
    const isChecked = ref(props.checked ? true : false);

    return {
      classes,
      isChecked,
    };
  },
};
</script>
