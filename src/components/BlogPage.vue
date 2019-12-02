<template>
  <div class="blog">
   <p>{{greeting}}</p>
  </div>
</template>

<script>
export default{
  name: 'BlogPage',
  data:function(){
    return{
      greeting: 'Blog Page'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
