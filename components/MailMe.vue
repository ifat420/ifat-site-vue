<template>
  <div class="mail-info" id="contact">
    <div class="mailme">
      <p class="sub" v-html="sub"></p>
      <a class="mailme-mail" :href="`mailto:${mail}`">{{ mail }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mail: "ifat802@gmail.com",
    sub: 'Have any project in mind ? <span class="color-pink"> Say Hello At </span>',
  }),
};
</script>

<style lang="scss" scoped>
.mail-info {
  padding-top: 2rem;
}

.mailme {
  max-width: 50rem;
  background: #fff;
  margin: 0 auto;
  padding: 5rem 2rem;
  text-align: center;
}

.sub {
  font-size: 1.8rem;
}

.mailme-mail {
  font-size: 2rem;
  color: var(--color-secondary);
  font-size: 300;
  font-family: var(--font-primary);
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: var(--color-primary);
  }
}
</style>
