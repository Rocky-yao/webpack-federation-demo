import Vue from 'vue';
import mume from './components/mune.vue';
function mount(el,name) {
  new Vue({
    render: h =>
      h(mume, {
        props: {
          name: name,
        },
      }),
  }).$mount(el);
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-mume');
  el && mount(el);
}

export { mount };
