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
import Rooms from './components/Rooms.vue';
import Video from './components/Video.vue';
import AddRoom from './components/Rooms.vue';
import Logs from './components/Video.vue';

export default{
  name: 'App',
  components: {
    navigation,
    banner,
    Rooms,
    Video,
    AddRoom,
    Logs
  }
}
</script>

<style>

</style>
