<template>
  <div>
    <p>{{name}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    name: {
      type: String,
      default: "app3"
    }
  },
  mounted(){
    console.log(this.name)
  }
}
</script>
