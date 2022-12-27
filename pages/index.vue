<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen text-white space-y-4 font-eq_headline"
  >
    <!-- <img src="/logo.png" class="py-5 px-10 object-contain object-center">

    <NuxtLink
      v-for="(page, i) in pages"
      :key="i"
      :to="page.to"
      class="rounded-lg p-4 bg-[#EE7623] shadow-sm drop-shadow-sm flex items-center justify-center space-x-4 w-60"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >
      <span>{{ page.title }}</span>
    </NuxtLink> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      pages: [],
    };
  },
};
</script>
