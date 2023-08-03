import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from '../src/App.vue';
import { routes } from '../src/router/index.js'; // Destructure the routes array from the imported object

console.log('routes:', routes); // Check the value of the routes variable

describe('Testing Vue Router', () => {
  it('renders MainPage component when navigating to /', async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes, // Use the destructured routes array here
    });

    const app = createApp(App);
    app.use(router);

    const wrapper = mount(app);
    await router.push('/');
    expect(wrapper.findComponent({ name: 'MainPage' }).exists()).toBe(true);
  });

  it('renders ClassificationImage component when navigating to /classif', async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    const app = createApp(App);
    app.use(router);

    const wrapper = mount(app);
    await router.push('/classif');
    expect(wrapper.findComponent({ name: 'ClassificationImage' }).exists()).toBe(true);
  });

  it('renders FormulaireClinique component when navigating to /form', async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    const app = createApp(App);
    app.use(router);

    const wrapper = mount(app);
    await router.push('/form');
    expect(wrapper.findComponent({ name: 'FormulaireClinique' }).exists()).toBe(true);
  });

  it('renders ListePatients component when navigating to /liste', async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    const app = createApp(App);
    app.use(router);

    const wrapper = mount(app);
    await router.push('/liste');
    expect(wrapper.findComponent({ name: 'ListePatients' }).exists()).toBe(true);
  });
});
