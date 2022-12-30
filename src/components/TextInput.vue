<script setup>
import { computed, defineProps } from "@vue/runtime-core";
import { toRef } from "vue";
import { useField } from "vee-validate";
import ErrorDisplay from "./ErrorDisplay.vue";

const name = toRef(props, "name");

const props = defineProps({
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
    default: () => {},
    type: Object,
  },
  customClass: {
    default: "",
    type: String,
  },
  placeholder: {
    default: "",
    type: String,
  },
  inputType: {
    default: "text",
    type: String,
  },
  value: {
    default: "",
    type: String,
  },
  name: {
    default: "",
    type: String,
  },
});

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

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(name, undefined, {
  validateOnValueUpdate: false,
  validateOnMount: false,
});
</script>

<template>
  <span
    v-if="
      label &&
      label !== {} &&
      (label.message || label.topRight || label.bottomLeft || label.bottomRight)
    "
    class="form-control w-full max-w-xs ml-0"
  >
    <label v-if="label.message || label.topRight" class="label">
      <span v-if="label.message" class="label-text">{{ label.message }}</span>
      <span v-if="label.topRight" class="label-text-alt">
        {{ label.topRight }}
      </span>
    </label>
    <input
      :class="classes"
      :name="name"
      :id="name"
      :value="inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleChange"
      :required="required"
      :type="inputType"
    />
    <label v-if="label.bottomLeft || label.bottomRight" class="label">
      <span v-if="label.bottomLeft" class="label-text-alt">
        {{ label.bottomLeft }}
      </span>
      <span v-if="label.bottomRight" class="label-text-alt">
        {{ label.bottomRight }}
      </span>
    </label>
    <ErrorDisplay v-show="errorMessage" :error="errorMessage" />
  </span>
  <span v-else>
    <input
      :class="classes"
      :name="name"
      :id="name"
      :value="inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleChange"
      :required="required"
      :type="inputType"
    />
    <ErrorDisplay v-show="errorMessage" :error="errorMessage" />
  </span>
</template>
