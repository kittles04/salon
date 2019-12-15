<template>
    <div class="col-md-6 box">
       <div class="roomTitle">
           <span v-if="loading"> Loading... {{roomName}}</span>
           <span v-else-if="!loading && roomName"> Connected to {{roomName}}</span>
           <span v-else>Select a room to get started</span>
       </div>
       <div class="row remote_video_container">
           <div id="remoteTrack"></div>
       </div>
       <div class="spacing"></div>
       <div class="row">
           <div id="localTrack"></div>
       </div>
   </div>
</template>

<script>
import { EventBus } from '../Event'
import Twilio, { connect, createLocalTracks, createLocalVideoTrack } from 'twilio-video'

export default{
   name: "Video",
 data() {
   return {
     loading: false,
     data: {},
     localTrack: false,
     remoteTrack: '',
     activeRoom: '',
     previewTracks: '',
     identity: '',
     roomName: null,
   }
 },
 props: ['username'], // props that will be passed to this component
 created() {},
 methods: {
   // Generate access token
   async getAccessToken() {},

   // Trigger log events 
   dispatchLog(message) {},

   // Attach the Tracks to the DOM.
   attachTracks(tracks, container) {},

    // Attach the Participant's Tracks to the DOM.
   attachParticipantTracks(participant, container) {},

   // Detach the Tracks from the DOM.
   detachTracks(tracks) {},

   // Detach the Participant's Tracks from the DOM.
   detachParticipantTracks(participant) {},

   // Leave Room.
   leaveRoomIfJoined() {},

   // Create a new chat
   createChat(room_name) {},
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './sass/_base.scss';
@import './sass/_components.scss';
@import './sass/_reset.scss';

.remote_video_container {
     left: 0;
     margin: 0;
     border: 1px solid rgb(124, 129, 124);
}
#localTrack video {
    border: 3px solid rgb(124, 129, 124);
    margin: 0px;
    max-width: 50% !important;
    background-repeat: no-repeat;
}
.spacing {
    padding: 20px;
    width: 100%;
}
.roomTitle {
    border: 1px solid rgb(124, 129, 124);
    padding: 4px;
    color: dodgerblue;
}
   
</style>
