<template>
  <div class="about">
   <p>{{greeting}}</p>
  </div>
</template>

<script>
export default{
  name: 'About',
  data:function(){
    return{
      greeting: 'About'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
