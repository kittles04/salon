<template>
  <div id="app">
    <navigation/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Navigation.vue';

export default{
  name: 'App',
  components: {
    navigation
  }
}
</script>

<style>

</style>
