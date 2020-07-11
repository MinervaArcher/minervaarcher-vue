<template>
  <div class="page" role="main">
    <Hero
      :head="head"
      :subhead="subhead"
    />
    <div class="page__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue';

export default {
  name: 'Page',
  components: { Hero },
  props: {
    head: {
      type: String,
      default: 'Heading',
      required: true,
    },
    subhead: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.page {
  position: relative;
  width: 100%;
}

.page__content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
