<template>
  <div class="body">
    <div @click="onWrapperClick" id="wrapper" class="wrapper" :class="{ 'nav-active': navStatus }">
      <Navigation />
      <Sidebar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";

export default {
  components: {
    Navigation,
    Sidebar,
    Footer,
  },
  computed: {
    navStatus() {
      return this.$store.state.sidebarStatus;
    },
  },
  methods: {
    onWrapperClick(e) {
      e.stopPropagation();
      if (e.target && e.target.id == "wrapper") {
        this.$store.dispatch("setSidebar", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: var(--color-tertiary);
  min-height: 100vh;
}

.wrapper {
  position: relative;
  padding: 0 1rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 400;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
  }
}

.nav-active {
  position: fixed;
  width: 100%;

  &::before {
    opacity: 1;
    visibility: visible;
  }
}
</style>
