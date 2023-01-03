<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">{{ $t("view_modal_title") }}</h3>
      <div class="component-section">
        <div class="component-section">
          <Modal
            title="Modal Title"
            content="Modal Content"
            closeButtonText="Close Modal"
            openButtonText="Open Modal"
            modalId="test"
            closeMethod="button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  name: "ModalView",
  components: { Modal },
};
</script>
