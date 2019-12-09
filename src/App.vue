<template>
  <div id="app">
    <navigation/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Navigation.vue';
import banner from './components/Banner.vue';

export default{
  name: 'App',
  components: {
    navigation,
    banner
  }
}
</script>

<style>

</style>
