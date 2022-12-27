<template>
  <div class="flex justify-center">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Checkboxes</h3>
      <div class="component-section">
        <div class="component-section">
          <Checkbox disabled />
          <Checkbox checked disabled />
          <Checkbox label="label" />
          <Checkbox
            customClass="border-4 border-white text-red-500"
            label="custom css"
          />
        </div>
        <div class="component-section">
          <Checkbox size="xs" />
          <Checkbox size="sm" />
          <Checkbox />
          <Checkbox size="lg" />
        </div>
        <div class="component-section">
          <Checkbox color="primary" />
          <Checkbox color="secondary" />
          <Checkbox color="accent" />
        </div>
        <div class="component-section">
          <Checkbox color="info" />
          <Checkbox color="success" />
          <Checkbox color="error" />
          <Checkbox color="warning" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../components/Checkbox.vue";
export default {
  name: "CheckboxView",
  components: { Checkbox },
};
</script>
