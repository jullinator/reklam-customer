<template lang="html">
  <form v-on:subit.prevent="submit">
    <label for="file">Bild</label>
    <input type="file" @change="fileChange">
    <label for="name">Namn på filen</label>
    <input type="text" v-model="name" />
    <button type="submit">Ladda up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
        files:[],
        name: ''
    };
  },
  methods: {
      fileChange(e){
         this.files = e.target.files
     },
     submit(){
         var {name, files} = this
         var image = files[0]
         App.uploadImage({image, name})
     }
  }
};
</script>

<style lang="scss">
</style>
