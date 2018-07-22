<template>
  <figure class="figure">
    <img
    ref="image"
    :srcset="imgSrcset"
    :sizes="sizes"
    :src="imgSrc"
    :alt="alt"
    />
    <figcaption class="figure__caption">{{caption}}</figcaption>
  </figure>
</template>

<script>
import 'intersection-observer';
import photoIcon from '../assets/img_placeholder.png';

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
  data() {
    return {
      observer: null,
      isIntersected: false,
    };
  },
  computed: {
    imgSrc() {
      return this.isIntersected ? this.src : photoIcon;
    },
    imgSrcset() {
      return this.isIntersected ? this.srcset : '';
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        this.isIntersected = true;
        this.observer.disconnect();
      }
    });
    this.observer.observe(this.$refs.image);
  },
  beforeDestroy() {
    this.observer.disconnect();
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
