<template>
  <div>
    <p>{{name}}</p>
  </div>
</template>
<script>
// import { Dashboard } from "vue3/DashboardApp"
export default {
  data () {
    return {}
  },
  components: {
    // Dashboard
  },
  props: {
    name: {
      type: String,
      default: "app3"
    }
  },
  mounted () {
  }
}
</script>
