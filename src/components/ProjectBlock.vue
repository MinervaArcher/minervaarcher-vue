<template>
  <div
    class="project-block"
    :class="{ giant }"
  >
    <p v-if="text" v-html="text" />
    <AppFigure
      v-if="figure"
      v-bind="figure"
      :sizes="figureSizes"
    />
  </div>
</template>

<script>
import AppFigure from './AppFigure.vue';
/**
  * This should contain figure data OR plain text, not both
  */
export default {
  name: 'ProjectBlock',
  components: { AppFigure },
  props: {
    text: {
      type: String,
      default: '',
    },
    figure: {
      type: [Boolean, Object],
      default: false,
    },
    giant: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    figureSizes() {
      if (!this.figure) return false;

      if (this.giant) return '90vw';

      return '(max-width: 800px) 90vw, 60vw';
    },
  },
};
</script>

<style lang="scss">
@import '../scss/_colors.scss';

.project-block {
  display: block;
  width: 100%;
  flex-grow: 1;
  text-align: center;
  margin-bottom: 5vw;

  p {
    display: inline-block;
    text-align: left;
    padding: 2rem;
    font-size: 1.2rem;
    line-height: 1.6em;
  }

  a {
    text-decoration: none;
    color: $gray;
    border-bottom: 1px solid $black;

    &:hover, &:focus, &:active {
      color: $black;
    }
  }

  .figure {
    display: inline-block;
    width: 90vw;
    max-width: 1000px;
  }

  &.giant {
    p {
      font-size: 2rem;
    }
  }
}

@media (min-width: 800px) {
  .project-block {
    p {
      max-width: 600px;
      padding: 0;
    }

    .figure {
      width: 60vw;
    }
    &.giant {
      p {
        font-size: 3rem;
      }
      .figure {
        width: 90vw;
        max-width: none;
      }
    }
  }
}
</style>
