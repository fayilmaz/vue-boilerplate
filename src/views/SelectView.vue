<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">Selects</h3>
      <div class="component-section">
        <div class="component-section">
          <Select disabled :options="options" placeholder="disabled" />
          <Select
            :options="options"
            :bordered="false"
            placeholder="non bordered"
          />
          <Select
            customClass="border-4 border-white text-red-500 mt-30"
            placeholder="custom css"
            :options="options"
          />
          <Select
            placeholder="labeled"
            :label="{
              message: 'label message',
              topRight: 'alt message',
              bottomLeft: 'alt message',
              bottomRight: 'alt message',
            }"
            :options="options"
          />
        </div>
        <div class="component-section">
          <Select size="xs" :options="options" placeholder="xsmall" />
          <Select size="sm" :options="options" placeholder="small" />
          <Select :options="options" placeholder="default" />
          <Select size="lg" :options="options" placeholder="large" />
        </div>
        <div class="component-section">
          <Select color="primary" :options="options" placeholder="primary" />
          <Select
            color="secondary"
            :options="options"
            placeholder="secondary"
          />
          <Select color="accent" :options="options" placeholder="accent" />
          <Select
            color="ghost"
            :options="options"
            placeholder="ghost"
            :bordered="false"
          />
        </div>
        <div class="component-section">
          <Select color="info" :options="options" placeholder="info" />
          <Select color="success" :options="options" placeholder="success" />
          <Select color="error" :options="options" placeholder="error" />
          <Select color="warning" :options="options" placeholder="warning" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "../components/Select.vue";
export default {
  name: "SelectView",
  components: { Select },
  setup() {
    const options = [
      "select 1",
      "select 2",
      "select 3",
      "select 4",
      "select 5",
      "select 6",
      "select 7",
      "select 8",
      "select 9",
      "select 10",
    ];

    return { options };
  },
};
</script>
