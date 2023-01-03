<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">{{ $t("view_text_input_title") }}</h3>
      <div class="component-section">
        <TextInput placeholder="disabled" disabled />
        <TextInput
          placeholder="custom class"
          customClass="border-4 border-white text-yellow-300"
        />
      </div>
      <div class="component-section">
        <TextInput
          placeholder="labeled"
          :label="{
            message: 'label message',
            topRight: 'alt message',
            bottomLeft: 'alt message',
            bottomRight: 'alt message',
          }"
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
