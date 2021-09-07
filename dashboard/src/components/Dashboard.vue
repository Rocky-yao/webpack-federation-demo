<template>
  <div>
    <h3>Main App</h3>
    <!-- <Button /> -->
    <hr />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    // Button: defineAsyncComponent(() => import("core/Button")),
  },
  setup () {
    async function app3 () {
      let { obj } = await import('mume/MumeApp')
      console.log(obj)
    }
    app3()
    return {
      app3
    };
  },

};
</script>
