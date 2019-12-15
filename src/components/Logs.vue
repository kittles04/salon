<template>
<div class="col-md-3 box">
        <div class="log"  v-for="log in logs" v-bind:key="log.id">
            {{log.message}}
        </div>
    </div>
</template>

<script>
import { EventBus } from '../Event'


export default{
   name: "Logs",
  data() {
    return {
        logs: [],
        logCount: 0
    }
  },
  created() {
    EventBus.$on('new_log', (message) => {
        this.logs.push( {id: this.logCount, message: message} );

        this.logCount += 1; 
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './sass/_base.scss';
@import './sass/_components.scss';
@import './sass/_reset.scss';

.log {
        border: 1px solid rgb(124, 129, 124);
        padding: 13px;
        margin: 3px 0px;
        color: ghostwhite;
    }
   
</style>

