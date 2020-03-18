<template>
  <div class="container">
    <!-- <h1>Top 10 JavaScripters</h1> -->
    <h1 class="ranking_title">Rankings</h1>
    <div class="scores-container">
      <div class="score-row" v-for="(score, index) in highScores" :key="index">
        <h2 class="score-number">#{{index+1}}</h2>
        <div class="score-row-details">
          <div class="avatar_wrapper">
            <img :src="score.avatar" alt="">
          </div>
          <div class="user_info">
            <div class="user_name">{{score.name || 'Anonymous'}}</div>
            <span class="extra-detail">{{score.answerCount}} / {{score.amount}}</span>
          </div>
        </div>
      </div>
      <div v-if="highScores.length === 0">
        <h3>Loading...</h3>
      </div>
    </div>
    <!-- Go Back -->
    <div class="go_back_wrapper">
    <div @click="$router.push({ name: 'home' })">
      <div class="go_home">
        <svg
          fill="#FFFFFF"
          height="24"
          viewBox="0 0 24 16"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        Play the game
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { store } from "../../store"

export default {
  computed: {
    highScores() {
      return store.highScores
    }
  },
  mounted () {
    this.highScores
  }
}
</script>

<style lang="scss" scoped>
.go_back_wrapper {
  position: absolute;
  top: 22px;
  left: 20px;
  font-family: "jf-openhuninn";
}
.container {
  max-width: 100%;
  height: 76vh;
}
.scores-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.score-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4px 0;
}
.ranking_title {
  font-family: 'Press Start 2P', cursive;
  margin-top: 50px;
  font-size: 28px;
}
.score-row-details {
  // border: 1px solid;
  // * {
  //   border: 1px solid;
  // }
  font-family: "jf-openhuninn";
  max-width: calc(100% - 40px);
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  .avatar_wrapper {
    img {
      width: 60px;
      margin-right: 12px;
      border-radius: 50%;
    }
  }
  .user_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // font-family: 'Press Start 2P', cursive;
    .user_name {
      font-weight: bolder;
      font-size: 1.2rem;
      margin-bottom: 8px;
      width: 130px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }
    .extra-detail {
      display: block;
      text-align: left;
      margin-left: 0px;
      color: #bbbbbb;
    }
  }
}
.score-row-details > h3 {
  width: 200px;
  text-align: left;
  word-wrap: break-word;
}
.score-number {
  margin-right: 8px;
  margin-top: 15px;
  width: 75px;
  font-family: 'Press Start 2P', cursive;
}

h1 {
  border-bottom: 1px solid;
  width: 600px;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
h3 {
  margin-bottom: 4px;
}
h1,
h3 {
  color: #66bb6a;
  word-wrap: break-word;
}
a {
  text-decoration: none;
}
h4 {
  color: white;
}
.flex {
  display: flex;
}
.go_home {
  cursor: pointer;
}

@media screen and (max-width: 620px) {
  h1 {
    width: 90vw;
    font-size: 1.5em;
  }
}
</style>