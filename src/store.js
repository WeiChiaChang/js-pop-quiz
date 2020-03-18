import Vue from "vue";
import quiz from './data/questions'

export const store = Vue.observable({
  quizVersion: null,
  stage: null,
  title: null,
  img: null,
  questions: [],
  currentQuestion: null,
  answers: [],
  explanation: null,
  // Firebase
  answerCount: 0,
  user: null,
  amount: 0,
  currentLogo: {},
  previousLogo: {},
  options: [],
  gameFinished: false,
  startTime: new Date().getTime(),
  endTime: 0,
  highScores: [],
  firebaseFeedback: false
});

export const mutations = {
  setQuizVersion(version) {
    store.quizVersion = version
  },
  setStage(stage) {
    store.stage = stage
  },
  setTitle(title) {
    store.title = title
  },
  setImg(img) {
    store.img = img
  },
  setQuestions(questions) {
    store.questions = questions
  },
  setCurrentQuestion(n) {
    store.currentQuestion = n
  },
  addAnswer(answer) {
    store.answers.push(answer)
  },
  setExplanation(text) {
    store.explanation = text
  },
  setAnswers(answers) {
    store.answers = answers
  },
  resetAnswers() {
    store.answers = []
  },
  // Firebase
  setUser(user) {
    store.user = user
  },
  setHighScores(scores) {
    store.highScores = scores
  },
  setFirebaseFeedback() {
    const feedback = true
    store.firebaseFeedback = feedback
  }
};

export const actions = {
  // async fetchData() {
  //   // let res = await fetch('https://api.jsonbin.io/b/5cdd1762dbffad51f8aa85a5')
  //   let res = await fetch(`./data.js`)
  //   console.log(res)
  //   mutations.setQuizVersion(res.version)
  //   mutations.setQuestions(res.questions)
  // },
  fetchData () {
    mutations.setQuizVersion(quiz.version)
    mutations.setQuestions(quiz.questions)
  }
};
