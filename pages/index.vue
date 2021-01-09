<template>
  <div class="container">
    <div class="main-info">
      <div class="profie-image">
        <img class="profie-image-img" :src="myImage" alt="my-image" />
      </div>
      <div id="about" class="intro">
        <h4 class="heading-2"><span class="color-pink"> Hello!</span> I am</h4>
        <h2 class="heading-1">{{ name }}</h2>
        <div class="intro__skills">
          <h5 class="color-pink heading-3">{{ designation }}</h5>
          <div class="intro__othter">
            <span class="skill skill--round-right">Web Developer</span>
            <span class="skill skill--round-right">Programmer</span>
            <span class="skill">Software Engineer</span>
          </div>
        </div>
        <div class="intro__btns">
          <a class="btn btn--pink mr-3" href="https://www.upwork.com/o/profiles/users/~01830b65e85ea015d7/"> Hire me </a>
          <a class="btn" v-scroll-to="'#about'" href="#"> About me </a>
        </div>
      </div>
    </div>

    <SpecializedIn />
    <Projects />
    <MailMe />
    <Connections />
    <Hobbies />
  </div>
</template>

<script>
import SpecializedIn from "~/components/SpecializedIn";
import Projects from "~/components/Projects";
import MailMe from "~/components/MailMe";
import Hobbies from "~/components/Hobbies";
import Connections from "~/components/Connections";

export default {
  components: {
    SpecializedIn,
    Projects,
    MailMe,
    Hobbies,
    Connections,
  },

  data: () => ({
    name: "Iftakhar Ahmed",
    designation: "Full Stack Developer",
    myImage: "./projects/1605272568716-high.jpg",
  }),
};
</script>

<style lang="scss" scoped>
.main-info {
  text-align: center;
}

.intro {
  padding: 8rem 0 5rem 0;

  &__skills {
    margin-top: 2rem;
  }

  &__btns {
    margin-top: 2rem;
  }
}

.skill {
  $circle-width: 0.8rem;

  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-secondary);
  display: inline-block;
  position: relative;

  &--round-right {
    margin-right: 2rem;

    &:after {
      content: "";
      position: absolute;
      width: $circle-width;
      height: $circle-width;
      border-radius: 50%;
      background: var(--color-secondary);
      right: -15px;
      top: 10px;
    }
  }
}

.profie-image {
  padding-top: 5rem;
}

.profie-image-img {
  max-width: 35rem;
  width: 100%;
  border-radius: 50%;

  @media (max-width: 480px) {
    max-width: 25rem;
  }
}
</style>
