<template>
  <div
    class="project-block"
    :class="{ giant }"
  >
    <p v-if="text" v-html="text" />
    <AppFigure
      v-if="figure"
      v-bind="figure"
    />
  </div>
</template>

<script>
import AppFigure from './AppFigure.vue';
/**
  * This should contain figure data OR plain text, not both
  */
export default {
  name: 'ProjectBlockImage',
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
};
</script>

<style lang="scss">
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

  .figure {
    display: inline-block;
    width: 60vw;
    max-width: 1000px;
  }

  &.giant {
    p {
      font-size: 2rem;
    }

    .figure {
      width: 90vw;
      max-width: none;
    }
  }
}

@media (min-width: 800px) {
  .project-block {
    p {
      max-width: 600px;
      padding: 0;
    }
    &.giant p {
      font-size: 3rem;
    }
  }
}
</style>
