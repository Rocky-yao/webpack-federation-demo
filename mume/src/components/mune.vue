<template>
  <div id="dev-mume">
    <!-- <HelloDerp @click.native="clickButton" />
    <Button />-->
    <app3 v-debounce="clickFunction" />
    <div @click.stop="clickFunction" class="circle">{{change}}</div>
    <pre>{{text}}</pre>
  </div>
</template>
<script>
import app3 from "./app3.vue"
import { loadRemoteComponent } from "./test"
import { mapState, mapMutations } from "vuex"

export default {
  name: 'mume',
  components: {
    // HelloDerp: (async () => {
    //   const component = await loadRemoteComponent({
    //     url: 'http://localhost:8888/core/remoteEntry.js',
    //     scope: 'core',
    //     module: './Button'
    //   });
    //   return component;
    // }),
    // Button: () => import('core/Button'),
    app3
  },
  computed: {
    ...mapState('app', ['app'])
  },
  data () {
    return {
      change: 1,
      text: 'hahaha<br/>xixixi\r\n'
    }
  },

  methods: {
    ...mapMutations('app', ['SET_APP']),
    clickButton () {
      this.change = this.change + 1
      this.SET_APP('app' + this.change)
    },
    haha (a) {
      console.log('haha:' + this.text, a)
    },
    clickFunction () {
      return {
        time: 500,
        type: 'click',
        fn: this.haha
      }
    }
  }
}
</script>
<style scoped>
.circle {
  width: 50px;
  height: 50px;
  background: lawngreen;
  animation: rote 0.1s linear infinite running;
}
@keyframes rote {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
