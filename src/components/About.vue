<template>
  <div class="about">
    <p>{{greeting}}</p>
    <banner></banner>
    <div id="contentContainer">
      <md-content><h3>Salon is a Remote Book Club for Portland Francophones</h3>Proident cillum cupidatat minim fugiat officia nulla cupidatat irure aliqua ipsum culpa nulla qui. Est fugiat sunt exercitation sunt Lorem. Fugiat non amet adipisicing in adipisicing anim laborum anim labore nulla ad. Eu cupidatat magna Lorem esse do cupidatat ad Lorem incididunt velit voluptate duis aliqua.</md-content>
      </div>
  </div>
</template>

<script>
import banner from '../components/Banner.vue'
export default{
  name: 'about',
  name: 'PaperContent',
 
  data:function(){
    return{
      greeting: 'About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './sass/_base.scss';
@import './sass/_components.scss';
@import './sass/_reset.scss';
   
</style>
