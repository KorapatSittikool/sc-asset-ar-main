<template>
  <VueModal
    name="360Popup"
    width="320"
    :shiftY="0.4"
    :adaptive="true"
    :styles="{
      overflow: 'visible',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    }"
    class="z-50"
    @click="$modal.hide('360Popup')"
  >
    <div class="bg-transparent" @click="$modal.hide('360Popup')">
      <div class="flex justify-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-white cursor-pointer absolute right-3 top-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="$modal.hide('360Popup')"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
        <img
          src="~/assets/360_popup.jpg"
          class="h-[240px] md:h-[320px] object-contain object-center rounded-full opacity-[0.85]"
        />
      </div>
    </div>
  </VueModal>
</template>

<script>
export default {
  name: "Popup",
};
</script>

<style></style>
