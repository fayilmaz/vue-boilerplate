<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">{{ $t("view_checkbox_title") }}</h3>
      <div class="component-section">
        <div class="component-section">
          <Checkbox disabled value="disabled" />
          <Checkbox checked disabled value="checked-disabled" />
          <Checkbox label="label" value="label" />
          <Checkbox
            customClass="border-4 border-white text-red-500"
            label="custom css"
            value="custom-css"
          />
        </div>
        <div class="component-section">
          <Checkbox size="xs" value="xsmall" />
          <Checkbox size="sm" value="small" />
          <Checkbox value="default" />
          <Checkbox size="lg" value="large" />
        </div>
        <div class="component-section">
          <Checkbox color="primary" value="primary" />
          <Checkbox color="secondary" value="secondary" />
          <Checkbox color="accent" value="accent" />
        </div>
        <div class="component-section">
          <Checkbox color="info" value="info" />
          <Checkbox color="success" value="success" />
          <Checkbox color="error" value="error" />
          <Checkbox color="warning" value="warning" />
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
