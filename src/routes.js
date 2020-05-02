import Home from './assets/vue/pages/home.vue';
import LoginPage from './assets/vue/pages/login';
import BaseLayout from './assets/vue/pages/auth/base-layout';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login/',
    component: LoginPage
  },
  {
    path: '/scaffolding/',
    component:  BaseLayout
  }
];
