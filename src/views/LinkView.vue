<template>
  <div class="flex justify-center view-section">
    <div class="border-2 w-100 mt-5">
      <h3 class="text-xl mt-3">{{ $t("view_link_title") }}</h3>
      <div class="component-section">
        <div class="component-section">
          <Link content="default" />
          <Link underline content="underlined" />
          <Link
            customClass="text-red-500 text-xl font-mono font-bold"
            content="custom class"
          />
        </div>
        <div class="component-section">
          <Link color="primary" content="primary" />
          <Link color="secondary" content="secondary" />
          <Link color="accent" content="accent" />
        </div>
        <div class="component-section">
          <Link color="info" content="info" />
          <Link color="success" content="success" />
          <Link color="error" content="error" />
          <Link color="warning" content="warning" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from "../components/Link.vue";
export default {
  name: "LinkView",
  components: { Link },
};
</script>
