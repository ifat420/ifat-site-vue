<template>
  <div class="footer">
    <h2 class="title footer-title">Find Me</h2>
    <div class="socials">
      <a target="_blank" href="https://www.facebook.com/itsifat/">
        <Facebook />
      </a>

      <a target="_blank" href="https://github.com/ifat420">
        <Github />
      </a>

      <a target="_blank" href="https://www.instagram.com/itsifat/">
        <Instagram />
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/iftakhar-ahmed-abb896102/">
        <Linkedin />
      </a>

      <a target="_blank" href="https://twitter.com/ifat802">
        <Twitter />
      </a>

      <a target="_blank" href="https://www.upwork.com/o/profiles/users/~01830b65e85ea015d7/">
        <Upwork />
      </a>
    </div>
    <div class="copy-rgt">
      <p class="copy-rgt-text">
        Copyright &#169; {{ currentYear }}, <span class="color-pink">{{ name }}</span
        >. <br />
        All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import Facebook from "~/components/icons/Facebook";
import Github from "~/components/icons/Github";
import Instagram from "~/components/icons/Instagram";
import Linkedin from "~/components/icons/Linkedin";
import Twitter from "~/components/icons/Twitter";
import Upwork from "~/components/icons/Upwork";

export default {
  components: {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Upwork,
  },

  data: () => ({
    name: "Iftakhar Ahmed",
  }),

  computed: {
    currentYear() {
      let year = new Date().getFullYear();
      return year;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 15rem;
  background: #fff;
  padding: 4rem 4rem;
  text-align: center;
}

.footer-title {
  margin-bottom: 2rem;
}

.copy-rgt-text {
  font-size: 1.6rem;
  margin-top: 2rem;
}
</style>
