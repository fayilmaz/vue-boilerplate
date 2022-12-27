<template>
  <div class="flex justify-center">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Text Inputs</h3>
      <div class="component-section">
        <TextInput placeholder="disabled" :disabled="true" />
        <TextInput
          placeholder="Custom Class"
          customClass="border-4 border-white text-yellow-300 "
        />
      </div>
      <div class="component-section">
        <TextInput placeholder="xsmall" size="xs" />
        <TextInput placeholder="small" size="sm" />
        <TextInput placeholder="normal" />
        <TextInput placeholder="large" size="lg" />
      </div>
      <div class="component-section">
        <TextInput placeholder="primary" color="primary" />
        <TextInput placeholder="secondary" color="secondary" />
        <TextInput placeholder="accent" color="accent" />
      </div>
      <div class="component-section">
        <TextInput placeholder="info" color="info" />
        <TextInput placeholder="success" color="success" />
        <TextInput placeholder="error" color="error" />
        <TextInput placeholder="warning" color="warning" />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue";
export default {
  name: "TextInputView",
  components: { TextInput },
};
</script>
