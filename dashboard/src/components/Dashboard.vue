<template>
  <div>this is {{name}}{{li}}.</div>
</template>
<script>

export default {
  props: {
    name: {
      type: String,
      default: 'default value',
    }
  },
  data () {
    return {
      li: '1'
    }
  },
  mounted () {
    console.log(this.name)
  }
}
</script>
