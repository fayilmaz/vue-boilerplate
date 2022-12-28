<template>
  <div
    v-if="
      label &&
      label !== {} &&
      (label.message || label.topRight || label.bottomLeft || label.bottomRight)
    "
    class="form-control w-full max-w-xs ml-0"
  >
    <label class="label">
      <span v-if="label.message" class="label-text mr-10">{{
        label.message
      }}</span>
      <span v-if="label.topRight" class="label-text-alt">{{
        label.topRight
      }}</span>
    </label>
    <select :class="[...classes]" v-model="selectValue">
      <option v-if="placeholder" disabled selected :value="placeholder">
        {{ placeholder }}
      </option>
      <option v-for="(option, i) in options" :key="i" :value="option">
        {{ option }}
      </option>
    </select>
    <label
      v-if="label !== {} && (label.bottomLeft || label.bottomRight)"
      class="label"
    >
      <span v-if="label.bottomLeft" class="label-text-alt">{{
        label.bottomLeft
      }}</span>
      <span v-if="label.bottomRight" class="label-text-alt">{{
        label.bottomRight
      }}</span>
    </label>
  </div>

  <div v-else class="form-control w-full max-w-xs">
    <select
      v-if="placeholder"
      :class="[...classes]"
      :disabled="disabled"
      v-model="selectValue"
    >
      <option disabled selected :value="placeholder">{{ placeholder }}</option>
      <option v-for="(option, i) in options" :key="i" :value="option">
        {{ option }}
      </option>
    </select>
    <select
      v-else-if="options.length"
      :class="[...classes]"
      :disabled="disabled"
      v-model="selectValue"
    >
      <option v-for="(option, i) in options" :key="i" :value="option">
        {{ option }}
      </option>
    </select>
    <select
      v-else
      class="select w-full max-w-xs"
      :disabled="disabled"
      v-model="selectValue"
    ></select>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "SelectComponent",
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
      default: "select-md",
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
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    checked: {
      default: false,
      type: Boolean,
    },
    bordered: {
      default: true,
      type: Boolean,
    },
    name: {
      default: "select",
      type: String,
    },
    placeholder: {
      default: "",
      type: String,
    },
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const selectComponentClasses = [
      props.customClass ? props.customClass : "",
      "select",
      props.color === "primary" ? "select-primary" : "",
      props.color === "secondary" ? "select-secondary" : "",
      props.color === "accent" ? "select-accent" : "",
      props.color === "info" ? "select-info" : "",
      props.color === "success" ? "select-success" : "",
      props.color === "warning" ? "select-warning" : "",
      props.color === "error" ? "select-error" : "",
      props.color === "ghost" ? "select-ghost" : "",
      props.size === "xs" ? "select-xs" : "",
      props.size === "sm" ? "select-sm" : "",
      props.size === "md" ? "select-md" : "",
      props.size === "lg" ? "select-lg" : "",
      props.bordered ? "select-bordered" : "",
    ];

    const classes = computed(() => selectComponentClasses);
    const selectValue = ref(props.placeholder ? props.placeholder : "");

    return {
      classes,
      selectValue,
    };
  },
};
</script>
