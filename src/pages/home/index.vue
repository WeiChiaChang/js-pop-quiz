<template>
  <div class="wrapper">
    <header class="app-header">
      <!-- <span class="app-header-text">
        Thanks To
        <a href="https://github.com/lydiahallie/javascript-questions" target="_blank">Lydia Hallie</a>
      </span> -->
      <h1 class="app-heading">
        <img src="../../assets/js-logo.svg" alt="">
        <span>Pop Quiz</span>
      </h1>
    </header>
    <github-corner v-if="$route.path !== '/ranking'" />
    <Quiz @save-score="$emit('save-score')" />
  </div>
</template>

<script>
import Quiz from '../../components/Quiz.vue'
import GithubCorner from '../../components/GithubCorner.vue'

export default {
  components: {
    Quiz,
    GithubCorner
  },
  methods: {
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 110px 15px 30px 15px;
}
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}
.app-header a {
  color: #eee;
  text-decoration: none;
  border-bottom: 1px solid rgba(238, 238, 238, 0.5);
}
.app-heading {
  display: flex;
  align-items: center;
  position: absolute;
  top: 30px;
  left: 50%;
  margin: 0;
  padding-left: 20px;
  font-size: 14px;
  line-height: 15px;
  transform: translateX(-50%);
  cursor: default;
  user-select: none;
  img {
    margin-right: 8px;
  }
}
@media (min-width: 600px) {
  .app-header {
    height: 90px;
    padding: 30px 15px;
    align-items: center;
  }
  .app-heading {
    top: 30px;
  }
}
.app-heading-icon {
  position: absolute;
  top: 1px;
  left: -5px;
  fill: #eee;
  width: 26px;
  height: 26px;
}
.app-heading span {
  display: block;
}
.app-header-text {
  opacity: 0.5;
}
</style>