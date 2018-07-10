<template>
  <ul class="portfolio-footer">
    <li v-for="item in items" :key="item.id">
      <router-link :to="item.url">{{item.label}}</router-link>
    </li>
  </ul>
</template>

<script>
import portfolio from '../data/portfolioItems';

export default {
  name: 'PortfolioFooter',
  data() {
    return portfolio;
  },
};
</script>

<style type="scss" scoped>
@import '../scss/_fonts.scss';

.portfolio-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 1rem 1rem 4rem;
}

.portfolio-footer li {
  display: inline-block;
  font-family: 'Open Sans Bold';
  font-size: 1.3rem;
  line-height: 1.2em;
  padding: 0.5em 0.25em;
}

.portfolio-footer a {
  color: black;
  text-decoration: none;
}

.portfolio-footer .router-link-exact-active {
  text-decoration: underline;
}
</style>
