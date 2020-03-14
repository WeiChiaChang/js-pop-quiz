<template>
  <div class="app">
    <header class="app-header">
      <span class="app-header-text">
        Show on
        <a href="https://github.com/dmtrbrl/hp-quiz">Github</a>
      </span>
      <h1 class="app-heading">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E" />
            <path
              d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
              fill="#000000"
            />
            <path
              d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
              fill="#000000"
            />
          </g>
        </svg>
        <span>Pop Quiz</span>
      </h1>
      <span class="app-header-text">
        Thanks
        <a href="https://giphy.com/" target="_blank">GIPHY</a> for the gifs
      </span>
    </header>
    <Quiz url="https://api.jsonbin.io/b/5cdd1762dbffad51f8aa85a5" />
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
  svg {
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
