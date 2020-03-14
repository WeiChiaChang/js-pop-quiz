import Vue from "vue";

export const store = Vue.observable({
  quizVersion: null,
  stage: null,
  title: null,
  img: null,
  questions: [],
  currentQuestion: null,
  answers: []
});

export const mutations = {
  setQuizVersion(version) {
    store.quizVersion = version;
  },
  setStage(stage) {
    store.stage = stage;
  },
  setTitle(title) {
    store.title = title;
  },
  setImg(img) {
    store.img = img;
  },
  setQuestions(questions) {
    store.questions = questions;
  },
  setCurrentQuestion(n) {
    store.currentQuestion = n;
  },
  addAnswer(answer) {
    store.answers.push(answer);
  },
  setAnswers(answers) {
    store.answers = answers;
  },
  resetAnswers() {
    store.answers = [];
  }
};

export const actions = {
  async fetchData(url) {
    let res = await fetch(url);
    res = await res.json();
    mutations.setQuizVersion(res.version);
    mutations.setQuestions(res.questions);
  }
};
