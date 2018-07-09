<template>
  <div id="app">
    <AppHeader />
    <router-view />
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
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 5vw;
}

@media (min-width: 800px) {
  #app {
    margin: 0 2rem;
  }
}
</style>
