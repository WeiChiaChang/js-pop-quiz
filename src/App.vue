<template>
  <div id="app">
    <router-view v-on:save-score="saveScore" />
    <login-view
      v-on:log-in="logIn"
      v-on:log-out="logOut"
    ></login-view>
  </div>
</template>

<script>
import { store, mutations } from "./store"
import LoginView from './components/LoginView'

import * as firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDVBX2F2W56MIZL7XKUgYtBQp_IVfInG78',
  authDomain: 'js-pop-quiz.firebaseapp.com',
  databaseURL: 'https://js-pop-quiz.firebaseio.com',
  storageBucket: 'js-pop-quiz.appspot.com'
}

export default {
  name: "App",
  components: {
    LoginView
  },
  created: function () {
    this.firebase()

    if (this.routePath === '/ranking') {
      this.getHighScores()
    }
  },
  computed: {
    routePath () {
      return this.$route.path
    }
  },
  watch: {
    routePath: function (path) {
      if (path === '/ranking' && store.highScores.length === 0) {
        this.getHighScores()
      }
    }
  },
  methods: {
    logIn: function () {
      firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider())
    },
    logOut: function () {
      firebase.auth().signOut().then(() => {
        mutations.setUser(null)
      })
    },
    firebase: function () {
      firebase.initializeApp(firebaseConfig)
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.database().ref('users/' + user.uid).set({
            name: user.displayName,
            email: user.email,
            photo_url: user.photoURL
          }).then(() => {
            mutations.setUser(user)
            mutations.setFirebaseFeedback()
          })
        } else {
          mutations.setFirebaseFeedback()
        }
      })
    },
    saveScore: function () {
      console.log('r')
      // Save only logged in users scores
      if (store.user) {
        // Make object of values as it might change before saving
        const name = 
          store.user.displayName ||
          store.user.email.substring(0, store.user.email.indexOf('@'))
        const objToDb = {
          answerCount: store.answerCount,
          amount: store.amount,
          startTime: store.startTime,
          endTime: store.endTime,
          name: name
        }
        // See if there is a previous score
        firebase.database().ref('/scores/' + store.user.uid).once('value').then((snapshot) => {
          const previousScore = snapshot.val()
          if (!previousScore || (previousScore && this.shouldSaveNewScore(objToDb, previousScore))) {
            firebase.database().ref('scores/' + store.user.uid).set(objToDb)
          }
        })
      }
    },
    shouldSaveNewScore: function (newScore, oldScore) {
      const higherScore = newScore.answerCount > oldScore.answerCount
      const sameScore = newScore.answerCount === oldScore.answerCount
      const betterTime = (newScore.endTime - newScore.startTime) < (oldScore.endTime - oldScore.startTime)
      const isNotCheating = (newScore.endTime - newScore.startTime) > (store.answerCount * 1000)
      return isNotCheating && (higherScore || (sameScore && betterTime))
    },
    getHighScores: function () {
      firebase.database()
        .ref('/scores')
        .orderByChild('answerCount')
        .limitToLast(10)
        .once('value')
        .then((snapshot) => {
          if (snapshot.val()) {
            const highScores = Object.keys(snapshot.val())
              .map((k) => snapshot.val()[k])
              .sort((a, b) => {
                if (a.answerCount > b.answerCount) {
                  return -1
                } else if (b.answerCount > a.answerCount) {
                  return 1
                } else {
                  return 0
                }
              })
            mutations.setHighScores(highScores)
          }
        }
      )
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");

code {
  // color: #cda869;
  color: white;
  font-weight: bolder;
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

#app {
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
</style>
