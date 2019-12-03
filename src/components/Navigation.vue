<template>
  <div id="container">
      <h2>Salon</h2>
          <ul id="container__ul">
            <li id="container--one"><router-link to="/" class="routerlink">Home</router-link></li>
            <li id="container--two"><router-link to="/video" class="routerlink">Video Page</router-link></li>
            <li id="container--three"><router-link to="/blog" class="routerlink">Blog Page</router-link></li>
          </ul>
  </div>
</template>

<script>
export default{
    name: 'navigation',
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