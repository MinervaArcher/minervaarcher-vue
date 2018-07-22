<template>
  <a
    class="preview"
    :class="widthModifier"
    :href="url"
    :style="{'background-color': backgroundColor}"
  >
    <img
    class="preview__image"
    :srcset="srcset"
    sizes="
    (max-width: 800px) 50vw,
    100vw
    "
    :src="src"
    alt="">
    <div
    class="preview__title"
    :class="textModifier"
    >
      {{label}}
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    label: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    srcset: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    bkgdColor: {
      type: String,
      validator(value) {
        // validate 6-digit hex
        return /^#[A-Fa-f0-9]{6}/.test(value);
      },
    },
    textContrast: {
      type: String,
      default: 'dark',
      validator(value) {
        return ['dark', 'light'].includes(value);
      },
    },
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    widthModifier() {
      return this.fullWidth ? 'preview--full' : 'preview--half';
    },
    textModifier() {
      return `preview__title--${this.textContrast}`;
    },
    backgroundColor() {
      // Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      function getRandomInt() {
        const min = Math.ceil(0);
        const max = Math.floor(255);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      return this.bkgdColor || `rgba(${getRandomInt()},${getRandomInt()},${getRandomInt()},1)`;
    },
  },
};
</script>

<style lang="scss">
.preview {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  min-height: 40vh;
  padding: 3vw;
}

.preview--full {
  flex: 2 1 100%;
}

.preview--half {
  flex: 1 1 50%;
}

.preview__title {
  position: relative; /*important for stacking context with image */
  font-size: 2rem;
  text-align: center;
  opacity: 0;
  transition: opacity 200ms linear;
}

.preview__title--light {
  color: white;
}

.preview__title--dark {
  color: black;
}

.preview__image {
  position: absolute;
  width: 75%;
  max-width: 50vw;
  transition: opacity 200ms linear;
}

.preview:active,
.preview:hover,
.preview:focus {
  .preview__title {
    opacity: 1;
  }

  .preview__image {
    opacity: 0.3;
  }
}

@media (orientation: landscape) {
  .preview {
    min-height: 40vw;
  }
}

@media (min-width: 800px) {
  .preview__image {
    width: 50%;
  }
}

@media (min-width: 800px) and (orientation: landscape) {
  .preview {
    height: 70vh;
  }
}
</style>
