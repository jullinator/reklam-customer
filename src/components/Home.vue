<template lang="html">
  <div class="">
    <p>{{username}}</p>

    <a class="logout" v-on:click="logout">Logga ut</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    logout(){
      firebase.auth().signOut()
    }
  }
};
</script>

<style lang="css">
  form{
    width:60%;
    margin:auto;
  }
</style>
