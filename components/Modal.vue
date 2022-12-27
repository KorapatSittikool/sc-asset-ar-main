<template>
  <div class="fixed top-6 left-4">
    <div
      class="flex flex-row space-x-4 rounded-lg bg-[#F37A1F] p-3 shadow-md text-white cursor-pointer"
      @click="showModal"
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
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    <VueModal
      name="modal"
      width="90%"
      :shiftY="0.1"
      :adaptive="true"
      :styles="{ overflow: 'visible', backgroundColor: 'white' }"
      class="z-50"
    >
      <div
        class="p-5 grid md:grid-cols-2 grid-cols-1 bg-white overflow-scroll text-black"
      >
        <div class="pb-4">
          <h2 class="flex items-center text-lg font-bold space-x-2">
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span>วิธีการใช้งานบน Mobile</span>
          </h2>
          <ul class="divide-y">
            <li class="flex items-center py-4 space-x-3">
              <img
                src="/finger_icon/1finger.png"
                class="object-center w-10"
              /><span>เลื่อน 1 นิ้ว เพื่อหมุน บ้าน</span>
            </li>
            <li class="flex items-center py-4 space-x-3">
              <img
                src="/finger_icon/2finger.png"
                class="object-center w-10"
              /><span>เลื่อน 2 นิ้ว เพื่อซูม บ้าน</span>
            </li>
            <li class="flex items-center py-4 space-x-3">
              <img
                src="/finger_icon/3fingers.png"
                class="object-center w-10"
              /><span>เลื่อน 3 นิ้ว เพื่อเลื่อน บ้าน</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="flex items-center text-lg font-bold space-x-2">
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>วิธีการใช้งานบน Desktop</span>
          </h2>
          <ul class="divide-y">
            <li class="flex items-center py-4 space-x-3">
              <img
                src="/finger_icon/mouse_l.png"
                class="object-center w-10"
              /><span>กดคลิกซ้ายค้าง แล้วลาก เพื่อหมุนบ้าน</span>
            </li>
            <li class="flex items-center py-4 space-x-3">
              <img
                src="/finger_icon/mouse_m.png"
                class="object-center w-10"
              /><span>เลื่อนเม้าส์กลาง ขึ้นลง เพื่อซูมบ้าน</span>
            </li>
            <li class="flex items-center py-4 space-x-3">
              <img
                src="/finger_icon/mouse_r.png"
                class="object-center w-10"
              /><span>กดคลิกขวาค้าง แล้วลาก เพื่อเลื่อนบ้าน</span>
            </li>
          </ul>
        </div>
      </div>
    </VueModal>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    showModal() {
      this.$modal.show("modal");
      this.modal = true;
    },
    hideModal() {
      this.$modal.hide("modal");
      this.modal = false;
    },
  },
};
</script>

<style></style>
