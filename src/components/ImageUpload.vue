<template lang="html">
  <form v-on:subit.prevent="submit">
    <label for="file">Bild</label>
    <input type="file" @change="fileChange">
    <label for="name">Namn på filen</label>
    <input type="text" v-model="name" />
  </form>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
