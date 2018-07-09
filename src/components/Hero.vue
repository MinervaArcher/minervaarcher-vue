<template>
  <div class="hero">
    <h1>{{head}}</h1>
    <p v-if="subhead" v-html="subhead" />
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    head: {
      type: String,
      default: '',
      required: true,
    },
    subhead: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: 3rem 2rem;

  h1 {
    font-family: 'Muli', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    max-width: 800px;
  }

  p {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.6em;
    max-width: 800px;
  }
}

@media (min-width: 800px) {
  .hero {
    padding: 6rem;
    h1 {
      font-size: 3rem;
    }
    p {
      line-height: 2em;
    }
  }
}
</style>
