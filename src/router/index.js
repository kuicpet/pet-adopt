import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cat from '../views/Cat.vue';
import Dog from '../views/Dog.vue';
import Pet from '../views/Pet.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cats',
    name: 'cat',
    component: Cat,
  },
  {
    path: '/dogs',
    name: 'dog',
    component: Dog,
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    component: Pet,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
