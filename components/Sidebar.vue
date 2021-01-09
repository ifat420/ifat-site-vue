<template>
  <div class="sidebar" :class="{ 'sidebar-active': navStatus }">
    <ul class="sbar">
      <li class="sbar__item"><a @click.prevent="linkClick" v-scroll-to="'#about'" class="sbar__link" href="#"> About </a></li>
      <li class="sbar__item"><a @click.prevent="linkClick" v-scroll-to="'#skills'" class="sbar__link" href="#"> Skill </a></li>
      <li class="sbar__item"><a @click.prevent="linkClick" v-scroll-to="'#portfolio'" class="sbar__link" href="#"> Portfolio </a></li>
      <li class="sbar__item"><a @click.prevent="linkClick" v-scroll-to="'#contact'" class="sbar__link" href="#"> Contact </a></li>
      <li class="sbar__item"><a class="sbar__link" href="#"> Resume </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  computed: {
    navStatus() {
      return this.$store.state.sidebarStatus;
    },
  },

  methods: {
    navClose() {
      this.$store.dispatch("setSidebar", false);
    },
    linkClick() {
      this.navClose();
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

.sidebar {
  position: fixed;
  z-index: 999;
  background: var(--white-color);
  right: 0;
  top: 0;
  height: 100vh;
  max-height: 100vh;
  width: 250px;
  background: #fff;
  text-transform: uppercase;
  font-weight: 600;
  overflow: auto;
  transform: translateX(250px);
  transition: all 0.3s ease-in-out;
}

.sbar {
  list-style: none;
  margin-top: 8rem;

  &__link {
    display: block;
    color: var(--color-primary);
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 1rem 0;

    &:hover {
      color: var(--color-tertiary);
      background: var(--color-primary);
    }
  }
}

.strans {
  transition: all 0.2s ease;
  overflow: hidden;
}
.sclosed {
  padding: 0;
  height: 0;
}

a.active {
  // background: $color-background-shade;
}

.sidebar-active {
  transform: translateX(0);
}
</style>
