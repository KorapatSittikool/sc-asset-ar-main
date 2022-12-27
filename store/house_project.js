export const state = () => ({
  logo: "/src/PAVE.png",
  title: "เพฟ",
  subtitle: "เพชรเกษม สาย 4",
  showTitleBox: true,
  page: [
    {
      id: "1",
      logo: "/src/PAVE.png",
      title: "เพฟ",
      subtitle: "เพชรเกษม สาย 4",
      file: "1",
      showTitleBox: true
    }, {
      id: "2",
      logo: "/src/PAVE.png",
      title: "เพฟ",
      subtitle: "เพชรเกษม สาย 4",
      file: "1",
      showTitleBox: true
    }, {
      id: "calm-bn-snkr",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด",
      subtitle: "บางนา-ศรีนครินทร์",
      file: "2508",
      showTitleBox: false
    }, {
      id: "calm-rkh-ww",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด",
      subtitle: "รามคำแหง-วงแหวน",
      file: "2508",
      showTitleBox: false
    }, {
      id: "could-bn-snkr",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด Could",
      subtitle: "บางนา-ศรีนครินทร์",
      file: "2509",
      showTitleBox: true
    }, {
      id: "could-rkh-ww",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด",
      subtitle: "รามคำแหง-วงแหวน",
      file: "2509",
      showTitleBox: true
    }, {
      id: "captivate-bn-snkr",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด",
      subtitle: "บางนา-ศรีนครินทร์",
      file: "2510",
      showTitleBox: true
    }, {
      id: "captivate-rkh-ww",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด",
      subtitle: "รามคำแหง-วงแหวน",
      file: "2510",
      showTitleBox: true
    }, {
      id: "mind-bn-snkr",
      logo: "/src/bkk_boulevard.webp",
      title: "บางกอก บูเลอวาร์ด",
      subtitle: "บางนา-ศรีนครินทร์",
      file: "2511",
      showTitleBox: false
    }
  ]
});

export const mutations = {
  SET_HOUSE(state, payload) {
    state.logo = payload.logo;
    state.title = payload.title;
    state.subtitle = payload.subtitle;
    state.showTitleBox = payload.showTitleBox;
  },
};
