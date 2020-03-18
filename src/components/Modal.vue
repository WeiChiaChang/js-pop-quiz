<template>
  <div
    class="explanation-modal"
    :class="{
      'explanation-modal-hidden': !visible,
      'explanation-modal-visible': visible
    }"
    @keydown.esc="modalToggle"
    :aria-hidden="!visible"
    tabindex="-1"
    role="dialog"
  >
    <transition name="scale">
      <div class="explanation-modal-container" v-if="visible">
        <div class="explanation-modal-inner">
          <div
            class="explanation-modal-content explanation_text"
            v-html="content !== null ? snarkdown(content) : content"
          />
          <div class="close_btn_wrapper" @click="modalToggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#eee" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#d6d3cd;"></path></svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import snarkdown from '../utils/snarkdown'

export default {
  props: {
    visible: {
      default: false
    },
    content: {
      default: `<p>TEMP 👻</p>`
    }
  },
  data () {
    return {
    }
  },
  methods: {
    modalToggle() {
      this.$emit('close');
    },
    snarkdown(text) {
      return snarkdown(text)
    }
  }
};
</script>

<style scoped lang="scss">
.close_btn_wrapper {
  cursor: pointer;
  position: absolute;
  top: -20px;
  color: rgb(214, 211, 205);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(3, 135, 199);
  transition: .4s ease-in-out;
  &:hover {
    transform: rotate(0.75turn);
  }
}
.fail-score-img {
  max-width: 450px;
}

.part-score-img {
  width: 320px;
}

.all-score-img {
  max-width: 480px;
}

.explanation-modal {
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
}

.explanation_text {
  height: 400px;
  overflow-y: scroll;
  background-color: #181e24;
  border-radius: 4px;
  padding: 24px 20px;
  text-align: justify;
  line-height: 1.5rem;
  color: darkgray;
  font-family: "jf-openhuninn";
  img {
    margin: 12px 0;
  }
}

.explanation-modal-container {
  // background: #3e3e3e;
  max-width: 95%;
  width: 450px;
  height: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  // padding: 15px;
  border-radius: 5px;
  .explanation-modal-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}

.explanation-modal-header {
  display: flex;
  justify-content: center;
  p {
    margin-bottom: 0;
  }
}

.explanation-modal-close {
  align-self: flex-start;
  font-size: 20px;
  color: rgba(217, 83, 79, 0.8);
  background: none;
  border: none;
  cursor: pointer;
}

.explanation-modal-content {
  font-size: 17px;
  width: 100%;
}

.explanation-modal-bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 999;
}

.explanation-modal-hidden {
  display: none;
}
.explanation-modal-visible {
  display: block;
}

.scale-enter-active {
  animation: bounce-in .3s;
}
.scale-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  70% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>