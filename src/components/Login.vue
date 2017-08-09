<template lang="html">
  <form class="" v-on:submit.prevent="signIn">
    <div class="container">
      <label for="email"><b>Email</b></label>
      <input v-model="email" type="text" name="email" placeholder="Skriv email"  required/>
      <label for="email"><b>Lösenord</b></label>
      <input v-model="password" type="password" name="password" placeholder="Skriv lösenord" required />
      <button type="submit">Logga In </button>
    </div>
    <router-link to="/register">Registrera dig</router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email:'',
      password:''
    };
  },
  methods:{
    signIn(){
      var action = ()=>{
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      }
      this.email.length < 1 ? action= ()=> alert("fill in email") : null
      this.password.length < 1 ? action= ()=> alert("fill in password") : null
      action()
    }
  }
};
</script>

<style lang="css">

</style>
