<template>
  <div id="navigation">
    <div id="main-nav">
      <h2>Salon</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/video">Video Page</router-link></li>
            <li><router-link to="/blog">Blog Page</router-link></li>
          </ul>
    </div>
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



</style>