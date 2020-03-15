<template>
  <img :src="url" alt="">
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String
    }
  }
};
</script>

