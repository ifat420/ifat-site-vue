<template>
  <div id="skills" class="skill-sets">
    <div class="spzin">
      <div class="spzin__head">
        <h4 class="light-text color-pink">What I do</h4>
        <h2 class="title">SPECIALIZING IN</h2>
      </div>
      <div class="spzin__body">
        <ul class="skmenu">
          <li class="skmenu__item" @click="changeSkill(skill.value)" :class="{ 'skmenu__item--active': skill.value == activeSkill }" v-for="(skill, index) in skillMenu" :key="index">
            {{ skill.name }}
          </li>
        </ul>

        <div class="skill-chart">
          <div v-for="(item, index) in activeSkillSets" :key="index" class="card">
            <div class="box">
              <div class="percent">
                <svg>
                  <circle cx="70" cy="70" r="50"></circle>
                  <circle :style="`stroke-dashoffset: calc(440px - (305px * ${item.percentage}) / 100)`" cx="70" cy="70" r="50"></circle>
                </svg>
                <div class="number">
                  <h2>{{ item.percentage }}<span>%</span></h2>
                </div>
              </div>
            </div>
            <h3 class="title-secondary">{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeSkill: "frontend",
    skillMenu: [
      {
        name: "Frontend",
        value: "frontend",
        skills: [
          {
            name: "Vue",
            percentage: "80",
          },
          {
            name: "Nuxt.js",
            percentage: "90",
          },
          {
            name: "React",
            percentage: "25",
          },
          {
            name: "HTML",
            percentage: "85",
          },
          {
            name: "CSS",
            percentage: "80",
          },
        ],
      },
      {
        name: "Backend",
        value: "backend",
        skills: [
          {
            name: "Node.js",
            percentage: "55",
          },
          {
            name: "Moleculer",
            percentage: "40",
          },
          {
            name: "Express.js",
            percentage: "60",
          },
          {
            name: "Laravel",
            percentage: "30",
          },
        ],
      },
      {
        name: "Mobile",
        value: "mobile",
        skills: [
          {
            name: "Android",
            percentage: "15",
          },
          {
            name: "Flutter",
            percentage: "20",
          },
        ],
      },
      {
        name: "Programming",
        value: "programming",
        skills: [
          {
            name: "JavaScript",
            percentage: "80",
          },
          {
            name: "C",
            percentage: "90",
          },
          {
            name: "C++",
            percentage: "85",
          },
          {
            name: "Java",
            percentage: "40",
          },
          {
            name: "PhP",
            percentage: "60",
          },
          {
            name: "Dart",
            percentage: "50",
          },
        ],
      },
      {
        name: "Cloud",
        value: "cloud",
        skills: [
          {
            name: "AWS",
            percentage: "40",
          },
          {
            name: "Azure",
            percentage: "20",
          },
          {
            name: "DigitalOcean",
            percentage: "70",
          },
          {
            name: "Heroku",
            percentage: "20",
          },
        ],
      },
      {
        name: "Database",
        value: "db",
        skills: [
          {
            name: "MySQL",
            percentage: "60",
          },
          {
            name: "MongoDB",
            percentage: "80",
          },
          {
            name: "DynamoDB",
            percentage: "50",
          },
          {
            name: "Oracle ",
            percentage: "60",
          },
        ],
      },
      {
        name: "Other",
        value: "other",
        skills: [
          {
            name: "WordPress",
            percentage: "40",
          },
          {
            name: "Grav",
            percentage: "60",
          },
          {
            name: "Photoshop",
            percentage: "30",
          },
        ],
      },
    ],
  }),

  computed: {
    activeSkillSets() {
      return this.skillMenu.find((item) => item.value == this.activeSkill).skills;
    },
  },

  methods: {
    changeSkill(skill) {
      this.activeSkill = skill;
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-sets {
  padding-top: 5rem;
}

.spzin {
  background: #fff;
  border-radius: 1.5rem;
  padding: 5rem 4rem;
  padding-top: 5rem;
  margin-bottom: 8rem;

  @media (max-width: 600px) {
    padding: 5rem 2rem;
  }

  &__head {
    text-align: center;
    margin-bottom: 5rem;
  }

  &__body {
    margin: 0 auto;
  }
}

.skmenu {
  list-style: none;
  position: relative;

  &__item {
    display: inline-block;
    font-size: 1.8rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 5rem;
    border: 1px solid var(--color-primary);
    margin-bottom: 1.5rem;

    @media (max-width: 600px) {
      margin-bottom: 1.5rem;
    }

    &:not(:last-child) {
      margin-right: 2rem;

      @media (max-width: 600px) {
        margin-right: 1.5rem;
      }
    }

    &--active {
      background: var(--color-primary);
      color: var(--color-tertiary);
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }
}

%center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  @extend %center;
  position: relative;
  width: 150px;
  border-radius: 10px;
  border: none;
  // left: -18px;
  display: inline-block;
  margin-right: 20px;

  cursor: pointer;
  text-align: center;
  overflow: hidden;
  transition: 0.5s ease;

  @media (max-width: 600px) {
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    margin-right: 0px;
    width: 140px;
  }
}

.percent {
  position: relative;
  width: 150px;
  z-index: 1;

  h3 {
    margin-top: 16px;
    color: #777;
    font-size: 22px;
    transition: 0.5s ease;
  }

  .number {
    @extend %center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    h2 {
      color: #777;
      font-size: 22px;
      transition: 0.5s ease;

      span {
        color: #777;
        padding-left: 3px;
        font-size: 22px;
        transition: 0.5s ease;
      }
    }
  }

  svg {
    position: relative;
    width: 150px;
    transform: rotate(-85deg);

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: #f2f4f9;
      stroke-width: 10;
      stroke-linecap: round;
      transform: translate(5px, 5px);

      &:nth-child(2) {
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
      }
    }
  }
}

svg {
  circle {
    &:nth-child(2) {
      // stroke-dashoffset: calc(440px - (305px * 40) / 100);
      stroke: var(--color-primary);
    }
  }
}
</style>
