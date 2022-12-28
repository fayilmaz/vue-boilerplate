<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Radios</h3>
      <div class="component-section">
        <div class="component-section">
          <Radio disabled value="disabled" />
          <Radio checked disabled value="checked-disabled" />
          <Radio label="label" value="label" />
          <Radio
            customClass="border-4 border-white text-red-500"
            label="custom css"
            value="custom css"
          />
        </div>
        <div class="component-section">
          <Radio size="xs" value="xsmall" />
          <Radio size="sm" value="small" />
          <Radio value="default" />
          <Radio size="lg" value="large" />
        </div>
        <div class="component-section">
          <Radio color="primary" value="primary" />
          <Radio color="secondary" value="secondary" />
          <Radio color="accent" value="accent" />
        </div>
        <div class="component-section">
          <Radio color="info" value="info" />
          <Radio color="success" value="success" />
          <Radio color="error" value="error" />
          <Radio color="warning" value="warning" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from "../components/Radio.vue";
export default {
  name: "RadioView",
  components: { Radio },
};
</script>
