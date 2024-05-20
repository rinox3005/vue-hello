"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Hello Vue",
      image:
        "https://cdn-media-1.freecodecamp.org/images/0*xkJgg-6HskYrQ3N7.jpeg",
      description:
        "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages",
      bgStyle: "bg-light",
    };
  },
  methods: {
    // funzione per switch light/dark mode
    bgChange: function () {
      if (this.bgStyle === "bg-light") {
        this.bgStyle = "bg-dark";
      } else {
        this.bgStyle = "bg-light";
      }
    },
  },
}).mount("#vue-try");
