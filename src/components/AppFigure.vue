<template>
  <figure class="figure">
    <img
    :srcset="srcset"
    :sizes="sizes"
    :src="src"
    :alt="alt"
    />
    <figcaption class="figure__caption">{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'AppFigure',
  props: {
    src: {
      type: String,
      default: '',
      required: true,
    },
    srcset: {
      type: String,
      default: '',
    },
    sizes: {
      type: String,
      default: '100vw',
    },
    alt: {
      type: String,
      default: '',
      required: true,
    },
    caption: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.figure {
  position: relative;

  img {
    display: inline-block;
    width: 100%;
  }
}
.figure__caption {
  display: block;
  padding: 1em 0;
  text-align: left;
}
</style>
