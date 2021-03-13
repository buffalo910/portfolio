<template>
  <div class="wrapper">
    <div id="menu" :class="[ scrollY < 370 ? 'menu-color-0' : 'menu-color-1' ]">
      <p class="menu-text" @click="scrollToMotto">
        <span class="menu-text-span"><font-awesome-icon :icon="['fas', 'coffee']" />MOTTO</span>
      </p>
      <p class="menu-text" @click="scrollToSkill">
        <span class="menu-text-span"><font-awesome-icon :icon="['fas', 'server']" />SKILL</span>
      </p>
      <p class="menu-text" @click="scrollToWork">
        <span class="menu-text-span"><font-awesome-icon :icon="['fas', 'briefcase']" />WORK</span>
      </p>
      <p class="menu-text" @click="scrollToProfile">
        <span class="menu-text-span"><font-awesome-icon :icon="['fas', 'id-card']" />PROFILE</span>
      </p>
    </div>
    <header id="header">
      <h1 class="title"><span class="title-text">My Portfolio</span></h1>
    </header>
    {{ imageUrl1 }}
    {{ imageUrl1 }}
  </div>
</template>

<script>
import assetsImage1 from "@/assets/pexels-ena-marinkovic-5843609.jpg"
import assetsImage2 from "../assets/pexels-ena-marinkovic-5843609.jpg"
export default {
  data() {
    return {
      scrollY: 0,
      imageUrl1: assetsImage1,
      imageUrl2: assetsImage2
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY
    },
    scrollToProfile () {
      event.preventDefault()
      this.$SmoothScroll(document.querySelector('#tag-profile'), 400, null, null, 'y')
    },
    scrollToWork () {
      event.preventDefault()
      this.$SmoothScroll(document.querySelector('#tag-works'), 400, null, null, 'y')
    },
    scrollToSkill () {
      event.preventDefault()
      this.$SmoothScroll(document.querySelector('#tag-skills'), 400, null, null, 'y')
    },
    scrollToMotto () {
      event.preventDefault()
      this.$SmoothScroll(document.querySelector('#tag-motto'), 400, null, null, 'y')
    }
  }
}
</script>

<style>
@import "../css/reset.css";
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Lobster&family=Montserrat:ital,wght@1,900&family=Roboto+Mono:wght@700&display=swap');

#menu {
  position: fixed;
  width: 100%;
  height: 60px;
  opacity: 0.85;
  transition: 0.5s;
}
.menu-color-0 {
  background-color: #000;
  color: #FFF;
}

.menu-color-1 {
  background-color: #F5F5F5;
  color: #696969;
}

.menu-text {
  display: table;
  font-family: 'Lobster', cursive;
  float: right;
  font-size: 24px;
  height: 100%;
  margin-left: 40px;
  margin-right: auto;
}

.menu-text:hover {
    cursor: pointer;
}

.menu-text-span {
  display: table-cell;
  vertical-align: middle;
  padding-right: 20px;
}

svg {
    margin-right: 5px;
}

#header {
  background-size: 100%;
  background-image: url("../assets/pexels-ena-marinkovic-5843609.jpg");
  background-repeat: no-repeat, no-repeat;
  background-size: cover;
  align-items: center;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.title-text {
  font-family: 'Lobster', cursive;
  color: #fff;
  line-height: 1em;
}

#menu:after {
  content: "";
  clear: both;
  display: block;
}

@media (min-width: 320px) {
  #header { height: 280px; }
  .title { font-size: 34px; }
}

@media (min-width: 800px) {
  #header { height: 360px; }
  .title { font-size: 48px; }
}

@media (min-width: 1200px) {
  #header { height: 460px; }
  .title { font-size: 84px; }
}

h1, h2, h3, h4, h5 {
  margin-top: 0;
  line-height: 1.2;
  color: inherit;
}

a {
  text-decoration: none;
}

header a:hover {
  text-decoration: underline;
}

</style>