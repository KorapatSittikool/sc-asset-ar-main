<template>
  <div>
    <div class="fixed top-6 right-6 text-white">
      <div class="flex flex-row space-x-4 rounded-t-lg bg-[#EE7623] px-3 py-2 shadow-md"
           :class="{
             'bg-slate-300': floor === 1 ? false : true,
             'cursor-not-allowed': floor === 1 ? false : true,
             'cursor-pointer': floor === 1 ? true : false,
           }"
           @click="changeFloor(2)">
        Floor 2
      </div>
      <div class="flex flex-row space-x-4 rounded-b-lg bg-[#EE7623] px-3 py-2 shadow-md"
           :class="{
             'bg-slate-300': floor === 2 ? false : true,
             'cursor-not-allowed': floor === 2 ? false : true,
             'cursor-pointer': floor === 2 ? true : false,
           }"
           @click="changeFloor(1)">
        Floor 1
      </div>

      <div class="flex flex-row justify-center space-x-4 rounded-lg bg-[#EE7623] px-3 py-2 shadow-md drop-shadow-md mt-4">
        <img src="/finger_icon/360_icon.png"
             class="object-center object-contain w-10" />
      </div>
    </div>

    <iframe id="targetFrame"
            :src="src"
            frameborder="0"
            width="100%"
            height="100%"
            class="w-full min-h-screen"
            scrolling="no"
            allowusermedia
            allow="camera *"></iframe>

    <div
         class="fixed flex flex-row space-x-4 left-4 bottom-6 rounded-lg bg-[#F37A1F] p-3 shadow-md z-0">
      <div class="text-white">
        <h1 class="font-bold">{{ house_project.title }}</h1>
        <div class="flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p>{{ house_project.subtitle }}</p>
        </div>
      </div>
      <div class="bg-white rounded-lg self-center">
        <img :src="house_project.logo"
             class="object-contain h-12" />
      </div>
    </div>
    <Modal />
  </div>
</template>

<script>
export default {
  name: "bgWhite",
  layout: "home",
  data() {
    return {
      floor: 1,
      src: ""
    };
  },
  computed: {
    house_project() {
      return this.$store.state.house_project
    }
  },
  fetch() {
    const params = this.$nuxt.context.params
    const store = this.$store
    const page = store.state.house_project.page

    let paramId = params.id

    page.map((p) => {
      if (p.id === params.id) {
        store.commit("house_project/SET_HOUSE", {
          logo: p.logo,
          title: p.title,
          subtitle: p.subtitle,
          showTitleBox: p.showTitleBox,
        })
        paramId = p.file
      }
    })

    this.src = `/white/${paramId}.html`
  },
  methods: {
    changeFloor(floor) {
      if (floor !== this.floor) {
        this.floor = floor;
        document.getElementById("targetFrame").contentWindow.changeFloor(floor);
      }
    },
  },
};
</script>
