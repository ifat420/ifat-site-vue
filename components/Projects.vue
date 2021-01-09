<template>
  <div id="portfolio" class="projects">
    <div class="projects__head">
      <h4 class="light-text color-pink">What I have done</h4>
      <h2 class="title">PREVIOUS PROJECTS</h2>
    </div>
    <div class="projects__desc">
      <div v-for="(project, index) in projects" :key="index" class="pcard">
        <div class="pcard__image">
          <img class="pcard-img" :src="project.imageUrl" a.lt="" />
        </div>
        <a :href="project.url" target="_blank" class="pcard__url"> </a>
        <div class="pcard__info">
          <div class="pcard__detl">
            <h2 class="pcard__title">{{ project.name }}</h2>
            <p class="pcard__para">{{ project.desc }}</p>
          </div>
          <div class="pcard__lang">
            <span v-for="(lang, j) in project.langs" :key="j" class="pcard__lang-item"> {{ lang }} </span>
          </div>
          <div class="pcard__footer">
            <h5 class="pcard__footer-text">Show Project</h5>
            <svg class="icon-right" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z" fill="#071E48"></path>
              <path d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z" fill="#071E48"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: "Lucy Vail Floristry",
        desc: "Lucy Vail Floristry is an award-winning London based Floral Design company specialising in luxury installations and weddings as well as private and corporate events.",
        langs: ["Nuxt.js", "Stripe", "Go"],
        imageUrl: "./projects/lucyvailfloristry.jpg",
        url: "https://www.lucyvailfloristry.com/",
      },
      {
        name: "Summit Aviation",
        desc: "Summit Aviation is your solution for flight school, charter, aircraft sales, or aircraft management questions.",
        langs: ["Grav", "Php"],
        imageUrl: "./projects/cancer-survivor-flight-camp.jpg",
        url: "https://flysummit.com/",
      },
      {
        name: "The People's Rainwear",
        desc: "We make exceptional rainwear. High quality ponchos (yes ponchos!) designed to keep you dry & comfortable in any situation. The most versatile, waterproof, breathable and packable rain protection",
        langs: ["Shopify", "Liquid"],
        imageUrl: "./projects/hero-bg-original_5000x.jpg",
        url: "https://www.thepeoples.co/",
      },
      {
        name: "Nordic Snug",
        desc: "We offer a hugely attractive and versatile personalised blanket that serves as a wonderful luxurious indoor or outdoor accessory in homes, on the sporting fields or as a corporate promotional gift.",
        langs: ["Shopify", "Liquid"],
        imageUrl: "./projects/nordic.webp",
        url: "https://nordicsnug.com/",
      },
      {
        name: "Cat Friendly Sofa",
        desc: "Cat Friendly Sofa has created a sofa cover with a key privilege of custom made sofa covers.",
        langs: ["Nuxt.js", "WordPress"],
        imageUrl: "./projects/1a.jpg",
        url: "https://www.catfriendlysofa.com/en/",
      },
      {
        name: "Lina's Body Butters",
        desc: "Lina's Body Butters is a family company committed to offering handmade & effective body butters that are made with love.",
        langs: ["Shopify", "Liquid"],
        imageUrl: "./projects/body-and-butter.webp",
        url: "https://linasbodybutters.com/",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 5rem 0;

  &__head {
    text-align: center;
    margin-bottom: 5rem;
  }

  &__desc {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 3rem;
  }
}

.pcard {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  font-family: var(--font-primary);
  color: var(--color-secondary);
  text-align: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 4rem;

  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0s;
  will-change: transform;

  &__detl {
    padding: 1.5rem 1.5rem;
  }

  &__title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  &__image {
    display: block;
    margin-bottom: 2rem;
  }

  &__para {
    font-size: 1.5rem;
    font-weight: normal;
  }

  &__footer {
    border-top: 1px solid #e7edf1;
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  &__footer-text {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-right: 0.8rem;
    margin-bottom: 0;
  }

  &__url {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
  }

  &__lang {
    padding-bottom: 2rem;
  }

  &__lang-item {
    display: inline-block;
    padding: 4px 10px;
    background: #ededed;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 30px;
    text-align: center;
    margin: 0 0.5rem;
  }

  &__info {
    padding-bottom: 5rem;
  }
}

.pcard:hover .icon-right {
  transform: translateX(5px);
}

.pcard:hover {
  transform: translateY(-10px);
}

.pcard-img {
  width: 100%;
  min-height: 233px;
  object-fit: cover;
}
</style>
