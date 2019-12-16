<template>
     <div class="col-md-3 rooms">
       <div class="room" v-for="room in rooms" v-bind:key="room.id" @click="showRoom(room.name)">
           {{room.name}}
       </div>
   <AddRoom /> <!-- Imported AddRoom component -->
   </div>
</template>

<script>
import { EventBus } from '../Event'
import AddRoom from '../components/AddRoom.vue'
import axios from 'axios'

export default {
 name: "Rooms", // Name of the component
 data() {
   return {
       rooms: [
           {id: 1, name: 'PHP Room'},
           {id: 2, name: 'Python Room'},
           {id: 3, name: 'Daily standup'}
       ],
       roomCount: 3, // used to keep track of the number of rooms present
       loading: false, // indicate when tracks in a room is being loaded
   }
 },
 components: {
   AddRoom // imported AddRoom component
 },
 created() {
     EventBus.$on('new_room', (data) => {
       this.roomCount++;
       this.rooms.push({id: this.roomCount, name: data});
   });
 },
 methods: {
   showRoom(room) {
       EventBus.$emit('show_room', room);
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './sass/_base.scss';
@import './sass/_components.scss';
@import './sass/_reset.scss';
    .rooms > .room {
       border: 1px solid rgb(124, 129, 124);
       padding: 13px;
       margin: 3px 0px;
       color: ghostwhite;
   }

   .rooms {
     border: 1px solid rgb(64, 68, 64);
     cursor: pointer;
   }
</style>

