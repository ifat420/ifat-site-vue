<template>
  <div class="contact">
    <p class="contact-para">{{ text }}</p>
    <div class="contact-option">
      <a href="https://discordapp.com/users/487279059902922754/">
        <Discord />
      </a>
      <a href="skype:live:iftakhar.ahmed_2?chat">
        <Skype />
      </a>
    </div>
  </div>
</template>

<script>
import Discord from "~/components/icons/Discord";
import Skype from "~/components/icons/Skype";

export default {
  components: {
    Discord,
    Skype,
  },
  data: () => ({
    text: "I am interested in working on any project. Feel free to contact with me.",
  }),
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 5rem 2rem;
  text-align: center;
  background: #fff;
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 8rem;
}

.contact-para {
  font-size: 2rem;
}

.contact-option {
  border-radius: 5rem;
  padding: 1rem 0;
  margin: 0 auto;
}

.icons {
  margin-right: 1.5rem;
}

.icons-last {
  margin-right: 0;
}
</style>
