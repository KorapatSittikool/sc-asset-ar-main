<template>
  <div class="relative flex justify-center items-center font-eq_headline">
    <!-- <NuxtLink
      to="/"
      class="fixed flex flex-row space-x-4 top-6 left-6 rounded-lg bg-[#F37A1F] p-3 shadow-md text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </NuxtLink> -->

    <Nuxt class="w-full" />


    <Popup />
  </div>
</template>

<script>
import Modal from "~/components/Modal.vue";
import Popup from "../components/Popup.vue";

export default {
  components: {
    Modal,
    Popup,
  },
  mounted() {
    this.$modal.show("360Popup");

    setTimeout(() => {
      this.$modal.hide("360Popup");
    }, 5000)
  },
};
</script>

<style>
</style>
