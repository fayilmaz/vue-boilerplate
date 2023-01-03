<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">{{ $t("view_button_title") }}</h3>
      <div class="component-section">
        <div class="component-section">
          <Button text="disabled" disabled />
          <Button text="normal" />
          <Button text="active" active />
          <Button
            text="custom class"
            :active="true"
            customClass="border-4 border-white text-red-500"
          />
        </div>
        <div class="component-section">
          <Button text="xsmall" size="xs" />
          <Button text="small" size="sm" />
          <Button text="normal" />
          <Button text="large" size="lg" />
        </div>
        <div class="component-section">
          <Button text="primary" color="primary" />
          <Button text="secondary" color="secondary" />
          <Button text="accent" color="accent" />
          <Button text="ghost" color="ghost" />
          <Button text="link" color="link" />
        </div>
        <div class="component-section">
          <Button text="info" color="info" />
          <Button text="success" color="success" />
          <Button text="error" color="error" />
          <Button text="warning" color="warning" />
        </div>
        <div class="component-section">
          <Button text="info" color="info" outline />
          <Button text="success" color="success" outline />
          <Button text="error" color="error" outline />
          <Button text="warning" color="warning" outline />
        </div>
        <div class="component-section">
          <Button text="loading" loading />
        </div>
      </div>
      <div class="component-section">
        <Button text="X" shape="circle" />
        <Button text="X" shape="square" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  name: "ButtonsView",
  components: { Button },
};
</script>
