<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Text Areas</h3>
      <div class="component-section">
        <TextArea placeholder="disabled" disabled />
        <TextArea
          placeholder="custom class"
          customClass="border-4 border-white text-yellow-300"
        />
      </div>
      <div class="component-section form-control">
        <TextArea
          :label="{ top: 'top label', alt: 'alt label' }"
          labelPosition="top"
          placeholder="labeled"
          size="xs"
        />
      </div>
      <div class="component-section">
        <TextArea placeholder="2 rows 3 cols" rows="2" cols="10" />
        <TextArea placeholder="3 rows 14 cols" rows="3" cols="14" />
        <TextArea placeholder="5 rows 18 cols" rows="5" cols="18" />
        <TextArea placeholder="6 rows 20 cols" rows="6" cols="20" />
      </div>
      <div class="component-section">
        <TextArea placeholder="primary" color="primary" />
        <TextArea placeholder="secondary" color="secondary" />
        <TextArea placeholder="accent" color="accent" />
      </div>
      <div class="component-section">
        <TextArea placeholder="info" color="info" />
        <TextArea placeholder="success" color="success" />
        <TextArea placeholder="error" color="error" />
        <TextArea placeholder="warning" color="warning" />
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "../components/TextArea.vue";
export default {
  name: "TextAreaView",
  components: { TextArea },
};
</script>
