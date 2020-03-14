<template>
  <div class="app">
    <header class="app-header">
      <span class="app-header-text">
        Show on
        <a href="https://github.com/WeiChiaChang/pop-quiz">GitHub</a>
      </span>
      <h1 class="app-heading">
        <img src="./assets//js-logo.svg" alt="">
        <span>Pop Quiz</span>
      </h1>
      <span class="app-header-text">
        Thanks To
        <a href="https://github.com/lydiahallie/javascript-questions" target="_blank">Lydia Hallie</a>
      </span>
    </header>
    <Quiz />
  </div>
</template>

<script>
import Quiz from "./components/Quiz.vue";

export default {
  name: "app",
  components: {
    Quiz
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");

code {
  color: #cda869;
  // color: #42b883;
  text-shadow: initial;
  border-radius: 3px;
  font-family: "Merriweather";
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
  background: #020815;
  color: #eee;
}

.app {
  min-height: 100%;
  padding: 95px 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Merriweather", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  top: 50px;
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
