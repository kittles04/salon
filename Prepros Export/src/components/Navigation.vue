<template>
  <div id="container">
      <h2>Salon</h2>
     
           <router-link to="/" class="routerlink1">Home</router-link>
           <router-link to="/video" class="routerlink2">Video Page</router-link>
           <router-link to="/blog" class="routerlink3">Blog Page</router-link>
  </div>
</template>

<script>


export default{
    name: 'navigation',
    components:{
    },
  data:function(){
    return{
      
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"scoped>
@import './sass/_base.scss';
@import './sass/_components.scss';
@import './sass/_reset.scss';




</style>