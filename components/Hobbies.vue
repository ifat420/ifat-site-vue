<template>
  <div class="hobbies">
    <div class="hobbies__head">
      <h4 class="light-text color-pink">Love to Do</h4>
      <h2 class="title">Hobbies</h2>
    </div>
    <div class="hobbies-detls">
      <div v-for="(hobby, index) in hobbies" :key="index" class="hobbies-item">
        <img class="hobbies-item-img" :src="hobby.icon" alt="icon" />
        <h2 class="hobbies-item-name">{{ hobby.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hobbies: [
      {
        name: "Reading Book",
        icon: "./hobby/reading.png",
      },
      {
        name: "Gymnastics",
        icon: "./hobby/gym.png",
      },
      {
        name: "Travelling",
        icon: "./hobby/travelling.png",
      },
      {
        name: "Tree planting",
        icon: "./hobby/tree-planting.png",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.hobbies {
  padding: 5rem 0;
  padding-top: 10rem;

  &__head {
    text-align: center;
    margin-bottom: 5rem;
  }
}

.hobbies-detls {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 3rem;
}

.hobbies-item {
  text-align: center;
  background: #fff;
  border-radius: 10px;
  padding: 1rem 2rem;
}

.hobbies-item-img {
  width: 100%;
  display: block;
  max-width: 20rem;
  margin: 0 auto;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.hobbies-item-name {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}
</style>
