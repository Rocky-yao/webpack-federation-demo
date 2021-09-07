import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

function mount (el, name) {
  const app = createApp(Dashboard, { name: name });
  app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-dashboard');

  el && mount(el);
}

// export { mount, Dashboard };
export { Dashboard };
