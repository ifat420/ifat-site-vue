<template>
  <div>
    <div class="container">
      <div class="hum" :class="{ 'is-active': navStatus }" @click.stop="changeHumburgerStatus">
        <span class="hum__bar hum__bar--first"></span>
        <span class="hum__bar hum__bar--mid"></span>
        <span class="hum__bar hum__bar--last"></span>
      </div>
      <ul class="nav">
        <li class="nav__item"><a v-scroll-to="'#about'" class="nav__link" href=""> About </a></li>
        <li class="nav__item"><a v-scroll-to="'#skills'" class="nav__link" href=""> Skill </a></li>
        <li class="nav__item"><a v-scroll-to="'#portfolio'" class="nav__link" href=""> Portfolio </a></li>
        <li class="nav__item"><a v-scroll-to="'#contact'" class="nav__link" href=""> Contact </a></li>
        <li class="nav__item nav__item--resume"><a class="nav__link nav__link" href=""> Resume </a></li>
        <li class="nav__item"><button class="nav__link nav__btn">Resume</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    humburgerStatus: false,
  }),
  computed: {
    navStatus() {
      return this.$store.state.sidebarStatus;
    },
  },
  methods: {
    changeHumburgerStatus() {
      this.$store.dispatch("setSidebar", !this.navStatus);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: right;
}
.nav {
  display: inline-block;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: block;
    height: 0;
    overflow: hidden;
  }

  &__item {
    display: inline-block;
    margin: 0 1.5rem;

    @media (max-width: 768px) {
      display: block;
      text-align: center;
      margin: 0;
      // margin-bottom: 1.5rem;
    }

    &--resume {
      display: none;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  &__link {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-secondary);
    text-decoration: none;
    transition: 0.2s ease-in-out;

    @media (max-width: 768px) {
      display: block;
      padding: 1rem 0;
    }

    &:hover {
      color: var(--color-primary);
    }
  }

  &__btn {
    padding: 0.8rem 3rem;
    background: var(--color-primary);
    color: var(--color-tertiary);
    border-radius: 5rem;
    border: 2px solid var(--color-primary);
    transition: 0.2s ease-in-out;

    &:hover {
      background: transparent;
      color: var(--color-secondary);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &--active {
    height: 22rem;
  }
}

.hum {
  display: none;
  width: 40px;
  position: fixed;
  z-index: 999999;
  top: 2.5rem;
  right: 2.5rem;
  cursor: pointer;

  &__bar {
    display: block;
    height: 2px;
    background: var(--color-primary);
    margin-bottom: 8px;

    &--first {
      transition: all 0.3s ease;
      transform-origin: right;
    }

    &--last {
      transition: all 0.3s ease;
      // transform: rotate(45deg) scaleX(.72);
      transform-origin: right;
    }
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
}

.is-active .hum__bar--first {
  transform: rotate(-45deg) scaleX(0.74);
}
.is-active .hum__bar--mid {
  opacity: 0;
}
.is-active .hum__bar--last {
  transform: rotate(45deg) scaleX(0.72);
}
</style>
