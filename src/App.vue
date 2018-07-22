<template>
  <div id="app">
    <AppHeader />
    <transition name="component-fade">
      <router-view />
    </transition>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './scss/_reset.scss';
@import './scss/_fonts.scss';

#app {
  position: relative;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 5vw;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

@media (min-width: 800px) {
  #app {
    margin: 0 2rem;
  }
}
</style>
