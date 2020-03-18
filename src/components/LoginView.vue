<template>
  <div class="login-root" v-if="firebaseFeedback">
    <button type="button" name="button" v-on:click="logIn" v-if="!user">
      Sign In
      <!-- <svg data-v-0f0421c2="" data-v-602d4f71="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path data-v-0f0421c2="" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> -->
    </button>
    <a href="#" v-on:click="openDropdown" v-if="user">
      <img :src="user.photoURL" :alt="user.displayName">
      <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </a>
    <div class="menu-content" v-if="dropdownOpen && user">
      <div class="dropdown-menu">
        <div class="dropdown-header">
          Signed in as
            <strong class="dropdown-name">
              {{user.displayName || user.email.substring(0, user.email.indexOf('@')) || 'Anonymous'}}
            </strong>
        </div>
        <div class="dropdown-divider">
        </div>
        <div
          @click="$router.push({ name: 'ranking' })"
          class="dropdown-item"
          v-if="routePath === '/'"
          v-on:click.native="closeDropdown"
        >📈 Ranking</div>
        <div
          @click="$router.push({ name: 'home' })"
          class="dropdown-item"
          v-if="routePath === '/ranking'"
          v-on:click.native="closeDropdown"
        >🕹 Play the game</div>
        <a target="_blank" href="https://github.com/WeiChiaChang" class="dropdown-item">💻 Source Code</a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item" v-on:click="logOut">Sign out</a>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store"

export default {
  data () {
    return {
      dropdownOpen: false
    }
  },
  watch: {
    dropdownOpen: function (value) {
      if (!value) {
        document.removeEventListener('click', this.dropdownAction)
      }
    }
  },
  computed: {
    user () {
      return store.user
    },
    routePath () {
      return this.$route.path
    },
    firebaseFeedback () {
      return store.firebaseFeedback
    }
  },
  methods: {
    openDropdown: function (e) {
      e.preventDefault()
      if (!this.dropdownOpen) {
        document.addEventListener('click', this.dropdownAction)
        window.setTimeout(() => {
          this.dropdownOpen = true
        })
      }
    },
    dropdownAction: function (e) {
      if (typeof e.target.className === 'object' || e.target.className.indexOf('dropdown') < 0) {
        this.dropdownOpen = false
      }
    },
    logIn: function () {
      this.$emit('log-in')
    },
    logOut: function () {
      this.$emit('log-out')
    },
    closeDropdown: function () {
      this.dropdownOpen = false
    }
  }
}
</script>

<style scoped>
.login-root {
  position: absolute;
  top: 16px;
  right: 20px;
  font-family: "jf-openhuninn";
}
button {
	/* width: 140px; */
  background-color: #000;
  color: #66BB6A;
  text-align: center;
  font-size: 12px;
  border: 1px solid #66BB6A;
  border-radius: 2px;
  padding: 8px 12px;
  outline: none;
  cursor: pointer;
  margin: 8px;
}
@media screen and (max-width:447px) {
  .login-root {
    right: 10px;
  }
  button {
    width: 70px;
    padding: 10px;
  }
}
button:focus {
  outline: 2px solid #66BB6A !important;
}
a {
  text-decoration: none;
}
img {
  width: 30px;
  height: 30px;
  margin: 8px 0;
  border-radius: 5px;
}
svg {
  margin-bottom: 9px;
}
.dropdown-menu {
  width: 180px;
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  background-color: #3e3e3e;
  color: white;
  background-clip: padding-box;
  padding-top: 5px;
  /* padding-bottom: 5px; */
  border-radius: 5px;
  margin-right: 8px;
  text-align: left;
  font-size: 14px;
  border: 1px solid rgba(128, 117, 117, 0.42);
  z-index: 9999999;
}
.dropdown-menu::after{
  top: -14px;
  right: 27px;
  left: auto;
  border: 7px solid transparent;
  border-bottom-color: #3e3e3e;
  position: absolute;
  display: inline-block;
  content: "";
}
.dropdown-header {
  padding: 4px 15px;
  color: white;
  line-height: 1.45rem;
}
.dropdown-item {
  display: block;
  padding: 10px 15px;
  overflow: hidden;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.dropdown-item:hover {
  color: #fff;
  text-decoration: none;
  background-color: #4183C4;
}
.dropdown-divider {
  height: 1px;
  /* margin: 4px 1px; */
  background-color: #e1e4e8;
}
.dropdown-name {
  white-space: nowrap;
}
</style>
