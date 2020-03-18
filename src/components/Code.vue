<template>
  <div class="code_wrapper" v-if="code">
		<pre v-html="highlighter(code)"></pre>
	</div>
</template>

<script>
import Prism from 'prismjs'

export default {
	props: {
    code: {
      required: true,
      type: String
    }
  },
	components: {
	},
	data () {
		return {
		}
	},
	methods: {
		highlighter (code) {
			return Prism.highlight(code, Prism.languages.javascript, 'javascript');
		}
	}
}
</script>

<style lang="scss" scoped>
.code_wrapper {
  height: 240px;
	overflow-y: scroll;
	background-color: rgb(24, 30, 36);
	border-radius: 4px;
	padding: 15px 20px;
	font-family: "Merriweather";
}
/deep/ pre {
	text-align: initial;
}
</style>
