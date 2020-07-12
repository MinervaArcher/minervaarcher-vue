import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import PortfolioBotm from './views/PortfolioBotm.vue';
import PortfolioPersonal from './views/PortfolioPersonal.vue';
import PortfolioShoSeries from './views/PortfolioShoSeries.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Portfolio },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/portfolio/botm', component: PortfolioBotm },
    { path: '/portfolio/showtime', component: PortfolioShoSeries },
    { path: '/portfolio/personal', component: PortfolioPersonal }
  ],
});
