import Vue from 'vue';
import Router from 'vue-router';

import MatchesIndex from '@/views/Matches/Index';
import MatchesShow from '@/views/Matches/Show';

Vue.use(Router);


export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  mode: 'history',
  routes: [
    {
      path: '/matches',
      name: 'MatchesIndex',
      component: MatchesIndex,
    },
    {
      path: '/matches/:id',
      name: 'MatchesShow',
      component: MatchesShow,
    },
  ],
});
