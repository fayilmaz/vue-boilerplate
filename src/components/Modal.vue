<template>
  <div v-if="openButtonDisabled">
    <label :for="modalId" :id="`${modalId}-trigger`" class="btn hidden"></label>
    <input type="checkbox" :id="modalId" class="modal-toggle" />
    <div v-if="openButtonDisabled" class="modal">
      <div class="modal-box relative">
        <label
          :for="modalId"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="handleAfterModalClose"
          >X</label
        >
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <p class="py-4">{{ content }}</p>
      </div>
    </div>
    <label :for="modalId" class="btn" :class="{ hidden: openButtonDisabled }">
      {{ openButtonText }}
    </label>
    <input type="checkbox" :id="modalId" class="modal-toggle" />
  </div>

  <label v-if="openButtonText" :for="modalId" class="btn">
    {{ openButtonText }}
  </label>
  <input type="checkbox" :id="modalId" class="modal-toggle" />

  <div v-if="closeMethod === 'button'" class="modal">
    <div class="modal-box">
      <h3 v-if="title" class="font-bold text-lg">
        {{ title }}
      </h3>
      <p v-if="content" class="py-4">
        {{ content }}
      </p>
      <div class="modal-action">
        <label v-if="closeButtonText" :for="modalId" class="btn">
          {{ closeButtonText }}
        </label>
      </div>
    </div>
  </div>

  <label
    v-else-if="closeMethod === 'outsideClick'"
    :for="modalId"
    class="modal cursor-pointer"
  >
    <label class="modal-box relative" :for="modalId">
      <h3 v-if="title" class="text-lg font-bold">{{ title }}</h3>
      <p v-if="content" class="py-4">
        {{ content }}
      </p>
    </label>
  </label>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    title: {
      default: "",
      type: String,
    },
    content: {
      default: "",
      type: String,
    },
    closeButtonText: {
      default: "",
      type: String,
    },
    openButtonText: {
      default: "",
      type: String,
    },
    modalId: {
      default: "",
      type: String,
    },
    closeMethod: {
      default: "button",
      type: String,
    },
    openButtonDisabled: {
      default: false,
      type: Boolean,
    },
    successCloseTrigger: {
      default: null,
      type: Function,
    },
  },
  setup(props) {
    const handleAfterModalClose = () => {
      if (props.successCloseTrigger) return props.successCloseTrigger();
      return () => {};
    };
    return { handleAfterModalClose };
  },
};
</script>
