<template>
  <div class="container-fluid chat_container" id="videos">
      <p>{{greeting}}</p>
      <div class="row" v-if="authenticated">
        <Rooms />
        <Video :username="username"/>
        <Logs />
      </div>
      <div class="row" v-else>
        <div class="username">
            <form class="form-inline" @submit.prevent="submitUsername(username)">
              <div class="form-group mb-2">
                  <input type="text" class="form-control" v-model="username" >
              </div>
              <button type="submit" class="btn btn-primary mb-2 Botton">Submit</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import Rooms from '../components/Rooms.vue';
import Video from '../components/Video.vue';
import Logs from '../components/Logs.vue';
import AddRoom from '../components/AddRoom.vue';

export default{
  name: 'VideoPage',
  data:function(){
    return{
      greeting: 'VideoPage',
      username: "",
      authenticated: false
    }
  },
  components: {
    Rooms,
    Video,
    Logs
  },
  methods: {
    submitUsername(username) {
      if(!username) {
        return alert('please provide a username');
      }

      this.authenticated = true;
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#videos {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
   background: #2c3e50;
 }
 .box {
   border: 1px solid gray;
 }

 .username {
   margin: 12px auto 7px auto;
   color: wheat;
 }

   .Botton {
   color: #fff;
   background-color: #4d555f;
   border-color: #303840;
   padding: 8px;
   font-weight: bolder;
 }

</style>
