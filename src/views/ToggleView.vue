<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Toggles</h3>
      <div class="component-section">
        <div class="component-section">
          <Toggle disabled value="disabled" />
          <Toggle checked disabled value="checked-disabled" />
          <Toggle label="label" value="label" />
          <Toggle
            customClass="border-4 border-white text-red-500"
            label="custom css"
            value="custom-css"
          />
        </div>
        <div class="component-section">
          <Toggle size="xs" value="xsmall" />
          <Toggle size="sm" value="small" />
          <Toggle value="default" />
          <Toggle size="lg" value="large" />
        </div>
        <div class="component-section">
          <Toggle color="primary" value="primary" checked />
          <Toggle color="secondary" value="secondary" checked />
          <Toggle color="accent" value="accent" checked />
        </div>
        <div class="component-section">
          <Toggle color="info" value="info" checked />
          <Toggle color="success" value="success" checked />
          <Toggle color="error" value="error" checked />
          <Toggle color="warning" value="warning" checked />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "../components/Toggle.vue";
export default {
  name: "ToggleView",
  components: { Toggle },
};
</script>
