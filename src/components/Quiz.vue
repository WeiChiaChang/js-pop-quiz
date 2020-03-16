<template>
  <section class="quiz">
    <transition name="fade" mode="out-in" v-if="!loading">
      <div :key="currentQuestion">
        <div class="quiz-counter" v-if="stage === 'quiz'">{{currentQuestion}} / {{questions.length}}</div>
        <div class="welcome_img_wrapper">
          <img
            v-if="stage === 'welcome'"
            class="quiz-img"
            :src="welcomeImg"
            alt=""
          >
        </div>
        <!-- <Picture
          v-if="stage === 'welcome'"
          class="quiz-img"
          :url="welcomeImg"
        /> -->
        <Code v-if="stage === 'quiz'" :code="questions[currentQuestion-1].code" />
        <h1
          v-if="stage === 'quiz'"
          class="quiz-heading"
          v-html="snarkdown(questions[currentQuestion-1].title)"
        ></h1>
        <a
          href="#start-quiz"
          class="quiz-button"
          @click.prevent="initQuizStage"
          v-if="stage === 'welcome'"
        >Start Quiz</a>
        <p class="quiz-result" v-if="stage === 'results'" v-html="resultsInfo.text"></p>
        <a
          href="#restart-quiz"
          class="quiz-button"
          @click.prevent="initWelcomeStage"
          v-if="stage === 'results'"
        >Try again</a>

        <ul class="quiz-questions" v-if="stage === 'quiz'">
          <li
            class="quiz-question"
            v-for="(answer, i) in questions[currentQuestion-1].options"
            :key="i"
          >
            <button
              class="quiz-question-button"
              :class="{
                'correct': usersAnswer === answer.correct && answer.correct === true,
                'wrong': usersAnswer === answer.correct && usersAnswer !== true
              }"
              @click="handleAnswer(answer)"
              v-html="snarkdown(answer.correct + answer.text)"
            ></button>
          </li>
        </ul>
      </div>
    </transition>
    <div class="loader" v-else>
      <span></span>
    </div>
  </section>
</template>

<script>
import { store, mutations, actions } from "../store"
import { version as appVersion } from "../../package.json"
import Code from './Code'
import snarkdown from '../utils/snarkdown'

export default {
  name: "Quiz",
  components: {
    Code
  },
  data () {
    return {
      loading: true,
      usersAnswer: null,
      welcomeImg: require('../assets/js-logo.svg')
    };
  },
  computed: {
    stage: () => store.stage,
    // title: () => store.title,
    img: () => store.img,
    questions: () => store.questions,
    currentQuestion: () => store.currentQuestion,
    answers: () => store.answers,
    correctAnswers() {
      let count = 0;
      this.questions.forEach((q, i) => {
        if (q.correct == this.answers[i]) count++;
      });
      return count;
    },
    resultsInfo () {
      if (this.correctAnswers === 0) {
        return {
          text:
            "0 time!",
          img:
            "https://media0.giphy.com/media/720g7C1jz13wI/giphy.gif?cid=3640f6095c869951776a4a7a5110b5dc"
        };
      }
      if (this.correctAnswers < 10) {
        return {
          text:
            "Practice, practice, practice! <br>You'll be a clever as Dumbledore in no time!",
          img:
            "https://media0.giphy.com/media/720g7C1jz13wI/giphy.gif?cid=3640f6095c869951776a4a7a5110b5dc"
        };
      }
      if (this.correctAnswers < 15) {
        return {
          text:
            "Not too shabby! <br>Have a Harry Potter movie marathon and then try again!",
          img:
            "https://media2.giphy.com/media/UeeJAeey9GJjO/giphy.gif?cid=3640f6095c869e703631634241b759c1"
        };
      }
      if (this.correctAnswers < 20) {
        return {
          text:
            "Very good! <br>Have another go and you'll be getting full marks!",
          img: "https://media.giphy.com/media/TGLLaCKWwxUVq/giphy.gif"
        };
      }
      if (this.correctAnswers === 20) {
        return {
          text:
            "TOP MARKS! Nice work! <br>You have some serious wizard wisdom!",
          img: "https://media.giphy.com/media/9H279yb0blggo/giphy.gif"
        };
      } else {
        return {}
      }
    }
  },
  methods: {
    async fetchData () {
      await actions.fetchData();
    },
    async init () {
      await this.fetchData();
      if (
        !localStorage.stage ||
        localStorage.stage === "welcome" ||
        localStorage.appVersion !== appVersion ||
        localStorage.quizVersion !== store.quizVersion
      ) {
        this.initWelcomeStage();
      } else if (localStorage.stage === "quiz") {
        this.initQuizStage(localStorage.currentQuestion || 1);
      } else {
        this.initResultsStage();
      }
    },
    initWelcomeStage () {
      mutations.setStage("welcome");
      mutations.setTitle("How Well Do You Know <br>JavaScript ?");
      mutations.setImg(this.welcomeImg);
      mutations.setCurrentQuestion(0);
      mutations.resetAnswers();

      localStorage.appVersion = appVersion;
      localStorage.quizVersion = store.quizVersion;

      this.loading = false;
    },
    initQuizStage (currentQuestion) {
      mutations.setStage("quiz");
      mutations.setTitle("Which movie is this?");
      mutations.setAnswers(
        localStorage.answers ? localStorage.answers.split(",") : []
      );

      this.goToQuestion(+currentQuestion || 1);

      this.loading = false;
    },
    initResultsStage () {
      mutations.setStage("results");
      mutations.setAnswers(localStorage.answers.split(","));
      mutations.setTitle(
        `Your Score: ${this.correctAnswers} out of ${this.questions.length}`
      );
      mutations.setImg(this.resultsInfo.img);
      mutations.setCurrentQuestion(null);

      this.loading = false;
    },
    handleAnswer (answer) {
      let { correct } = answer
      if (this.usersAnswer !== null) return;
      this.usersAnswer = correct;
      mutations.addAnswer(correct);
      const nextQuestion = +this.currentQuestion + 1;

      setTimeout(() => {
        if (nextQuestion <= this.questions.length) {
          this.goToQuestion(nextQuestion);
        } else {
          this.initResultsStage();
        }
      }, 500);
    },
    goToQuestion (i) {
      this.usersAnswer = null;

      const img = this.questions[i - 1].img;
      mutations.setImg(img);
      mutations.setCurrentQuestion(i);
    },
    snarkdown (text) {
      return snarkdown(text)
    }
  },
  watch: {
    stage(val) {
      localStorage.stage = val;
    },
    answers(val) {
      localStorage.answers = val;
    },
    currentQuestion(val) {
      localStorage.currentQuestion = val;
    }
  },
  async mounted() {
    await this.init();
  }
};
</script>

<style>
.quiz {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.quiz-counter {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 1px 1px 2px #020815;
  font-size: 14px;
}
@media (min-width: 600px) {
  .quiz-counter {
    font-size: 16px;
  }
}

.welcome_img_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.quiz-img {
  display: block;
  width: 200px;
  margin-bottom: 1rem;
}

.quiz-heading {
  margin: 20px 0;
  font-size: 1.5rem;
  line-height: 1.8;
}
@media (min-width: 600px) {
  .quiz-heading {
    /* margin: -40px 0 30px; */
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px #020815;
  }
}

.quiz-result {
  margin: 20px 0;
  font-size: 12px;
  line-height: 1.4;
}
@media (min-width: 600px) {
  .quiz-result {
    margin: 20px 0 30px;
    font-size: 14px;
  }
}

.quiz-button {
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid rgba(238, 238, 238, 0.3);
  color: #eee;
  text-decoration: none;
  transition: border-color 0.5s;
}
.quiz-button:hover {
  border-color: #eee;
}

.quiz-questions {
  max-width: 400px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
}
.quiz-question {
  margin-top: 10px;
}
.quiz-question-button {
  width: 100%;
  padding: 13px;
  border: 2px solid rgba(238, 238, 238, 0.3);
  border-radius: 0;
  background: transparent;
  color: #eee;
  font-size: .8rem;
  cursor: pointer;
  transition: border-color 0.5s, background 0.5s;
  outline: none;
}

.quiz-question-button.correct {
  background: #5ba55b;
}
.quiz-question-button.wrong {
  background: #cc5454;
}
@media (min-width: 600px) {
  .quiz-question-button {
    font-size: 14px;
  }
}
@media (hover: hover) {
  .quiz-question-button:hover,
  .quiz-question-button:focus {
    border-color: #eee;
  }
}

/* Loader */
.loader {
  height: 32px;
  width: 32px;
}
.loader span {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
}
.loader span::before,
.loader span::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
  border: 2px solid #fff;
  border-radius: 50%;
  opacity: 0;
  animation: loader-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}
@keyframes loader-1 {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1.5);
    opacity: 0;
  }
}
.loader span::after {
  animation: loader-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s infinite;
}
@keyframes loader-2 {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0;
  }
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.95);
}
</style>
