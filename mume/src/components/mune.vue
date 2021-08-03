<template>
  <div>this is vue2.x.======{{name}}</div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>
</style>