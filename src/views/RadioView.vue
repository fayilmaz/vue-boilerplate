<template>
  <div class="flex justify-center">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Radios</h3>
      <div class="component-section">
        <div class="component-section">
          <Radio disabled />
          <Radio checked disabled />
          <Radio label="label" />
          <Radio
            customClass="border-4 border-white text-red-500"
            label="custom css"
          />
        </div>
        <div class="component-section">
          <Radio size="xs" />
          <Radio size="sm" />
          <Radio />
          <Radio size="lg" />
        </div>
        <div class="component-section">
          <Radio color="primary" />
          <Radio color="secondary" />
          <Radio color="accent" />
        </div>
        <div class="component-section">
          <Radio color="info" />
          <Radio color="success" />
          <Radio color="error" />
          <Radio color="warning" />
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
