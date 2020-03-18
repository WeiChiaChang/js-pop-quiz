<template>
  <div class="social_links">
    <!-- Sharingbutton Facebook -->
    <a
      class="resp-sharing-button__link"
      href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjs-pop-quiz.now.sh"
      target="_blank"
      rel="noopener"
      aria-label="Share on Facebook"
    >
      <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large">
        <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
            />
          </svg>
        </div>Facebook
      </div>
    </a>

    <!-- Sharingbutton Twitter -->
    <a
      class="resp-sharing-button__link"
      href="https://twitter.com/intent/tweet/?text=JavaScript%20Pop%20Quiz%20%E6%B8%AC%E9%A9%97%E6%B8%AC%E8%B5%B7%E4%BE%86%EF%BC%81%EF%BD%9E&amp;url=https%3A%2F%2Fjs-pop-quiz.now.sh"
      target="_blank"
      rel="noopener"
      aria-label="Share on Twitter"
    >
      <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large">
        <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
            />
          </svg>
        </div>Twitter
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social_links {
  margin-top: 4px;
}
a {
  text-decoration: none !important;
}
.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block;
}
.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.4em;
}
.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: "jf-openhuninn";
}
.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top;
}
.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle;
}
/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none;
}
/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none;
  line-height: 15px;
  text-decoration: none;
}
.resp-sharing-button--twitter {
  background-color: #55acee;
}
.resp-sharing-button--twitter:hover {
  background-color: #2795e9;
  text-decoration: none;
}
.resp-sharing-button--facebook {
  background-color: #3b5998;
}
.resp-sharing-button--facebook:hover {
  background-color: #2d4373;
}
.resp-sharing-button--tumblr {
  background-color: #35465c;
}
.resp-sharing-button--tumblr:hover {
  background-color: #222d3c;
}
.resp-sharing-button--reddit {
  background-color: #5f99cf;
}
.resp-sharing-button--reddit:hover {
  background-color: #3a80c1;
}
.resp-sharing-button--google {
  background-color: #dd4b39;
}
.resp-sharing-button--google:hover {
  background-color: #c23321;
}
.resp-sharing-button--linkedin {
  background-color: #0077b5;
}
.resp-sharing-button--linkedin:hover {
  background-color: #046293;
}
.resp-sharing-button--email {
  background-color: #777;
}
.resp-sharing-button--email:hover {
  background-color: #5e5e5e;
}
.resp-sharing-button--xing {
  background-color: #1a7576;
}
.resp-sharing-button--xing:hover {
  background-color: #114c4c;
}
.resp-sharing-button--whatsapp {
  background-color: #25d366;
}
.resp-sharing-button--whatsapp:hover {
  background-color: #1da851;
}
.resp-sharing-button--hackernews {
  background-color: #ff6600;
}
.resp-sharing-button--hackernews:hover,
.resp-sharing-button--hackernews:focus {
  background-color: #fb6200;
}
.resp-sharing-button--vk {
  background-color: #507299;
}
.resp-sharing-button--vk:hover {
  background-color: #43648c;
}
.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
  color: white;
}
.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}
.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
  color: white;
}
.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}
</style>